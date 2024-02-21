export function Loader() {
    // const $loader = document.createElement('img')
    // $loader.src = './app/assets/loader-infinite-blue.svg'
    // $loader.alt = 'Cargando...'
    // $loader.classList.add('loader')
    // return $loader
    let theme = document.documentElement.dataset.theme

    return `
    ${theme === 'light'
            ? `<img class="loader" src="./app/assets/loader-infinite-blue.svg" alt="Cargando...">`
            : `<img class="loader" src="./app/assets/loader-infinite-green.svg" alt="Cargando...">`}
    
    `
}