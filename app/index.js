// import api from "./helpers/rawg_api.js"
import { App } from "./App.js"
import { infiniteScroll } from "../app/helpers/infite_scroll.js"


document.addEventListener("DOMContentLoaded", e => {
    App()
    infiniteScroll()
    localStorage.removeItem('query')
    localStorage.removeItem('EndPage')

    const menu = localStorage.getItem('sideMenu')

    if (!menu || menu === 'closed') {
        document.querySelector('.game-screenshots-content').classList.add('closed')
        document.querySelector('.game-screenshots-contentM').classList.add('closed')
        document.querySelector('.game-screenshots-content').classList.remove('open')
        document.querySelector('.game-screenshots-contentM').classList.remove('open')
        document.querySelector('.game-screenshots-flex').classList.add('closed')
        document.querySelector('.game-screenshots-flex').classList.remove('open')
    } else {
        document.querySelector('.game-screenshots-content').classList.add('open')
        document.querySelector('.game-screenshots-contentM').classList.add('open')
        document.querySelector('.game-screenshots-content').classList.remove('closed')
        document.querySelector('.game-screenshots-contentM').classList.remove('closed')
        document.querySelector('.game-screenshots-flex').classList.add('open')
        document.querySelector('.game-screenshots-flex').classList.remove('closed')
    }

});
window.addEventListener("hashchange", e => {
    // api.page = 1
    App()
    const menu = localStorage.getItem('sideMenu')

    if (!menu || menu === 'closed') {
        document.querySelector('.game-screenshots-content').classList.add('closed')
        document.querySelector('.game-screenshots-contentM').classList.add('closed')
        document.querySelector('.game-screenshots-content').classList.remove('open')
        document.querySelector('.game-screenshots-contentM').classList.remove('open')
        document.querySelector('.game-screenshots-flex').classList.add('closed')
        document.querySelector('.game-screenshots-flex').classList.remove('open')
    } else {
        document.querySelector('.game-screenshots-content').classList.add('open')
        document.querySelector('.game-screenshots-contentM').classList.add('open')
        document.querySelector('.game-screenshots-content').classList.remove('closed')
        document.querySelector('.game-screenshots-contentM').classList.remove('closed')
        document.querySelector('.game-screenshots-flex').classList.add('open')
        document.querySelector('.game-screenshots-flex').classList.remove('closed')
    }
})
