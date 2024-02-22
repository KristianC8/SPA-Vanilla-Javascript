export async function Ajax(props, selector) {

    let { domain, game, metacritic, ordering, platforms, page_size, dates, search, screenshots, cbSuccess } = props;

    try {
        let response = await fetch(`.netlify/functions/API?domain=${domain}${!game ? '' : `&game=${game}`}${!metacritic ? '' : `&metacritic=${metacritic}`}${!ordering ? '' : `&ordering=${ordering}`}${!platforms ? '' : `&platforms=${platforms}`}${!page_size ? '' : `&page_size=${page_size}`}${!dates ? '' : `&dates=${dates}`}${!search ? '' : `&search=${search}`}${!screenshots ? '' : `&screenshots=${screenshots}`}`)
        if (!response.ok) throw { status: response.status, statusText: response.statusText }

        let data = await response.json()
        cbSuccess(data)

    } catch (error) {
        let message = error.statusText || 'An error occurred while accessing the API.'

        let $error = document.querySelector('.error')
        if (!$error) {
            document.querySelector(selector).insertAdjacentHTML('beforeend', `
            <div class="error">
            <p>Error ${error.status}: ${message}</p>
            </div>
            `)
        }
        console.log(error)
    } finally {
        const $loader = document.querySelector('.loader')
        if ($loader) $loader.style.display = 'none'
    }

}