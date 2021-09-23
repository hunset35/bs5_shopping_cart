import Vue from "vue"
import VueI18n from "vue-i18n"
import i18nTW from "./i18n/tw.js"
import errorMsgTW from "./errorMsg/tw.js"
import Cookies from "js-cookie"

Vue.use(VueI18n)

export const messages = {
  tw: {
    ...i18nTW,
    ...errorMsgTW
  }
}

const lang = Cookies.get("language")
if (!lang || !(lang && messages[lang])) {
  Cookies.set("language", "tw")
}

export const i18n = new VueI18n({
  messages,
  locale: Cookies.get("language")
})

export default i18n
