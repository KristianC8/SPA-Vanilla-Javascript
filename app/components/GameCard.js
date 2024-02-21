export function GameCard(props) {

    let { name, background_image, metacritic, id, slug } = props

    if (name.length > 38) name = `${name.slice(0, 35)}...`


    let actualTheme = document.documentElement.dataset.theme


    const $btn_theme = document.getElementById('theme-btn')

    let count = 0
    if (!background_image) {
        count++
    }
    $btn_theme.addEventListener('click', e => {

        if (count > 0) {
            let theme = localStorage.getItem('theme')
            console.log(theme)
            const $gameCard = document.querySelectorAll('.cards img')
            if (theme === 'dark') {
                $gameCard.forEach(card => {
                    if (card.src.includes('noImageFor')) card.src = './app/assets/noImageForDarkMode.svg'
                })
            }
            else {
                $gameCard.forEach(card => {
                    if (card.src.includes('noImageFor')) card.src = './app/assets/noImageForClearMode.svg'
                })
            }

        }

    })


    return ` 
    <div data-id="${id}" class="home-cards cards">
     <a href="#/${slug}">
     <img class="card-img" src=${!background_image
            ? actualTheme === 'dark'
                ? './app/assets/noImageForDarkMode.svg'
                : './app/assets/noImageForClearMode.svg' : background_image} alt=${name}>
     <div class="card-info">
     <h3 class="card-name">${name}</h3>
     <span class="card-note ${metacritic >= 75
            ? 'card-note-good'
            : metacritic >= 45 && metacritic < 75
                ? 'card-note-medium' : 'card-note-bad'
        }">${metacritic}</span>
     </div>
     </a>
    </div>
    `


}

export function FirstGameCard(props) {

    let { name, background_image, metacritic, id, slug } = props

    if (name.length > 38) name = `${name.slice(0, 35)}...`
    return `
    <div data-id="${id}" class="card-1 cards">
    <a href="#/${slug}">
     <img class="card-img-1" src=${!background_image ? './app/assets/noImage.svg' : background_image} alt=${name}>
     <h3 class="card-name-1">${name}</h3>
     <span class="card-note-1">${metacritic}</span>
    </a>
     </div>
    `
}
