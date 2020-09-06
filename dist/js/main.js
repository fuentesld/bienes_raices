//* Select DOM Items
const menuOpen = document.querySelector('.open-menu')
const menuClose = document.querySelector('.close-menu')
const menuNavegacion = document.querySelector('.navegacion')
// const menu = document.querySelector('.navegacion')
// const menuNav = document.querySelector('.navegacion')
// const menuBranding = document.querySelector('.menu-branding')
// const navItems = document.querySelectorAll('.nav-item')

//* Set Initial State Of Menu
let showMenu = false

menuOpen.addEventListener('click', toogleMenu)
menuClose.addEventListener('click', toogleMenu)

function toogleMenu() {
  console.log('click', showMenu)
  if(!showMenu) {
    menuOpen.classList.add('close') // cerramos ham
    menuClose.classList.add('show')
    menuNavegacion.classList.add('show')
    // menuNav.classList.add('show')
    // menuBranding.classList.add('show')
    // navItems.forEach(item => item.classList.add('show'))

    showMenu = true
  } else {
    menuOpen.classList.remove('close') // cerramos ham
    menuClose.classList.remove('show')
    menuNavegacion.classList.remove('show')
    // menuBtn.classList.remove('close')
    // menu.classList.remove('show')
    // menuNav.classList.remove('show')
    // menuBranding.classList.remove('show')
    // navItems.forEach(item => item.classList.remove('show'))

    showMenu = false
  }
}
