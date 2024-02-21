import Header from './components/Header.js';
import { SideBarMenu } from './components/SideBarMenu.js';
import { Router } from './components/Router.js';
import { Main } from './components/Main.js';
import { MobileMenu, BtnMobileMenu } from './components/MobileMenu.js';
import { Footer } from './components/Footer.js';



export function App() {
  const $root = document.getElementById("root")

  $root.innerHTML = null
  $root.appendChild(Header())
  $root.appendChild(Main())
  $root.appendChild(SideBarMenu())
  $root.appendChild(MobileMenu())
  $root.appendChild(BtnMobileMenu())
  $root.appendChild(Footer())

  Router()
  // $root.appendChild(Loader())
  // Ajax({
  //   url: api.GAMES,
  //   cbSuccess: (games) => {
  //     console.log(games)
  //   }
  // })
}
