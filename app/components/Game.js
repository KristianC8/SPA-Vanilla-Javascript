// import { Ajax } from "../helpers/ajax.js";
// import api from "../helpers/rawg_api.js"
// import api_key from "../helpers/API/api_key.js";
import { Loader } from "./Loader.js"
import { ApiLinkForGame } from "./ApiLink.js"

export function Game() {

  // let { hash } = window.location
  // console.log(hash.slice(2))

  // let url = `${api.GAME}${hash.slice(2)}?key=${api_key.APIKEY}`
  // console.log(url)

  // Ajax({
  //     url: url,
  //     cbSuccess: (game) => {
  //         console.log(game)
  //     }
  // }, '.game')




  return `
  <section class="game-view">  
  ${Loader()}
    <div class="game isInactive">        
    </div>

    <div class="game-screenshots isInactive">
      <div class="game-screenshots-content">
        <div class="game-ss game-ss-title">
          <h3>SCREENSHOTS</h3>
        </div>
        <div class="game-ss game-ss-content">
          <div class="game-ss-bigcontent">
          <img class="game-screenshot" src="" alt="ss1">
          </div>
        </div>
        <div class="game-ss game-ss-more">
        </div>
        <button class="game-ss-btn game-ss-prevbtn"></button>
        <button class="game-ss-btn game-ss-nextbtn"></button>
      </div>
 

        <div class="game-screenshots-contentM">
          <div class="game-ss game-ss-title">
            <h3>SCREENSHOTS</h3>
          </div>
          <div class="game-ss game-ss-contentM">
            <div class="game-ss-bigcontentM">
              <img class="game-screenshotM" src="" alt="ss1">
            </div>
          </div>
          <div class="game-ss game-ss-more">
          </div>
            <button class="game-ss-btnM game-ss-prevbtnM"></button>
            <button class="game-ss-btnM game-ss-nextbtnM"></button>
        </div>
        <div class="game-screenshots-flex">
        ${ApiLinkForGame()}
        </div>   
    </div>

    <div class="popup-ss isInactive">
        <div class="popup-ss-grid">
      <div class="popup-ss-container">
        <div class="popup-ss-slider">
          <span class="popup-ss-close"></span>
      <button class="popup-ss-btn popup-ss-prevbtn"></button>
      <button class="popup-ss-btn popup-ss-nextbtn"></button>

        <div class="popup-ss-content">
        </div>

      </div>
      </div>
    </div>
    </div>


    </section>
    `
}

/*<a class="game-metascore-link" href="#">
  <div class="game-metascore">
    99
    <span class="game-metacritic">METACRITIC</span>
  </div>
</a>
<img class="game-img" src="./app/assets/TW3.png" alt="">
<h3 class="description-title">The Witcher</h3>

<div class="game-description">
  <div class="game-background"></div>
  <div class="description-features">
    <img class="description-category" src="./app/assets/ESRB/M.svg" alt="Categoria ESRB">
    <span>▪</span>
    <div class="description-platforms">
      <img class="description-platform" src="./app/assets/platforms/platform-pc.svg" alt="Categoria ESRB">
      <img class="description-platform" src="./app/assets/platforms/platform-playstation.svg" alt="Categoria ESRB">
      <img class="description-platform" src="./app/assets/platforms/platform-switch.svg" alt="Categoria ESRB">
      <img class="description-platform" src="./app/assets/platforms/platform-xbox.svg" alt="Categoria ESRB">
    </div>
    <span>▪</span>
    <span class="date-released">11/11/11</span>
  </div>
  <p class="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque quaerat quibusdam
    eveniet dolorem repellat aliquid voluptatum voluptates earum eligendi reiciendis rem unde magni quasi sapiente, in
    esse porro nam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque quaerat quibusdam eveniet dolorem repellat
    aliquid voluptatum voluptates earum eligendi reiciendis rem unde magni quasi sapiente, in esse porro nam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque quaerat quibusdam eveniet dolorem repellat
    aliquid voluptatum voluptates earum eligendi reiciendis rem unde magni quasi sapiente, in esse porro nam.
  </p>

  <div class="game-data">
    <div>
      <h4>Developer:</h4>
      <span class="game-data-developer">CD Project</span>
    </div>

    <div class="game-data-genres">
      <h4>Genres:</h4>
      <span class="game-data-genre">Shooter</span>
      <span class="game-data-genre">RPG</span>
    </div>

    <a class="game-data-website" href="#">
      <div class="data-website-img"></div>
    </a>
  </div>

</div>*/