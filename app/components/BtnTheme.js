export function BtnTheme() {
    const $themeAtuhLogo = document.createElement('div'),
        $btnTheme = document.createElement('button')

    $btnTheme.classList.add('header-btn-theme')
    $btnTheme.id = 'theme-btn'

    $themeAtuhLogo.classList.add('header-btnTheme-authLogo')

    $themeAtuhLogo.appendChild($btnTheme)

    let actualTheme = document.documentElement.dataset.theme

    if (actualTheme === 'dark') {
        $btnTheme.style.backgroundSize = '70%'
    } else {
        $btnTheme.style.backgroundSize = '50%'
    }

    $btnTheme.addEventListener('click', e => {
        let theme = document.documentElement.dataset.theme
        if (theme === 'dark') theme = 'light'
        else theme = 'dark'

        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)

        if (theme === 'dark') {
            $btnTheme.style.backgroundSize = '70%'
        } else {
            $btnTheme.style.backgroundSize = '50%'
        }

    })


    return $themeAtuhLogo
} 
