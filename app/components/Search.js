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
    $inputSearch.placeholder = 'Search game...'

    $searchForm.appendChild($inputSearch)
    $searchForm.appendChild($imgInput)

    $searchForm.setAttribute('id', 'searchGame')
    // $inputSearch.setAttribute('id', 'inputSearchGame')

    if (location.hash.includes('#/search')) {
        $inputSearch.value = localStorage.getItem('gmSearch')
    }

    document.addEventListener('search', e => {
        if (!e.target.matches('input[type="search"]')) return false
        if (!e.target.value) localStorage.removeItem('gmSearch')
    })

    document.addEventListener('submit', e => {
        if (!e.target.matches('#searchGame')) return false
        e.preventDefault()
        localStorage.setItem('gmSearch', e.target.search.value)
        location.hash = `#/search?search=${e.target.search.value}`

    })



    return $searchForm
}