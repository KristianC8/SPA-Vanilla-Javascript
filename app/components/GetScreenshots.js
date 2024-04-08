import { Ajax } from "../helpers/ajax.js";
import api from "../helpers/rawg_api.js";


export function GetSreenshots() {
    const $screesnShots = document.querySelector('.game-ss-bigcontent')
    const $screesnShotsM = document.querySelector('.game-ss-bigcontentM')
    const $screesnShotsPop = document.querySelector('.popup-ss-content')
    const $sidebarMenu = document.querySelector('.sidebar-menu')

    let { hash } = window.location

    let game = `${hash.slice(2)}`

    Ajax({
        domain: api.GAMES,
        game: game,
        screenshots: 'ok',
        cbSuccess: (screenshots) => {

            // console.log(screenshots)
            let allScreenshots = screenshots.results
            let html = ''
            let htmlM = ''
            let htmlP = ''
            let pos = 0
            // console.log(screenshots)

            let actualTheme = document.documentElement.dataset.theme

            if (!allScreenshots || allScreenshots.length === 0) {
                html += `<img class="game-screenshot" src=${actualTheme === 'dark' ? './app/assets/noscreenshotForDarkMode.svg' : './app/assets/noscreenshotForClearMode.svg'} alt="screenshot Not Found..." data-position="${0}">`
                htmlM += `<img class="game-screenshotM" src=${actualTheme === 'dark' ? './app/assets/noscreenshotForDarkMode.svg' : './app/assets/noscreenshotForClearMode.svg'} alt="screenshot Not Found..." data-position="${0}">`
                htmlP += `<img class="popup-ss-img" src=${actualTheme === 'dark' ? './app/assets/noscreenshotForDarkMode.svg' : './app/assets/noscreenshotForClearMode.svg'} alt="screenshot Not Found..." data-position="${0}">`
            } else {
                allScreenshots.forEach(screenshot => {

                    html += `<img class="game-screenshot" src="${screenshot.image}" alt="screenshot ${pos}..." data-position="${pos}">`
                    htmlM += `<img class="game-screenshotM" src="${screenshot.image}" alt="screenshot ${pos}...">`
                    htmlP += `<img class="popup-ss-img" src="${screenshot.image}" alt="screenshot ${pos}...">`
                    pos++
                });
            }


            // $Loader.style.display = 'none'
            $screesnShots.innerHTML = html
            $screesnShotsM.innerHTML = htmlM
            $screesnShotsPop.innerHTML = htmlP


            const $btnNext = document.querySelector('.game-ss-nextbtn')
            const $btnPrev = document.querySelector('.game-ss-prevbtn')
            const $btnNextM = document.querySelector('.game-ss-nextbtnM')
            const $btnPrevM = document.querySelector('.game-ss-prevbtnM')
            const $btnNextPop = document.querySelector('.popup-ss-nextbtn')
            const $btnPrevPop = document.querySelector('.popup-ss-prevbtn')
            const $btnClosePop = document.querySelector('.popup-ss-close')
            const $popUp = document.querySelector('.popup-ss')
            const $footer = document.querySelector('.footer')
            // let breakpoint = window.matchMedia('(min-width: 1160px)')

            if (allScreenshots.length <= 3) {
                $btnNext.style.display = 'none'
                $btnPrev.style.display = 'none'
                if (allScreenshots.length === 0) {
                    $btnNextM.style.display = 'none'
                    $btnPrevM.style.display = 'none'
                    $btnNextPop.style.display = 'none'
                    $btnPrevPop.style.display = 'none'
                }
            }



            let position = 0
            let positionM = 0
            let positionPop = 0

            if (position === 0 || positionM === 0) {
                $btnPrev.disabled = true
                $btnPrev.style.opacity = 0.5
                $btnPrevM.disabled = true
                $btnPrevM.style.opacity = 0.5
            }

            let maxClicks = allScreenshots.length - 3
            let maxClicksM = allScreenshots.length - 1
            let maxClicksPop = allScreenshots.length - 1

            let sliderNext = (pos, btnN, btnP, maxC, op, Sshots, dir) => {

                if (pos >= maxC) {
                    btnN.disabled = true
                    btnN.style.opacity = 0.5
                    pos = maxC
                }
                if (pos > 0) {
                    btnP.removeAttribute('disabled')
                    btnP.style.opacity = 1
                }
                let operacion = pos * op
                Sshots.style.transform = `${dir}(-${operacion}%)`
            }

            let sliderPrev = (pos, btnN, btnP, maxC, op, Sshots, dir) => {

                if (pos <= 0) {
                    btnP.disabled = true
                    btnP.style.opacity = 0.5
                    pos = 0
                }
                if (pos < maxC) {
                    btnN.removeAttribute('disabled')
                    btnN.style.opacity = 1
                }
                let operacion = pos * op
                Sshots.style.transform = `${dir}(-${operacion}%)`

            }

            document.addEventListener('click', (e) => {

                if (e.target === $btnNext || $btnNext.contains(e.target)) {
                    position++
                    sliderNext(position, $btnNext, $btnPrev, maxClicks, (51 / 3), $screesnShots, 'translateY')
                }

                if (e.target === $btnPrev || $btnPrev.contains(e.target)) {
                    position--
                    sliderPrev(position, $btnNext, $btnPrev, maxClicks, (51 / 3), $screesnShots, 'translateY')
                }

                if (e.target === $btnNextM || $btnNextM.contains(e.target)) {
                    positionM++
                    sliderNext(positionM, $btnNextM, $btnPrevM, maxClicksM, 100, $screesnShotsM, 'translateX')
                }

                if (e.target === $btnPrevM || $btnPrevM.contains(e.target)) {
                    positionM--
                    sliderPrev(positionM, $btnNextM, $btnPrevM, maxClicksM, 100, $screesnShotsM, 'translateX')
                }

                if (e.target === $btnNextPop || $btnNextPop.contains(e.target)) {
                    positionPop++
                    sliderNext(positionPop, $btnNextPop, $btnPrevPop, maxClicksPop, 100, $screesnShotsPop, 'translateX')
                }

                if (e.target === $btnPrevPop || $btnPrevPop.contains(e.target)) {
                    positionPop--
                    sliderPrev(positionPop, $btnNextPop, $btnPrevPop, maxClicksPop, 100, $screesnShotsPop, 'translateX')
                }

                if (e.target === $btnClosePop || $btnClosePop.contains(e.target)) {
                    $popUp.classList.add('isInactive')
                    $btnPrevPop.disabled = false
                    $btnPrevPop.style.opacity = 1
                    $btnNextPop.disabled = false
                    $btnNextPop.style.opacity = 1
                    $footer.style.display = 'block'
                    // $sidebarMenu.style.visibility = 'visible';
                    // $sidebarMenu.style.opacity = '1';
                    $sidebarMenu.style.display = 'block';
                }

                if (e.target.matches('.game-screenshot')) {
                    positionPop = e.target.dataset.position

                    if (positionPop === 0) {
                        $btnPrevPop.disabled = true
                        $btnPrevPop.style.opacity = 0.5
                    } else {
                        $btnPrevPop.disabled = false
                        $btnPrevPop.style.opacity = 1
                    }
                    let operacion = positionPop * 100
                    $screesnShotsPop.style.transform = `translateX(-${operacion}%)`
                    $popUp.classList.remove('isInactive')
                    $footer.style.display = 'none'

                    // $sidebarMenu.style.visibility = 'hidden';
                    // $sidebarMenu.style.opacity = '0';
                    $sidebarMenu.style.display = 'none';


                    // $popUp.classList.add('fadeIn')

                }

                // if (e.target === $btnNext || $btnNext.contains(e.target)) {
                //     position++
                //     // console.log(maxClicks)
                //     if (position >= maxClicks) {
                //         $btnNext.disabled = `true`
                //         $btnNext.style.opacity = 0.5
                //         position = maxClicks
                //     }
                //     if (position > 0) {
                //         $btnPrev.removeAttribute('disabled')
                //         $btnPrev.style.opacity = 1
                //     }
                //     let operacion = position * (51 / 3)
                //     $screesnShots.style.transform = `translateY(-${operacion}%)`

                // }

                // if (e.target === $btnPrev || $btnPrev.contains(e.target)) {
                //     position--
                //     if (position <= 0) {
                //         $btnPrev.disabled = `true`
                //         $btnPrev.style.opacity = 0.5
                //         position = 0
                //     }
                //     if (position < maxClicks) {
                //         $btnNext.removeAttribute('disabled')
                //         $btnNext.style.opacity = 1
                //     }
                //     let operacion = position * (51 / 3)
                //     $screesnShots.style.transform = `translateY(-${operacion}%)`

                // }


            })

            const $btn_theme = document.getElementById('theme-btn')

            $btn_theme.addEventListener('click', e => {
                let theme = localStorage.getItem('theme')
                // console.log(theme)
                const $screeShotD = document.querySelector('.game-screenshot')
                const $screeShotM = document.querySelector('.game-screenshotM')
                const $screeShotP = document.querySelector('.popup-ss-img')
                if (theme === 'dark') {
                    if (!allScreenshots || allScreenshots.length === 0) {
                        $screeShotD.src = './app/assets/noscreenshotForDarkMode.svg'
                        $screeShotM.src = './app/assets/noscreenshotForDarkMode.svg'
                        $screeShotP.src = './app/assets/noscreenshotForDarkMode.svg'
                    }
                }
                else {
                    if (!allScreenshots || allScreenshots.length === 0) {
                        $screeShotD.src = './app/assets/noscreenshotForClearMode.svg'
                        $screeShotM.src = './app/assets/noscreenshotForClearMode.svg'
                        $screeShotP.src = './app/assets/noscreenshotForClearMode.svg'
                    }
                }
            })



        }
        // cbFinally: () => {
        //     //     const $imgSelPop = document.querySelectorAll('.game-screenshot')
        //     //     console.log($imgSelPop)

        //     //     document.addEventListener('click', (e) => {
        //     //         if (e.target.matches('.game-screenshot')) {
        //     //             console.log(e.target.dataset.position)
        //     //         }
        //     //     })
        // }
    }, '.game-ss-content')



}