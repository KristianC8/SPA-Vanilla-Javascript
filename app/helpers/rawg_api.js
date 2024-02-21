import api from './API/api_key.js'
// Api RAWG
const DOMAIN = "https://api.rawg.io/api",
    // GAMES
    BEST_GAMES = `${DOMAIN}/games?key=${api.APIKEY}&metacritic=80,${Math.floor(Math.random() * (100 - 92) + 92)}&ordering=-metacritic&platforms=187,18,1,186&page_size=5&dates=2010-01-01,2023-12-31`, //
    // BEST_GAMES = `${DOMAIN}/games?key=${api.APIKEY}&metacritic=80,${Math.floor(Math.random() * (100 - 90) + 90)}&ordering=-metacritic&page_size=5&dates=2010-01-01,2023-12-31`, //
    // GAMES = `${DOMAIN}/games/baldurs-gate-3/achievements?key=${api.APIKEY}`, //
    // GAMES_SEARCH = `${GAMES}&search=`,
    PLATFORMS = `${DOMAIN}/platforms?key=${api.APIKEY}`,
    GENRES = `${DOMAIN}/genres?key=${api.APIKEY}`,
    GAMES = `${DOMAIN}/games?key=${api.APIKEY}`,
    GAME = `${DOMAIN}/games/`,
    SEARCH = `${DOMAIN}/games`,
    FILTER = `${DOMAIN}/games?key=${api.APIKEY}&ordering=-metacritic`

// SCREENSHOTS = `${DOMAIN}/games?key=${api.APIKEY}`

// let page = 1

export default {
    BEST_GAMES, GAMES, GAME, PLATFORMS, SEARCH, GENRES, FILTER, //page,GAMES_SEARCH, GAME
}