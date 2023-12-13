import { Ajax } from "../helpers/ajax.js";
import rawg_api from "../helpers/rawg_api.js";
import { Home } from "./Home.js";


export function Router() {
    const d = document,
        w = window,
        $main = d.querySelector('main')

    let { hash } = location

    $main.innerHTML = null

    if (!hash || hash === '#/') {
        $main.innerHTML = Home()

    } else if (hash.includes('#/Games')) {
        $main.innerHTML = '<h1>Games</h1>'

    } else if (hash.includes('#/Platforms')) {
        $main.innerHTML = '<h1>Platforms</h1>'

    } else {

    }
}