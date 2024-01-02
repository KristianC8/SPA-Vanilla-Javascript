let stateMenu = false

function isNavigationBarVisible() {
    return window.innerHeight < (window.screen.height - 56);
}

export function MobileMenu() {

    const $MobileMenu = document.createElement('div'),
        $MobileMenuOptions = `
    <nav class="mobile-menu">
    <a class="option-mobile-menu" href="#/">Inicio</a>
    <a class="option-mobile-menu" href="#/Games">Games</a>
    <a class="option-mobile-menu" href="#/Platforms">Plataformas</a>
    </nav>
    `

    $MobileMenu.classList.add('mobile-menu-container')
    // $MobileMenu.style.clipPath = `circle(10rem at 44rem calc(${document.documentElement.clientHeight}rem - 44rem))`
    $MobileMenu.innerHTML = $MobileMenuOptions


    //Validar que si el estado del menu es cerrado se aplique el clipath se hace cuando se recarga la pagina con el cambio de #
    if (!stateMenu && isNavigationBarVisible()) {
        $MobileMenu.style.clipPath = `circle(1rem at calc(100vw - 34rem) calc(${window.innerHeight}rem - 34rem))`
    }
    else {
        $MobileMenu.style.clipPath = `circle(1rem at calc(100vw - 34rem) calc(100vh - 34rem))`
    }


    //Funcion que valida cuando la barra de navegacion en el celular esta visible o no dependiendo de esto aplica el clipath
    function updateStatus() {
        // const statusElement = document.getElementById('status');
        if (isNavigationBarVisible() && !stateMenu) {
            $MobileMenu.style.clipPath = `circle(1rem at calc(100vw - 34rem) calc(${window.innerHeight}rem - 34rem))`
            // statusElement.textContent = 'La barra del navegador es visible.';
        } else if (!isNavigationBarVisible() && !stateMenu) {
            $MobileMenu.style.clipPath = `circle(1rem at calc(100vw - 34rem) calc(100vh - 34rem))`
            // statusElement.textContent = 'La barra del navegador no es visible.';
        }
    }

    // Actualiza el estado inicial al cargar la página.
    window.addEventListener('load', updateStatus);

    // Actualiza el estado cuando cambian las dimensiones de la ventana (por ejemplo, al girar el dispositivo).
    window.addEventListener('resize', updateStatus);

    window.addEventListener('scroll', updateStatus);


    //Evento click que aplica el clipath de cerrar el menu cuando se selecciona una opcion en el menu
    const closeWithNav = `circle(1rem at calc(100vw - 34rem) calc(${window.innerHeight}rem - 34rem))`,
        close = `circle(1rem at calc(100vw - 34rem) calc(100vh - 34rem))`
    document.addEventListener('click', e => {
        if (e.target.matches('.option-mobile-menu')) {
            if (isNavigationBarVisible()) {
                $MobileMenu.style.clipPath = closeWithNav
            } else {
                $MobileMenu.style.clipPath = close
            }
            stateMenu = false
            console.log(stateMenu)
        }
    })

    // Validar que cuando el tamaño de la pantalla supere el menu mobile se cierre el menu
    let breakpoint = window.matchMedia('(min-width: 850px)')

    let responsive = (e) => {
        if (e.matches) {
            stateMenu = false
        }
    }

    responsive(breakpoint)
    breakpoint.addEventListener('change', responsive)

    return $MobileMenu

}

export function BtnMobileMenu() {
    const $btnMobileMenu = document.createElement('button')
    const $MobileMenu = document.querySelector('.mobile-menu-container')

    $btnMobileMenu.classList.add('btn-mobile-menu')


    // evento click que abre o cierra el menu mobile 
    document.addEventListener('click', e => {
        if (e.target === $btnMobileMenu || $btnMobileMenu.contains(e.target)) {

            $btnMobileMenu.classList.toggle('rubberBand')
            // setTimeout(function () {
            //     $btnMobileMenu.classList.remove('rubberBand');
            // }, 1000);

            const closeWithNav = `circle(1rem at calc(100vw - 34rem) calc(${window.innerHeight}rem - 34rem))`,
                close = `circle(1rem at calc(100vw - 34rem) calc(100vh - 34rem))`,
                openWithNav = `circle(calc(100vh * 4) at calc(100vw - 34rem) calc(${window.innerHeight}rem - 34rem))`,
                open = `circle(calc(100vh * 4) at calc(100vw - 34rem) calc(100vh - 34rem))`

            if (stateMenu) {
                if (isNavigationBarVisible()) {
                    $MobileMenu.style.clipPath = closeWithNav
                } else {
                    $MobileMenu.style.clipPath = close
                }
            } else {
                if (isNavigationBarVisible()) {
                    $MobileMenu.style.clipPath = openWithNav
                } else {
                    $MobileMenu.style.clipPath = open
                }
            }

            stateMenu = !stateMenu
            // console.log(stateMenu)
        }
    })


    return $btnMobileMenu
}