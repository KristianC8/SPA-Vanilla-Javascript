export function Footer() {
  const $footer = document.createElement('footer')
  $footer.classList.add('footer')
  $footer.classList.add('isInactive')

  let actualTheme = document.documentElement.dataset.theme
  const date = new Date()
  const year = date.getFullYear()

  const $btn_theme = document.getElementById('theme-btn')

  $btn_theme.addEventListener('click', (e) => {
    let theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      document.querySelector('.footer-developedby-img').src =
        './app/assets/authLogoForDarkMode1.svg'
    } else {
      document.querySelector('.footer-developedby-img').src =
        './app/assets/authLogoForClear.svg'
    }
  })

  let html = `   
    <div class="footer-content">
        <div class="footer-developedby">
        <div class="footer-developedby-back">
        <img src=${
          actualTheme === 'dark'
            ? './app/assets/authLogoForDarkMode1.svg'
            : './app/assets/authLogoForClear.svg'
        } alt="Logo-Kristian-Cifuentes-Dev" class="footer-developedby-img" />
        </div>
        <span class="footer-developedby-name">Developed by <strong>KRISTIAN CIFUENTES</strong></span>
        <div class="footer-socialMedia">
        <a href="https://www.linkedin.com/in/kristian-dario-cifuentes-vera-bb24b5159/" class="footer-socialLink" rel="noopener noreferrer" target="_blank"><div class="foot-social social-in"></div></a>
        <a href="https://github.com/KristianC8/SPA-Vanilla-Javascript" class="footer-socialLink" rel="noopener noreferrer" target="_blank"><div class="foot-social social-gh"></div></a>
        </div>
        <span class="footer-date"><strong>${year}</strong></span>
        </div>
    </div>
    `

  $footer.insertAdjacentHTML('beforeend', html)

  return $footer
}
