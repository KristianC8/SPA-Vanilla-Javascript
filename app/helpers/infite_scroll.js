import api from "./rawg_api.js"
import { Ajax } from "./ajax.js"
import { GameCard } from "../components/GameCard.js"
import { Loader } from "../components/Loader.js"


export function infiniteScroll() {
    // page = 1
    let { hash } = window.location
    let page = 1


    let infScroll = () => {
        let query = localStorage.getItem('query')
        const $gamesGrid = document.querySelector('.games-grid')
        let { scrollTop, clientHeight, scrollHeight } = document.documentElement

        let esCelular = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        // console.log(navigator.userAgent)
        let sHeight = 0

        if (esCelular) {
            sHeight = scrollHeight - 56
        } else {
            sHeight = scrollHeight
        }




        // console.log(scrollTop, clientHeight, sHeight)
        if (Math.ceil(scrollTop) + clientHeight === sHeight) {

            let { hash } = window.location
            let apiURL = ''

            let endPage = localStorage.getItem('EndPage')

            if (endPage === 'true' || endPage === null) {
                page++

                let $loader = $gamesGrid.querySelector('.loader')
                // if (!$loader) $gamesGrid.insertAdjacentHTML('beforeend', Loader())
                $gamesGrid.insertAdjacentHTML('beforeend', Loader())




                if (hash.includes('#/Games')) {
                    if (!query) {
                        if (page === 1) return false
                        Ajax({
                            domain: api.GAMES,
                            ordering: '-metacritic',
                            page: page,
                            cbSuccess: (games) => {
                                let html = ''
                                let allGames = games.results
                                if (allGames.length < 20 || games.next === null) localStorage.setItem('EndPage', false)
                                else localStorage.setItem('EndPage', true)
                                allGames.forEach(game => {
                                    html += GameCard(game)
                                });

                                $gamesGrid.insertAdjacentHTML('beforeend', html)
                                let $loader = $gamesGrid.querySelectorAll('.loader')
                                $loader.forEach(loader => { loader.style.display = 'none' })

                            }
                        }, '.games')
                    }//apiURL = `${api.FILTER}&page=${page}`
                    else {
                        //apiURL = `${api.FILTER}${query}&page=${page}`
                        if (page === 1) return false
                        Ajax({
                            domain: api.GAMES,
                            ordering: "-metacritic",
                            filter: query,
                            page: page,
                            cbSuccess: (games) => {
                                let html = ''
                                let allGames = games.results
                                if (allGames.length < 20 || games.next === null) localStorage.setItem('EndPage', false)
                                else localStorage.setItem('EndPage', true)
                                allGames.forEach(game => {
                                    html += GameCard(game)
                                });

                                $gamesGrid.insertAdjacentHTML('beforeend', html)
                                let $loader = $gamesGrid.querySelectorAll('.loader')
                                $loader.forEach(loader => { loader.style.display = 'none' })

                            }
                        }, '.games')
                    }
                } else return false







                console.log(page)
            } else {
                return false
            }


        }

    }

    window.addEventListener('hashchange', (e) => {
        hash = window.location.hash
        if (hash.includes('#/Games')) {
            page = 1
            document.querySelector('.footer').style.display = 'none'
        }
        localStorage.removeItem('query')
        localStorage.removeItem('EndPage')
        // console.log(hash)

    })

    window.addEventListener('scroll', (e) => {
        if (hash !== '#/Games') {
            window.removeEventListener('scroll', infScroll)
            return false
        } else {
            infScroll()
        }
    })

    document.addEventListener('click', e => {
        if (e.target.classList.contains('select-opt')) {
            page = 1
        }

        if (e.target.classList.contains('select-all')) {
            page = 1
        }
    })

}