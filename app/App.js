import api from './helpers/rawg_api.js'
import { Ajax } from './helpers/ajax.js';
import { Loader } from './components/Loader.js';
import Header from './components/Header.js';
import { SideBarMenu } from './components/SideBarMenu.js';
import { Router } from './components/Router.js';
import { Main } from './components/Main.js';




export function App() {
  const $root = document.getElementById("root")

  $root.innerHTML = null
  $root.appendChild(Header())
  $root.appendChild(Main())
  $root.appendChild(SideBarMenu())

  Router()
  // $root.appendChild(Loader())
  // Ajax({
  //   url: 'ulu',
  //   cbSuccess: (games) => {
  //     console.log(games)
  //   }
  // })
}
