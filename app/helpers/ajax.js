export async function Ajax(props, selector) {
    // let { url, method, headers } = props;
    let { url, cbSuccess, cbFinally } = props;
    // fetch(url)
    //     .then(res => res.ok ? res.json() : Promise.reject(res))
    //     .then(json => cbSuccess())
    //     .catch(err => {
    //         let message = err.statusText || 'Ocurrion un error al acceder a la API'
    //         document.getElementById('root').innerHTML = `
    //         <div class="error">
    //         <p>Error ${err.status}: ${message}</p>
    //         </div>
    //         `
    //         console.log(err)
    //     })
    //console.log(url)
    try {
        let res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        if (!res.ok) throw { status: error.status, statusText: error.statusText }

        let json = await res.json()
        cbSuccess(json)

    } catch (error) {
        // let message = error.statusText || 'Ocurrion un error al acceder a la API'
        let message = error.statusText || 'An error occurred while accessing the API.'
        // document.querySelector(selector).innerHTML = `
        //     <div class="error">
        //     <p>Error ${error.status}: ${message}</p>
        //     </div>
        //     `
        let $error = document.querySelector('.error')
        if (!$error) {
            document.querySelector(selector).insertAdjacentHTML('beforeend', `
            <div class="error">
            <p>Error ${error.status}: ${message}</p>
            </div>
            `)
        }

        // document.querySelector(selector).insertAdjacentHTML('beforeend', `
        //     <div class="error">
        //     <p>Error ${error.status}: ${message}</p>
        //     </div>
        //     `)
        console.log(error)
    } finally {
        const $loader = document.querySelector('.loader')
        if ($loader) $loader.style.display = 'none'
        // cbFinally()
    }

}