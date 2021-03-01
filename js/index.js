window.addEventListener('DOMContentLoaded', function () {
    const burger = function () {
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

    const scrollPageDown = function () {
        // receive buttons 
        const arrowButton = document.querySelector('.development__arrow-down'),
            homeButton = document.querySelector('.header__home'),
            aboutButton = document.querySelector('.header__about'),
            servisingButton = document.querySelector('.header__servising'),
            portfolioButton = document.querySelector('.header__portfolio'),
            pricingButton = document.querySelector('.header__pricing'),
            teamButton = document.querySelector('.header__team')
        // receive main elements (dividing our page into categories)
        const aboutUs = document.querySelector('.about-us__body'),
            services = document.querySelector('.services__body'),
            portfolio = document.querySelector('.latest-work__body'),
            pricingPlan = document.querySelector('.pricing-plan__body'),
            teamMember = document.querySelector('.team__body')

        // function animation 
        const scrollPage = (position) => {
            event.preventDefault()
            window.scroll({
                left: 0,
                top: position,
                behavior: 'smooth'
            })
        }
        //cordinates 
        const aboutCordinateY = document.body.scrollTop + aboutUs.getBoundingClientRect().top
        const servicesCordinateY = document.body.scrollTop + services.getBoundingClientRect().top
        const portfolioCordinateY = document.body.scrollTop + portfolio.getBoundingClientRect().top
        const pricingPlanCordinateY = document.body.scrollTop + pricingPlan.getBoundingClientRect().top
        const teamCordinateY = document.body.scrollTop + teamMember.getBoundingClientRect().top
        //button click
        arrowButton.addEventListener('click', () => { scrollPage(aboutCordinateY, event) })
        homeButton.addEventListener('click', () => { scrollPage(document.body.scrollTop, event) })
        aboutButton.addEventListener('click', () => { scrollPage(aboutCordinateY, event) })
        servisingButton.addEventListener('click', () => { scrollPage(servicesCordinateY, event) })
        portfolioButton.addEventListener('click', () => { scrollPage(portfolioCordinateY, event) })
        pricingButton.addEventListener('click', () => { scrollPage(pricingPlanCordinateY, event) })
        teamButton.addEventListener('click', () => { scrollPage(teamCordinateY, event) })
    }
    scrollPageDown()
})
