import { render } from "./render.js"
import { products } from "./products.js"

const filterGenre = (element) => {
    const filteredAlbums = products.filter(product => product.category.includes(element))
    return filteredAlbums
}

export const handleFilter = () => {
    const buttons = document.querySelectorAll('.filter__button')
    const albums = document.querySelector('.albums__list')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            albums.innerHTML = ''
            const filter = button.innerText 

            if (filter === 'Todos') {
                render(products)
            } else {
                const filteredGenre = filterGenre(filter)
                render(filteredGenre)
            }
        })
    })
}

export const filterByRange = () => {
    let input = document.querySelector('.price__range')

    input.addEventListener('input', (event) => {
        let actualValue = Number(event.target.value)
        let textValue = document.querySelector('.price__value')
        let currencyValue = actualValue.toLocaleString('pt-br', {})

        textValue.innerText = `${currencyValue},00`

        let arrayFilter = products.filter(product => {
            if (product.price <= actualValue) {
                return product
            }
        })
        render(arrayFilter)
    })
}