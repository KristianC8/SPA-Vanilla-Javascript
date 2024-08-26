import { Loader } from "./Loader.js"
import { ApiLinkForHome } from "./ApiLink.js"

export function Home() {

    const PS_TRAILERS = ['Wl05yGSDpxY', 'nq1M_Wc4FIc', 'EZr1HXkEahs']
    const XB_TRAILERS = ['7jyei8habwk', 'bZ8ztTylrqw', 'knhUkKioASo']

    return ` 
    <section class="home-games">
        <section class="home-best-games">
            <h2>TOP RATED</h2>
               ${Loader()}
            <div class="home-grid-games">
            </div>
        </section>
        <section class="home-trailers">
            <h2>FEATURED TRAILERS</h2>
            <div class="home-trailers-content">
            <div class="trailer">
            <lite-youtube class="trailer-yt" videoid=${PS_TRAILERS[Math.floor(Math.random() * 3)]}></lite-youtube>
            </div>
            <div class="trailer">
            <lite-youtube class="trailer-yt" videoid=${XB_TRAILERS[Math.floor(Math.random() * 3)]}></lite-youtube>
            </div>
            </div>
        </section>
    </section>
    ${ApiLinkForHome()}
   `
}

//<section class="home-news">
//    <h2>NEWS</h2>
//</section>


// return `
// <section class="home-games">
//     <section class="home-best-games">
//     <h2>MEJOR CALIFICADOS</h2>
//     <div class="home-grid-games">
//     <div class="card-1 cards">
//     <img class="card-img-1" src="" alt="">
//     <h3 class="card-name-1">name</h3>
//     <span class="card-note-1">90</span>
//     </div>
//     <div class="home-cards cards">
//     <img class="card-img" src="" alt="">
//     <div class="card-info">
//     <h3 class="card-name">name</h3>
//     <span class="card-note">90</span>
//     </div>
//     </div>
//     <div class="home-cards cards">
//     <img class="card-img" src="" alt="">
//     <div class="card-info">
//     <h3 class="card-name">name</h3>
//     <span class="card-note">89</span>
//     </div>
//     </div>
//     <div class="home-cards cards">
//     <img class="card-img" src="" alt="">
//     <div class="card-info">
//     <h3 class="card-name">name</h3>
//     <span class="card-note">89</span>
//     </div>
//     </div>
//     <div class="home-cards cards">
//     <img class="card-img" src="" alt="">
//     <div class="card-info">
//     <h3 class="card-name">name</h3>
//     <span class="card-note">89</span>
//     </div>
//     </div>
//     </div>
//     </section>
//     <section class="home-trailers">
//     <h2>TRAILERS DESTACADOS</h2>
//     <div class="home-trailers-content"></div>
//     </section>
// </section>

// <section class="home-news">
// </section>
//     `
//}