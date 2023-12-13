export function BtnTheme() {
    const $themeAtuhLogo = document.createElement('div'),
        $btnTheme = document.createElement('button')

    $btnTheme.classList.add('header-btn-theme')

    $themeAtuhLogo.classList.add('header-btnTheme-authLogo')
    $themeAtuhLogo.classList.add('fondo-opaco')

    $themeAtuhLogo.appendChild($btnTheme)


    return $themeAtuhLogo
} 
