// const path = require("path")
// const webpack = require("webpack")

// const reslovePlugin = require("./reslove.plugin.js")

// const compressionWebpackPlugin = require("compression-webpack-plugin")
// const productionGzipExtensions = ["js"]

// const debug = process.env.NODE_ENV !== "production"
// const siteKey = process.env.SITE_KEY || "k00"
// const resourceCDN = process.env.VUE_APP_CDN_URL

// const isMock = process.env.MOCK_MODE === "true"

// module.exports = {
//     publicPath: "/mobile",
//   outputDir: "dist",
//   assetsDir: "static",
//   lintOnSave: true,
//   productionSourceMap: debug,
//   css: {
//     sourceMap: debug,
//     loaderOptions: {
//       less: {
//         lessOptions: {
//           modifyVars: {
//             ResourceCDNUrl: `"${resourceCDN}"`
//           }
//         }
//       }
//     }
//   },
//   configureWebpack: {
//     devtool: debug ? "source-map" : "false",
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "src"),
//         vue$: "vue/dist/vue.runtime.esm.js",
//         "bn.js": path.resolve(process.cwd(), "node_modules", "bn.js")
//       },
//       modules: [path.resolve(__dirname, `src`), path.resolve(__dirname), path.resolve(__dirname, "node_modules")],
//       extensions: [".vue", ".js", ".scss"],
//       plugins: [
//         new reslovePlugin("relative", "describedRelative", [
//           path => `${path}/modal/modal${siteKey}.vue`,
//           path => `${path}/modal/modalBase.vue`
//         ])
//       ]
//     },
//     plugins: [
//       // new BundleAnalyzerPlugin(),
//       new webpack.ProvidePlugin({
//         $: "jquery",
//         jquery: "jquery",
//         jQuery: "jquery",
//         "window.jQuery": "jquery"
//       }),
//       new webpack.DefinePlugin({
//         SITE_KEY: `"${siteKey}"`,
//         VUE_APP_CDN_URL: `"${resourceCDN}"`,
//         VUE_APP_IS_MOCK: JSON.stringify(JSON.parse(isMock))
//       }),
//       new compressionWebpackPlugin({
//         algorithm: "gzip",
//         test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
//         threshold: 10 * 1024,
//         minRatio: 0.8,
//         deleteOriginalAssets: false
//       })
//     ],
//     optimization: {
//       concatenateModules: !debug
//     }
//   },
// }