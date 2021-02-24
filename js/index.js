let close = document.querySelector('.header__burger-close')
let burger = document.querySelector('.header__burger-wrapper')
let menu = document.querySelector('.header__menu')
close.addEventListener('click', () => {
    close.style.display = 'none'
    menu.style.display = 'none'
    burger.style.display = 'block'
})
burger.addEventListener('click', () => {
    burger.style.display = 'none'
    close.style.display = 'block'
    menu.style.display = 'block'
})

