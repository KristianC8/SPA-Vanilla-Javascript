import { BtnTheme } from "./BtnTheme.js"
import { LogoName } from "./LogoName.js"
import { Search } from "./Search.js"


export default function () {
    const $header = document.createElement('header')
    $header.classList.add('header')
    $header.appendChild(LogoName())
    $header.appendChild(Search())
    $header.appendChild(BtnTheme())

    return $header
}