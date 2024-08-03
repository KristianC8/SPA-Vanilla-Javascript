import { Ajax } from "../helpers/ajax.js";
import api from "../helpers/rawg_api.js";

export function GetResults() {

    let query = localStorage.getItem('gmSearch')

    const $gridResults = document.querySelector('.results-grid')
    const $Results = document.querySelector('.results')

    Ajax({
        domain: api.GAMES,
        search: query,
        cbSuccess: (results) => {
            console.log(results)
            let allResults = results.results

            if (!query || query === '') {
                let html = `
            <div class="results-white">
             Please enter the game to search for
            </div>
            `
                $Results.innerHTML = html
            }

            if (allResults.length === 0) {
                let html = `
            <div class="results-notfound">
            ⚠ Sorry no results found for this search ⚠
            </div>
            `
                $Results.innerHTML = html
            }

            let html = ''
            allResults.forEach(result => {
                html += `
                <a class="result-link" href="#/${result.slug}">
                <div class="result-card">
                    <img src="${result.background_image}" alt="${result.name}" class="result-img" />
                    ${result.name}
                </div>
                </a>
                `
            });

            $gridResults.innerHTML = html
            $gridResults.classList.remove('isInactive')
        }
    }, '.results-grid')
}