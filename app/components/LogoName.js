export function LogoName() {
    const $logoName = document.createElement('div'),
        $logo = document.createElement('div'),
        $name = document.createElement('div')

    $logoName.classList.add('header-logo-name')

    $logo.classList.add('header-logo')
    $name.classList.add('header-name')

    $logoName.appendChild($logo)
    $logoName.appendChild($name)
    return $logoName
}