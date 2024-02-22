import api from './API/api_key.js'
// Api RAWG
const DOMAIN = "https://api.rawg.io/api",
    // GAMES
    GAMES = `${DOMAIN}/games`,
    PLATFORMS = `${DOMAIN}/platforms?key=${api.APIKEY}`,
    GENRES = `${DOMAIN}/genres?key=${api.APIKEY}`,
    FILTER = `${DOMAIN}/games?key=${api.APIKEY}&ordering=-metacritic`

// SCREENSHOTS = `${DOMAIN}/games?key=${api.APIKEY}`

// let page = 1

export default {
    GAMES, PLATFORMS, GENRES, FILTER, //page,GAMES_SEARCH, GAME
}