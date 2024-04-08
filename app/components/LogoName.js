export function LogoName() {
    const $logoName = document.createElement('div'),
        $logo = document.createElement('div'),
        $name = document.createElement('div'),
        $link = document.createElement('a')

    $logoName.classList.add('header-logo-name')

    $logo.classList.add('header-logo')
    $name.classList.add('header-name')

    // < a class="option-menu" href = "#/" >

    $link.setAttribute("href", "#/")

    $logoName.appendChild($logo)
    $logoName.appendChild($name)
    $link.appendChild($logoName)
    return $link
}