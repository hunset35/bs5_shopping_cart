import EventBus from "@/utils/eventBus"

// 畫面大小調整時觸發
export function resetOrientation() {
    // eslint-disable-next-line
    ;(function(doc, win) {
      //此处是兼容ios的写法
      let supportOrientation = typeof window.orientation === "number" && typeof window.onorientationchange === "object",
        oFlag = false,
        ow,
        lFlag = false,
        lh
      let init = function() {
        let orientation,
          docEl = doc.documentElement,
          dpr = Math.min(win.devicePixelRatio, 3),
          count = 0
        let updateOrientation = function() {
          let clientWidth = docEl.clientWidth
          let clientHeight = docEl.clientHeight
          if (supportOrientation) {
            orientation = window.orientation
            switch (orientation) {
              case 90:
              case -90:
                // 横屏
                orientation = "landscape"
                EventBus.$emit("LandscapeTrigger", true)
                break
              default:
                // 竖屏
                orientation = "portrait"
                EventBus.$emit("LandscapeTrigger", false)
                break
            }
          } else {
            orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait"
          }
          docEl.setAttribute("class", orientation)
          if (!oFlag) {
            if (clientWidth > clientHeight) {
              ow = clientHeight
            } else {
              ow = clientWidth
            }
          }
          if (!lFlag) {
            if (clientHeight > clientWidth) {
              lh = clientWidth
              lh = clientWidth
            } else {
              lh = clientHeight
            }
          }
  
          if (orientation === "portrait") {
            // 竖屏
            if (clientWidth == undefined) return
            if (clientWidth / dpr > 750) {
              clientWidth = 750 * dpr
            }
            oFlag = true
            const h = ow / 2300
            //设置页面字体大小
            $("html").css("font-size", new Number(100 * h).toFixed(0) + "px")
          }
          if (orientation === "landscape") {
            if (clientHeight === undefined) return
            if (clientHeight / dpr > 750) {
              clientHeight = 750 * dpr
            }
            lFlag = true
            const h = lh / 2600
            $("html").css("font-size", new Number(100 * h).toFixed(0) + "px")
          }
        }
        if (supportOrientation) {
          window.addEventListener(
            "orientationchange",
            function() {
              if (count < 20) {
                count++
                setTimeout(updateOrientation, 100)
              }
            },
            false
          )
        } else {
          //监听resize事件
          window.addEventListener(
            "resize",
            function() {
              if (count < 20) {
                count++
                setTimeout(updateOrientation, 100)
              }
            },
            false
          )
        }
        updateOrientation()
      }
  
      init()
    })(document, window)
  }