import { Loader } from "./Loader.js"

export function Results() {
    return `
    <section class="results">
         <h2 class="results-title">RESULTS FOR:  "${!localStorage.getItem('gmSearch') ? '' : (localStorage.getItem('gmSearch')).toUpperCase()}"</h2>
         ${Loader()}
         <div class="results-grid isInactive">
            
         </div>
    </section>
    `
}