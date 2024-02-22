import api from "../helpers/rawg_api.js"
import { Ajax } from "../helpers/ajax.js"
import { GameCard, FirstGameCard } from "./GameCard.js"

export function GetBestGames() {
    const $gridBestGames = document.querySelector('.home-grid-games'),
        $Loader = document.querySelector('.loader'),
        $footer = document.querySelector('.footer')

    Ajax({
        domain: api.GAMES,
        metacritic: `80,${Math.floor(Math.random() * (100 - 92) + 92)}`,
        ordering: `-metacritic`,
        platforms: `187,18,1,186`,
        page_size: `5`,
        dates: `2010-01-01,2023-12-31`,
        cbSuccess: (best_games) => {
            let games = best_games.results

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