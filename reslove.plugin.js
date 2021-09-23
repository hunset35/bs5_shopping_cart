const fs = require("fs")
const path = require("path")
const { promisify } = require("util")
const stat = promisify(fs.stat)

class CustomPathPlugin {
  constructor(source, target, funcs) {
    this.source = source
    this.target = target
    this.funcs = funcs
  }

  apply(resolver) {
    const target = resolver.ensureHook(this.target)
    resolver.getHook(this.source).tapAsync("CustomPathPlugin", async (request, resolveContext, callback) => {
      if (!path.extname(request.path) && !request.path.includes("node_modules")) {
        const result = await this.redirectPath(request.path)

        if (result) {
          request.directory = false
          request.path = result.path
        }
      }
      resolver.doResolve(target, request, null, resolveContext, callback)
    })
  }

  async redirectPath(path) {
    const funcs = this.funcs.map(func => {
      return (() => {
        let customPath = func(path)
        return stat(customPath)
          .then(() => ({ exist: true, path: customPath }))
          .catch(() => ({ exist: false, path }))
      })()
    })

    return await Promise.all(funcs).then(responses => {
      return responses.find(res => res.exist)
    })
  }
}

module.exports = CustomPathPlugin
