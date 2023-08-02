export function render(array) {
    const albums = document.querySelector('.albums__list')
    albums.innerHTML = ''

    array.forEach(product => {
        const card = createCard(product)
        albums.appendChild(card)
    })
}

export function createCard(product) {
    const itemsDisc = document.createElement('li')
    const componentsDisc = document.createElement('div')
    const imageDisc = document.createElement('img')
    const dataDisc = document.createElement('div')
    const bandDisc = document.createElement('span')
    const yearDisc = document.createElement('span')
    const titleDisc = document.createElement('h4')
    const buyContainer = document.createElement('div')
    const valueDisc = document.createElement('h5')
    const buyButton = document.createElement('button')

    itemsDisc.classList.add('albums__items')
    componentsDisc.classList.add('albums__components')
    dataDisc.classList.add('album__data')
    buyContainer.classList.add('buy__container')
    buyButton.classList.add('buy__button')

    imageDisc.src = product.img 
    imageDisc.alt = product.title 

    bandDisc.innerText = product.band
    yearDisc.innerText = product.year 
    titleDisc.innerText = product.title
    valueDisc.innerText = `R$ ${product.price},00`
    buyButton.innerText = 'Comprar'

    buyContainer.append(valueDisc, buyButton)
    dataDisc.append(bandDisc, yearDisc)
    componentsDisc.append(imageDisc, dataDisc, titleDisc, buyContainer)
    itemsDisc.appendChild(componentsDisc)

    return itemsDisc
}