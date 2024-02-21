import { Loader } from "./Loader.js"
import { ApiLinkForHome } from "./ApiLink.js"

export function Home() {
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
            <iframe class="trailer" width="75%" height="40%" src="https://www.youtube.com/embed/nq1M_Wc4FIc?si=P01EAukpS78PcfrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe class="trailer" width="75%" height="40%" src="https://www.youtube.com/embed/FYH9n37B7Yw?si=WFSim6PMcP3p3PQ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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