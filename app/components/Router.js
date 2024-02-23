import { Home } from "./Home.js";
import { GetBestGames } from "./GetBestGames.js";
import { Games } from "./Games.js";
import { FilterGames, LibraryGames } from "./LibraryGames.js";
import { Platforms } from "./Platforms.js";
import { Game } from "./Game.js";
import { GetGame } from "./GetGame.js";
import { GetSreenshots } from "./GetScreenshots.js";
import { Results } from "./Results.js";
import { GetResults } from "./GetResults.js";
import { platformsTheme } from "../helpers/platforms_theme.js";




export function Router() {
    const d = document,
        w = window,
        $main = d.querySelector('.main-principal')

    let { hash } = w.location

    $main.innerHTML = null

    if (!hash || hash === '#/') {
        $main.innerHTML = Home()
        GetBestGames()

    } else if (hash.includes('#/Games')) {
        $main.innerHTML = Games()
        LibraryGames()
        FilterGames()

    } else if (hash.includes('#/Platforms')) {
        $main.innerHTML = Platforms()
        platformsTheme()

    } else if (hash.includes('#/search')) {
        $main.innerHTML = Results()
        GetResults()

    } else {
        $main.innerHTML = Game()
        GetGame()
        GetSreenshots()
    }
}
