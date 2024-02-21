import api from "../helpers/rawg_api.js"
import { Ajax } from "../helpers/ajax.js"
import { GameCard, FirstGameCard } from "./GameCard.js"

export function GetBestGames() {
    const $gridBestGames = document.querySelector('.home-grid-games'),
        $Loader = document.querySelector('.loader'),
        $footer = document.querySelector('.footer')

    Ajax({
        url: api.BEST_GAMES,
        cbSuccess: (best_games) => {
            let games = best_games.results
            // console.log(games)
            let html = ''
            for (let i = 0; i < games.length; i++) {
                let game = games[i]
                if (i === 0) {
                    html += FirstGameCard(game)
                } else {
                    html += GameCard(game)
                }
            }
            $Loader.style.display = 'none'
            $gridBestGames.innerHTML = html
            $footer.classList.remove('isInactive')

        }
    }, '.home-best-games')
}