// import api from "./helpers/rawg_api.js"
import { App } from "./App.js"
import { infiniteScroll } from "../app/helpers/infite_scroll.js"


document.addEventListener("DOMContentLoaded", e => {
    App()
    infiniteScroll()
    localStorage.removeItem('query')
    localStorage.removeItem('EndPage')

});
window.addEventListener("hashchange", e => {
    // api.page = 1
    App()
})
