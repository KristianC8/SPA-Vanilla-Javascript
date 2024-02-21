import { Loader } from "./Loader.js"
import { ApiLinkForGames } from "./ApiLink.js"

export function Games() {

  let platforms = [
    {
      name: 'Playstation',
      id: '187,18,16,15,27,19,17'
    },
    {
      name: 'Xbox',
      id: '186,1,14,80'
    },
    {
      name: 'Nintendo',
      id: '7,10,11,8,9,13,83'
    },
    {
      name: 'PC',
      id: '4,5,6'
    },
    {
      name: 'Android',
      id: '21'
    },
    {
      name: 'iOS',
      id: '3'
    }
  ],

    genres = [
      {
        name: 'Action',
        id: '4'
      },
      {
        name: 'Indie',
        id: '51'
      },
      {
        name: 'Adventure',
        id: '3'
      },
      {
        name: 'RPG',
        id: '5'
      },
      {
        name: 'Strategy',
        id: '10'
      },
      {
        name: 'Shooter',
        id: '2'
      },
      {
        name: 'Casual',
        id: '40'
      },
      {
        name: 'Simulation',
        id: '14'
      },
      {
        name: 'Puzzle',
        id: '7'
      },
      {
        name: 'Arcade',
        id: '11'
      },
      {
        name: 'Platformer',
        id: '83'
      },
      {
        name: 'Racing',
        id: '1'
      },
      {
        name: 'Massively Multiplayer',
        id: '59'
      },
      {
        name: 'Sports',
        id: '15'
      },
      {
        name: 'Fighting',
        id: '6'
      },
      {
        name: 'Family',
        id: '19'
      },
      {
        name: 'Board Games',
        id: '28'
      },
      {
        name: 'Educational',
        id: '34'
      },
      {
        name: 'Card',
        id: '17'
      }
    ]

  let renderPlatforms = () => {
    let html = ''
    platforms.forEach(platform => {
      html += `<li class="select-opt" data-id="${platform.id}">${platform.name}</li>`
    })
    return html
  }

  let renderGenres = () => {
    let html = ''
    genres.forEach(genre => {
      html += `<li class="select-opt" data-id="${genre.id}">${genre.name}</li>`
    })
    return html
  }

  return `
    <section class="games">
         <h2>GAME LIBRARY</h2>
         <div class="games-apiLink">
          ${ApiLinkForGames()}
         </div>
         <div class="games-selects">

            <div class="games-select" id="PLatformSelect">
             <div class="select-selected"><div class="selected-name" id="PlatformSelected">PLATFORM</div><div class="select-arrow"></div></div>
              <div class="select-items isInactive" id="PlatformItems">
                <ul class="list-items">
                  <li class="select-all" id="AllPlatfrom">--ALL--</li>
                    ${renderPlatforms()}
                </ul>
              </div>
            </div>

             <div class="games-select" id="GenreSelect">
             <div class="select-selected" ><div class="selected-name" id="GenreSelected">GENRE</div><div class="select-arrow"></div></div>
              <div class="select-items isInactive" id="GenreItems">
                <ul class="list-items">
                     <li class="select-all" id="AllGenre">--ALL--</li>
                    ${renderGenres()}
                </ul>
              </div>
            </div>

             <div class="games-select" id="MetacriticSelect">
             <div class="select-selected" ><div class="selected-name" id="MetacriticSelected">METACRITIC</div><div class="select-arrow"></div></div>
              <div class="select-items isInactive" id="MetacriticItems">
                <ul class="list-items">
        
                    <li class="select-opt" data-search="90,100">90-100</li>
                    <li class="select-opt" data-search="80,90">80-90</li>
                    <li class="select-opt" data-search="70,80">70-80</li>
                    <li class="select-opt" data-search="60,70">60-70</li>
                    <li class="select-opt" data-search="50,60">50-60</li>
                    <li class="select-opt" data-search="40,50">40-50</li>
                    <li class="select-opt" data-search="30,40">30-40</li>
                </ul>
              </div>
            </div>
            
         </div>
         ${Loader()}
         <div class="games-grid isInactive">
         </div>
    </section>
   `
  // < li class="select-all" id = "AllMetacritic" > --ALL--</li >
}

