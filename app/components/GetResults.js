import { Ajax } from "../helpers/ajax.js";
import api from "../helpers/rawg_api.js";
import api_key from "../helpers/API/api_key.js";


export function GetResults() {

    let query = localStorage.getItem('gmSearch')
    let URL = `${api.SEARCH}?key=${api_key.APIKEY}&search=${query}`

    const $gridResults = document.querySelector('.results-grid')
    const $Results = document.querySelector('.results')

    Ajax({
        url: URL,
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
                    <h3>${result.name}</h3>
                </div>
                </a>
                `
            });

            $gridResults.innerHTML = html
            $gridResults.classList.remove('isInactive')
        }
    }, '.results-grid')
}