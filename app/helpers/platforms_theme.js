import platforms_info from "./platforms_info.js"

export function platformsTheme() {
    const $btn_theme = document.getElementById('theme-btn')

    document.addEventListener('click', e => {
        if (e.target === $btn_theme || $btn_theme.contains(e.target)) {
            let theme = localStorage.getItem('theme')
            const $platform_Imgs = document.querySelectorAll('.platforms-grid img')
            if (theme === 'dark') {
                let i = 0
                for (let img of $platform_Imgs) {
                    img.src = platforms_info.plataforms[i].src_Image_Dark
                    i++
                }
            } else {
                let i = 0
                for (let img of $platform_Imgs) {
                    img.src = platforms_info.plataforms[i].src_Image
                    i++
                }
            }
        }
    })
}