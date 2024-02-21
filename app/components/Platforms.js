import platform_img from "../helpers/platform_img.js"
import platforms_info from "../helpers/platforms_info.js"

export function Platforms() {



  // const plataforms = [{
  //   name: 'pc',
  //   // src_Image: actualTheme === 'dark' ? platform_img.pcForDark : platform_img.pc,
  //   src_Image: platform_img.pc,
  //   src_Image_Dark: platform_img.pcForDark,
  //   description: 'La plataforma de juegos más versátil y personalizable, los juegos de PC ofrecen gráficos de alta calidad y una amplia gama de títulos. Los jugadores pueden acceder a una variedad de géneros y utilizar hardware personalizado para optimizar su experiencia de juego.',
  //   description_eng: 'The most versatile and customizable gaming platform, PC gaming offers high-quality graphics and a wide range of titles. Gamers can access a variety of genres and use custom hardware to optimize their gaming experience.'
  // },
  // {
  //   name: 'Play Station',
  //   src_Image: platform_img.playstation,
  //   src_Image_Dark: platform_img.playstationForDark,
  //   description: 'Desarrollada por Sony, la consola PlayStation es conocida por sus exclusivos de alta calidad y tecnología innovadora. Ofrece una amplia gama de títulos, desde juegos de aventuras hasta simuladores deportivos, y brinda experiencias envolventes a través de su tecnología de realidad virtual.',
  //   description_eng: 'Developed by Sony, the PlayStation console is known for its high-quality exclusives and innovative technology. It offers a wide range of titles, from adventure games to sports simulators, and provides immersive experiences through its virtual reality technology.'
  // },
  // {
  //   name: 'Xbox',
  //   src_Image: platform_img.xbox,
  //   src_Image_Dark: platform_img.xboxForDark,
  //   description: 'Fabricada por Microsoft, la consola Xbox es conocida por su potencia y servicios en línea. Xbox Live permite a los jugadores competir en línea y acceder a una biblioteca creciente de juegos mediante el servicio Xbox Game Pass. La plataforma también tiene exclusivos notables y una sólida comunidad de jugadores.',
  //   description_eng: 'Manufactured by Microsoft, the Xbox console is known for its power and online services. Xbox Live allows gamers to compete online and access a growing library of games through the Xbox Game Pass service. The platform also has notable exclusives and a strong community of gamers.'
  // },
  // {
  //   name: 'Nintendo Switch',
  //   src_Image: platform_img.n_switch,
  //   src_Image_Dark: platform_img.n_switchForDark,
  //   description: 'La consola híbrida de Nintendo ofrece versatilidad al permitir a los jugadores jugar tanto en modo portátil como en el televisor. Con títulos familiares y exclusivos, la Nintendo Switch destaca por su innovación en la jugabilidad y es popular entre jugadores de todas las edades.',
  //   description_eng: "Nintendo's hybrid console offers versatility by allowing gamers to play in both handheld and TV modes.With familiar and exclusive titles, the Nintendo Switch stands out for its innovative gameplay and is popular with gamers of all ages."
  // },
  // {
  //   name: 'Mobile Gaming',
  //   src_Image: platform_img.mobile,
  //   src_Image_Dark: platform_img.mobileForDark,
  //   description: 'Los dispositivos móviles, como teléfonos y tabletas, han emergido como plataformas de juegos populares. Ofrecen una amplia variedad de juegos, desde simples pasatiempos hasta experiencias más complejas. Los juegos móviles suelen ser accesibles y están disponibles a través de tiendas de aplicaciones.',
  //   description_eng: 'Mobile devices, such as phones and tablets, have emerged as popular gaming platforms. They offer a wide variety of games, from simple pastimes to more complex experiences. Mobile games are often affordable and available through app stores.'
  // },
  // {
  //   // name: 'VR (Realidad Virtual)',
  //   name: 'VR (Virtual Reality)',
  //   src_Image: platform_img.vr,
  //   src_Image_Dark: platform_img.vrForDark,
  //   description: ' La realidad virtual ha introducido una nueva dimensión en los videojuegos, sumergiendo a los jugadores en entornos virtuales. Plataformas como Oculus Rift, HTC Vive y PlayStation VR ofrecen experiencias inmersivas, permitiendo a los jugadores interactuar con el mundo virtual de una manera única.',
  //   description_eng: 'Virtual reality has introduced a new dimension to video games, immersing players in virtual environments. Platforms such as Oculus Rift, HTC Vive and PlayStation VR offer immersive experiences, allowing players to interact with the virtual world in a unique way.'
  // }]

  const $footer = document.querySelector('.footer')
  let $platforms = ''
  let renderPlatforms = (theme) => {

    if (theme === 'dark') {
      for (let platform of platforms_info.plataforms) {
        $platforms += `
        <div class="platform-card">
              <img class="platform-img" src="${platform.src_Image_Dark}" alt="${platform.name}">
              <details class="platform-details">
              <summary class="platform-name">${platform.name}</summary>
              <p class="platform-description">${platform.description_eng}</p>
              </details>
        </div>
    `
      }
    } else {
      for (let platform of platforms_info.plataforms) {
        $platforms += `
        <div class="platform-card">
              <img class="platform-img" src="${platform.src_Image}" alt="${platform.name}">
              <details class="platform-details">
              <summary class="platform-name">${platform.name}</summary>
              <p class="platform-description">${platform.description_eng}</p>
              </details>
        </div>
    `
      }
    }

    $footer.classList.remove('isInactive')
    return $platforms
  }

  let actualTheme = document.documentElement.dataset.theme

  return `
    <section class="platforms">
         <h2>PLATFORMS</h2>
         <div class="platforms-grid">
            ${renderPlatforms(actualTheme)}
         </div>
    </section>
    `
}