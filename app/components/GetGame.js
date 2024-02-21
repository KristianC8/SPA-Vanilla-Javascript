import { Ajax } from "../helpers/ajax.js"
import api from "../helpers/rawg_api.js"
import api_key from "../helpers/API/api_key.js";
import esrb from "../helpers/esrb_img.js"
import platform_img from "../helpers/platform_img.js";

export function GetGame() {

  let { hash } = window.location
  // console.log(hash.slice(2))

  let url = `${api.GAME}${hash.slice(2)}?key=${api_key.APIKEY}`
  // console.log(url)

  const $game_page = document.querySelector('.game'),
    $game_screenshots = document.querySelector('.game-screenshots'),
    $footer = document.querySelector('.footer'),
    $webSiteLink = document.querySelector('.game-data-website')

  Ajax({
    url: url,
    cbSuccess: (game) => {

      let { background_image, metacritic_url, metacritic, name, esrb_rating, platforms, released,
        description, developers, genres, website } = game,
        target = '', $platforms = '', $developers = '', $genres = '', esrb_img = '', platformImg = '', actualTheme = ''
      // console.log(background_image, metacritic_url, metacritic, name, esrb_rating.name, platforms, released,
      //     description, developers, genres, website)
      // console.log(platforms)


      let getPlatforms = () => {
        let ps = false, xb = false, ns = false, ni = false, co = false, io = false, mo = false, an = false, li = false, at = false, gc = false, sg = false, any = false
        for (let platform of platforms) {
          let platformLow = platform.platform.name.toLowerCase()

          //obtengo los nombres de la misma plataforma

          let getNamesPlatform = (plat1, plat2, plat3) => {
            let names = ''
            platforms.forEach(platform => {
              let platformName = platform.platform.name.toLowerCase()
              if (platformName.includes(plat1) || platformName.includes(plat2) || platformName.includes(plat3)) names += `${platform.platform.name}\n`
            })
            $platforms += `
                    <img class="description-platform" src="${platformImg}" alt="${platform.platform.name}" title="${names}">
                    `
          }

          //validar el tema actual para pintar las imágenes

          actualTheme = document.documentElement.dataset.theme

          // por cada plataforma muestro un solo icono

          if (platformLow.includes('playstation') || platformLow.includes('ps') || platformLow.includes('psp')) {
            actualTheme === 'dark' ? platformImg = platform_img.playstationForDark : platformImg = platform_img.playstation
            if (!ps) {
              getNamesPlatform('playstation', 'ps', 'psp')
              ps = true
            }
          }
          else if (platformLow.includes('xbox')) {
            actualTheme === 'dark' ? platformImg = platform_img.xboxForDark : platformImg = platform_img.xbox
            if (!xb) {
              getNamesPlatform('xbox')
              xb = true
            }
          }
          else if (platformLow.includes('nintendo switch')) {
            actualTheme === 'dark' ? platformImg = platform_img.n_switchForDark : platformImg = platform_img.n_switch
            if (!ns) {
              getNamesPlatform('nintendo switch')
              ns = true
            }
          }
          else if (platformLow.includes('nintendo') || platformLow.includes('wii')) {
            actualTheme === 'dark' ? platformImg = platform_img.nintendoForDark : platformImg = platform_img.nintendo
            if (!ni) {
              getNamesPlatform('nintendo', 'wii')
              ni = true
            }
          }
          else if (platformLow.includes('pc')) {
            actualTheme === 'dark' ? platformImg = platform_img.pcForDark : platformImg = platform_img.pc
            if (!co) {
              getNamesPlatform('pc')
              co = true
            }
          }
          else if (platformLow.includes('ios')) {
            actualTheme === 'dark' ? platformImg = platform_img.iosForDark : platformImg = platform_img.ios
            if (!io) {
              getNamesPlatform('ios')
              io = true
            }
          }
          else if (platformLow.includes('macos')) {
            actualTheme === 'dark' ? platformImg = platform_img.macosForDark : platformImg = platform_img.macos
            if (!mo) {
              getNamesPlatform('macos')
              mo = true
            }
          }
          else if (platformLow.includes('android')) {
            actualTheme === 'dark' ? platformImg = platform_img.androidForDark : platformImg = platform_img.android
            if (!an) {
              getNamesPlatform('android')
              an = true
            }
          }
          else if (platformLow.includes('linux')) {
            actualTheme === 'dark' ? platformImg = platform_img.linuxForDark : platformImg = platform_img.linux
            if (!li) {
              getNamesPlatform('linux')
              li = true
            }
          }
          else if (platformLow.includes('atari')) {
            actualTheme === 'dark' ? platformImg = platform_img.atariForDark : platformImg = platform_img.atari
            if (!at) {
              getNamesPlatform('atari')
              at = true
            }
          }
          else if (platformLow.includes('gamecube')) {
            actualTheme === 'dark' ? platformImg = platform_img.gamecubeForDark : platformImg = platform_img.gamecube
            if (!gc) {
              getNamesPlatform('gamecube')
              gc = true
            }
          }
          else if (platformLow.includes('sega')) {
            actualTheme === 'dark' ? platformImg = platform_img.segaForDark : platformImg = platform_img.sega
            if (!sg) {
              getNamesPlatform('sega')
              sg = true
            }
          }
          else {
            actualTheme === 'dark' ? platformImg = platform_img.anygameForDark : platformImg = platform_img.anygame
            if (!any) {
              let names = ''
              platforms.forEach(platform => {
                names += `${platform.platform.name}\n`
              })
              $platforms += `
                    <img class="description-platform" src="${platformImg}" alt="${platform.platform.name}" title="${names}">
                    `
              any = true
            }
          }
        }
        return $platforms
      }

      let getDevelopers = () => {

        if (!developers || developers.length === 0) return `<span class="game-data-developer">Not Found</span>`

        for (let developer of developers) {
          $developers += `
                    <span class="game-data-developer">${developer.name}</span>
                    `
        }
        return $developers
      }

      let getGenres = () => {

        if (!genres || genres.length === 0) return `<span class="game-data-genre">Not Found</span>`

        for (let genre of genres) {
          // console.log(genre.name)
          $genres += `
                      <span class="game-data-genre">${genre.name}</span>
                    `
        }
        return $genres
      }

      if (!esrb.rating) esrb_img = esrb.rating_pending
      if (esrb_rating) {
        switch (esrb_rating.name) {
          case 'Everyone':
            esrb_img = esrb.everyone
            break;
          case 'Everyone 10+':
            esrb_img = esrb.everyone_10plus
            break;
          case 'Teen':
            esrb_img = esrb.teen
            break;
          case 'Mature':
            esrb_img = esrb.mature
            break;
          case 'Adults Only':
            esrb_img = esrb.adults_only
            break;
          case 'Rating Pending':
            esrb_img = esrb.rating_pending
            break;

          default:
            esrb_img = esrb.rating_pending
            break;
        }
      }


      !metacritic_url || metacritic_url === '' ? target = `_self` : target = `_blank`
      !metacritic_url || metacritic_url === '' ? metacritic_url = `#/${hash.slice(2)}` : metacritic_url


      let html = `
<a class="game-metascore-link" target="${target}" href="${metacritic_url}" rel="noopener noreferrer">
  <div class="game-metascore ${metacritic >= 75
          ? 'card-note-good'
          : metacritic >= 45 && metacritic < 75
            ? 'card-note-medium' : 'card-note-bad'
        }">
    ${!metacritic ? 'NR' : metacritic}
    <span class="game-metacritic">METACRITIC</span>
  </div>
</a>
<img class="game-img" src=${!background_image
          ? document.documentElement.dataset.theme === 'dark'
            ? './app/assets/noImageForDarkModeGame.svg'
            : './app/assets/noImageForClearModeGame.svg' : background_image} alt="${name}">
<h3 class="description-title">${name}</h3>

<div class="game-description">
  <div class="game-background"></div>
  <div class="description-features">
    <img class="description-category" src="${esrb_img}" alt="${!esrb_rating ? 'Pending' : esrb_rating.name}" title="${!esrb_rating ? 'Pending' : esrb_rating.name}">
    <span>▪</span>
    <div class="description-platforms">
      ${getPlatforms()}
    </div>
    <span>▪</span>
    <span class="date-released">${released}</span>
  </div>
  <div class="description-text">${description}
  </div>

  <div class="game-data">
    <div class="game-data-developers">
      <h4>Developer(s):</h4>
      ${getDevelopers()}
    </div>

    <div class="game-data-genres">
      <h4>Genre(s):</h4>
      ${getGenres()}
    </div>

    ${!website || website === '' ? `` : `<a class="game-data-website" target="_blank" href="${website}" rel="noopener noreferrer" title="Visit WebSite">
      <button class="data-website-img"></button>
    </a>`}
    
  </div>

</div>
    `
      $game_page.innerHTML = html
      $game_page.classList.remove('isInactive')
      $game_screenshots.classList.remove('isInactive')
      $footer.classList.remove('isInactive')


      const $btn_theme = document.getElementById('theme-btn')

      $btn_theme.addEventListener('click', e => {
        let theme = localStorage.getItem('theme')

        if (theme === 'dark') {
          let $platforms = document.querySelectorAll('.description-platforms img')
          let $backImage = document.querySelector('.game-img')

          if (!background_image) $backImage.src = './app/assets/noImageForDarkModeGame.svg'

          for (let $platform of $platforms) {
            let namePlatform = $platform.alt.toLowerCase()

            if (namePlatform.includes('playstation') || namePlatform.includes('ps') || namePlatform.includes('psp')) {
              $platform.src = platform_img.playstationForDark
            }
            else if (namePlatform.includes('xbox')) {
              $platform.src = platform_img.xboxForDark
            }
            else if (namePlatform.includes('nintendo switch')) {
              $platform.src = platform_img.n_switchForDark
            }
            else if (namePlatform.includes('nintendo') || namePlatform.includes('wii')) {
              $platform.src = platform_img.nintendoForDark
            }
            else if (namePlatform.includes('pc')) {
              $platform.src = platform_img.pcForDark
            }
            else if (namePlatform.includes('ios')) {
              $platform.src = platform_img.iosForDark
            }
            else if (namePlatform.includes('macos')) {
              $platform.src = platform_img.macosForDark
            }
            else if (namePlatform.includes('android')) {
              $platform.src = platform_img.androidForDark
            }
            else if (namePlatform.includes('linux')) {
              $platform.src = platform_img.linuxForDark
            }
            else if (namePlatform.includes('atari')) {
              $platform.src = platform_img.atariForDark
            }
            else if (namePlatform.includes('gamecube')) {
              $platform.src = platform_img.gamecubeForDark
            }
            else if (namePlatform.includes('sega')) {
              $platform.src = platform_img.segaForDark
            }
            else {
              $platform.src = platform_img.anygameForDark
            }
          }
        } else {
          let $platforms = document.querySelectorAll('.description-platforms img')
          let $backImage = document.querySelector('.game-img')

          if (!background_image) $backImage.src = './app/assets/noImageForClearModeGame.svg'

          for (let $platform of $platforms) {
            let namePlatform = $platform.alt.toLowerCase()
            if (namePlatform.includes('playstation') || namePlatform.includes('ps') || namePlatform.includes('psp')) {
              $platform.src = platform_img.playstation
            }
            else if (namePlatform.includes('xbox')) {
              $platform.src = platform_img.xbox
            }
            else if (namePlatform.includes('nintendo switch')) {
              $platform.src = platform_img.n_switch
            }
            else if (namePlatform.includes('nintendo') || namePlatform.includes('wii')) {
              $platform.src = platform_img.nintendo
            }
            else if (namePlatform.includes('pc')) {
              $platform.src = platform_img.pc
            }
            else if (namePlatform.includes('ios')) {
              $platform.src = platform_img.ios
            }
            else if (namePlatform.includes('macos')) {
              $platform.src = platform_img.macos
            }
            else if (namePlatform.includes('android')) {
              $platform.src = platform_img.android
            }
            else if (namePlatform.includes('linux')) {
              $platform.src = platform_img.linux
            }
            else if (namePlatform.includes('atari')) {
              $platform.src = platform_img.atari
            }
            else if (namePlatform.includes('gamecube')) {
              $platform.src = platform_img.gamecube
            }
            else if (namePlatform.includes('sega')) {
              $platform.src = platform_img.sega
            }
            else {
              $platform.src = platform_img.anygame
            }
          }
        }


      })

    }
  }, '.game-view')



}