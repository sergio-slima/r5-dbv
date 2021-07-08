// ABRE E FECHA MENU
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// CLICAR ITEM MENU E ESCONDER MENU
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// SOMBRA NO HEADER AO USAR SCROLL
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

windows.addEventListener('scroll', function () {
    if (windows.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})