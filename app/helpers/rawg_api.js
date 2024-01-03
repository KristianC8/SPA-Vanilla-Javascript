import api from './API/api_key.js'
// Api RAWG
const DOMAIN = "https://api.rawg.io/api",
    // GAMES
    // GAMES = `${DOMAIN}/games?key=${api.APIKEY}&metacritic=${Math.floor(Math.random() * (90 - 80) + 80)},${Math.floor(Math.random() * (100 - 91) + 91)}&ordering=-metacritic&platforms=187,18,1,186&page_size=5&dates=2010-01-01,2023-12-31`, //
    // GAMES = `${DOMAIN}/games/baldurs-gate-3/achievements?key=${api.APIKEY}`, //
    GAMES = `${DOMAIN}/platforms?key=${api.APIKEY}`, //
    // GAMES_SEARCH = `${GAMES}&search=`,
    GAME = `${DOMAIN}/games/`

export default {
    GAMES //GAMES_SEARCH, GAME
}