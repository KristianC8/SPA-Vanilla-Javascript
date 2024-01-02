import { Search } from "./Search.js"

export function Main() {
    const $main = document.createElement('main'),
        $searchMobileContainer = document.createElement('div'),
        $principalMainContainer = document.createElement('div'),
        $mobileSearchForm = Search()

    $main.classList.add('main')

    $mobileSearchForm.classList.remove('header-search-form')
    $mobileSearchForm.classList.add('main-mobile-search')
    $searchMobileContainer.classList.add('main-mobile-search-container')
    $principalMainContainer.classList.add('main-principal')

    $searchMobileContainer.appendChild($mobileSearchForm)
    $main.appendChild($searchMobileContainer)
    $main.appendChild($principalMainContainer)

    return $main
}