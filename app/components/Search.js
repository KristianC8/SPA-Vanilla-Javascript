export function Search() {
    const $searchForm = document.createElement('form'),
        $inputSearch = document.createElement('input'),
        $imgInput = document.createElement('div')

    $searchForm.classList.add('header-search-form')
    $inputSearch.classList.add('header-input-search')
    $imgInput.classList.add('header-input-img')

    $inputSearch.type = 'search'
    $inputSearch.name = 'search'
    $inputSearch.autocomplete = 'off'
    $inputSearch.placeholder = 'Buscar Juego...'

    $searchForm.appendChild($inputSearch)
    $searchForm.appendChild($imgInput)
    return $searchForm
}