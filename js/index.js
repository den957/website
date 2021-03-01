window.addEventListener('DOMContentLoaded', function () {
    let burger = function () {
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
    }
    burger()

    let scrollPageDown = function () {
        let button = document.querySelector('.development__arrow-down')
        button.addEventListener('click', () => {
            window.scroll({
                left: 0,
                top: 720,
                behavior: 'smooth'
            })
        })
    }
    scrollPageDown()
})

