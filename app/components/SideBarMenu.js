export function SideBarMenu() {
    const $sideBarMenu = document.createElement('div'),
        $menuOptions = `
    <nav class="menu">
    <button class ="menu-btn"></button>
    <a class="option-menu" href="#/">
    <div class="option-menu-img" src="" alt=""></div><span class="option-menu-text">Inicio</span>
    </a>
     <a class="option-menu" href="#/Games">
    <div class="option-menu-img" src="" alt=""></div><span class="option-menu-text">Juegos</span>
    </a>
     <a class="option-menu" href="#/Platforms">
    <div class="option-menu-img" src="" alt=""></div><span class="option-menu-text">Plataformas</span>
    </a>
    </nav>
    `
    $sideBarMenu.classList.add('sidebar-menu')
    $sideBarMenu.innerHTML = $menuOptions

    const $menuBtn = $sideBarMenu.querySelector('.menu-btn'),
        $inputText = $sideBarMenu.querySelectorAll('.option-menu-text'),
        $main = document.querySelector('main')


    switch (localStorage.getItem('sideMenu')) {
        case null:
            localStorage.setItem('sideMenu', 'closed')
            break;
        case 'closed':
            // console.log('toy cerrado')
            $sideBarMenu.classList.remove('open-sidebar-menu')
            $menuBtn.classList.remove('open-menu-btn')
            $inputText.forEach($input => $input.classList.remove('open-menu-text'))
            $main.classList.remove('main-open-menu')
            break;
        case 'open':
            // console.log('toy abierto')
            $sideBarMenu.classList.add('open-sidebar-menu')
            $menuBtn.classList.add('open-menu-btn')
            $inputText.forEach($input => $input.classList.add('open-menu-text'))
            $main.classList.add('main-open-menu')
            break;
    }


    const openMenu = () => {
        if (localStorage.getItem('sideMenu') === 'open') {
            localStorage.setItem('sideMenu', 'closed');
            // console.log(`if: ${localStorage.getItem('sideMenu')}`);
        } else if (localStorage.getItem('sideMenu') === 'closed') {
            localStorage.setItem('sideMenu', 'open');
            // console.log(`else if: ${localStorage.getItem('sideMenu')}`);
        }

        document.removeEventListener('click', openMenu);
    };


    document.addEventListener('click', e => {
        if (e.target === $menuBtn || $menuBtn.contains(e.target)) {
            // console.log(`Estado actual: ${localStorage.getItem('sideMenu')}`);
            openMenu();
            $sideBarMenu.classList.toggle('open-sidebar-menu')
            $menuBtn.classList.toggle('open-menu-btn')
            $inputText.forEach($input => $input.classList.toggle('open-menu-text'))
            $main.classList.toggle('main-open-menu')
        }
    });

    return $sideBarMenu
}