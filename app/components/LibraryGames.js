import api from "../helpers/rawg_api.js"
import { Ajax } from "../helpers/ajax.js"
import { GameCard } from "./GameCard.js"

export function LibraryGames() {
    const $gridGames = document.querySelector('.games-grid'),
        $Loader = document.querySelector('.loader')

    Ajax({
        domain: api.GAMES,
        ordering: '-metacritic',
        cbSuccess: (games) => {
            let allGames = games.results
            // console.log(games)
            let html = ''
            allGames.forEach(game => {
                html += GameCard(game)
            });
            $Loader.style.display = 'none'
            $gridGames.innerHTML = html
            $gridGames.classList.remove('isInactive')

        }
    }, '.games')

}

export function FilterGames() {
    const $platformSelect = document.getElementById('PLatformSelect')
    const $genreSelect = document.getElementById('GenreSelect')
    const $metacriticSelect = document.getElementById('MetacriticSelect')
    const $platformItems = document.getElementById('PlatformItems')
    const $genreItems = document.getElementById('GenreItems')
    const $metacriticItems = document.getElementById('MetacriticItems')
    const $gridGames = document.querySelector('.games-grid')
    const $platformSelected = document.getElementById('PlatformSelected')
    const $genreSelected = document.getElementById('GenreSelected')
    const $metacriticSelected = document.getElementById('MetacriticSelected'),
        $Loader = document.querySelector('.loader')

    let query = ''
    let renderFilter = (query) => {
        Ajax({
            domain: api.GAMES,
            ordering: '-metacritic',
            filter: query,
            cbSuccess: (games) => {
                let FilteredGames = games.results
                // console.log(games)
                let html = ''
                if (FilteredGames.length < 20 || games.next === null) localStorage.setItem('EndPage', false)
                else localStorage.setItem('EndPage', true)
                FilteredGames.forEach(game => {
                    html += GameCard(game)
                });
                // $Loader.style.display = 'none'
                $gridGames.innerHTML = html
                // $gridGames.classList.remove('isInactive')

            }
        }, '.games')
    }


    $platformSelect.addEventListener('click', e => {
        // if (e.target === $platformSelect || $platformSelect.contains(e.target)) {
        // }
        $platformSelect.classList.toggle('isOpenSelect')
        $platformItems.classList.toggle('isInactive')
        $genreItems.classList.add('isInactive')
        $metacriticItems.classList.add('isInactive')
        $genreSelect.classList.remove('isOpenSelect')
        $metacriticSelect.classList.remove('isOpenSelect')
        if (e.target.classList.contains('select-opt')) {
            // console.log(e.target.textContent)
            if (!query) query += `&platforms=${e.target.dataset.id}`
            else {
                let searchArr = query.split('&'), contains = false
                searchArr.forEach((search, ind) => {
                    if (search.includes('platforms')) {
                        searchArr[ind] = `platforms=${e.target.dataset.id}`
                        contains = true
                    }
                })
                query = searchArr.join('&')
                if (!contains) query += `&platforms=${e.target.dataset.id}`
            }
            // console.log(query)
            localStorage.setItem('query', query)
            renderFilter(query)
            $platformSelected.textContent = `${e.target.textContent}`
        }
        if (e.target.classList.contains('select-all')) {
            // console.log('platform')
            $platformSelected.textContent = `PLATFORM`
            if (!query) return false
            if (query.includes('platform')) {
                query = query.replace(/&platforms=[^&]*/, '');
                localStorage.setItem('query', query)
                renderFilter(query)
            }
        }
    })

    $genreSelect.addEventListener('click', e => {
        // if (e.target === $genreSelect || $genreSelect.contains(e.target)) {
        // }
        $genreSelect.classList.toggle('isOpenSelect')
        $genreItems.classList.toggle('isInactive')
        $platformItems.classList.add('isInactive')
        $metacriticItems.classList.add('isInactive')
        $platformSelect.classList.remove('isOpenSelect')
        $metacriticSelect.classList.remove('isOpenSelect')
        if (e.target.classList.contains('select-opt')) {
            // console.log(e.target.textContent)
            if (!query) query += `&genres=${e.target.dataset.id}`
            else {
                let searchArr = query.split('&'), contains = false
                searchArr.forEach((search, ind) => {
                    if (search.includes('genres')) {
                        searchArr[ind] = `genres=${e.target.dataset.id}`
                        contains = true
                    }

                })
                query = searchArr.join('&')
                if (!contains) query += `&genres=${e.target.dataset.id}`
            }
            console.log(query)
            localStorage.setItem('query', query)
            renderFilter(query)
            $genreSelected.textContent = `${e.target.textContent}`
        }
        if (e.target.classList.contains('select-all')) {
            // console.log('genre')
            $genreSelected.textContent = `GENRE`
            if (!query) return false
            if (query.includes('genres')) {
                query = query.replace(/&genres=[^&]*/, '');
                // console.log(query)
                localStorage.setItem('query', query)
                renderFilter(query)
            }
        }

    })

    $metacriticSelect.addEventListener('click', e => {
        // if (e.target === $metacriticSelect || $metacriticSelect.contains(e.target)) {
        // }
        $metacriticSelect.classList.toggle('isOpenSelect')
        $metacriticItems.classList.toggle('isInactive')
        $platformItems.classList.add('isInactive')
        $genreItems.classList.add('isInactive')
        $platformSelect.classList.remove('isOpenSelect')
        $genreSelect.classList.remove('isOpenSelect')
        if (e.target.classList.contains('select-opt')) {
            // console.log(e.target.textContent)
            if (!query) query += `&metacritic=${e.target.dataset.search}`
            else {
                let searchArr = query.split('&'), contains = false
                searchArr.forEach((search, ind) => {
                    if (search.includes('metacritic')) {
                        searchArr[ind] = `metacritic=${e.target.dataset.search}`
                        contains = true
                    }

                })
                query = searchArr.join('&')
                if (!contains) query += `&metacritic=${e.target.dataset.search}`
            }
            // console.log(query)
            localStorage.setItem('query', query)
            renderFilter(query)
            $metacriticSelected.textContent = `${e.target.textContent}`
        }
        // if (e.target.classList.contains('select-all')) {
        //     $metacriticSelected.textContent = `METACRITIC`
        //     if (!query) return false
        //     if (query.includes('metacritic')) {
        //         query = query.replace(/&metacritic=[^&]*/, '');
        //         // console.log(query)
        //         localStorage.setItem('query', query)
        //         renderFilter(query)
        //     }
        // }

    })




    // Ajax({
    //     url: api.GENRES,
    //     cbSuccess: (genres) => {
    //         console.log(genres)
    //     }
    // }, '.games')

    // Ajax({
    //     url: api.PLATFORMS,
    //     cbSuccess: (platforms) => {
    //         console.log(platforms)
    //     }
    // }, '.games')

    // Ajax({
    //     url: api.GAMES,
    //     cbSuccess: (games) => {
    //         console.log(games)
    //     }
    // }, '.games')

}
