export async function Ajax(props) {
    // let { url, method, headers } = props;
    let { url, cbSuccess } = props;


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
        let message = error.statusText || 'Ocurrion un error al acceder a la API'
        document.querySelector('main').innerHTML = `
            <div class="error">
            <p>Error ${error.status}: ${message}</p>
            </div>
            `
        console.log(error)
    }

}