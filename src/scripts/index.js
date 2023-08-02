import { render } from "./render.js"
import { handleTheme } from "./theme.js"
import { categories, products } from "./products.js"
import { filterByRange, handleFilter } from "./filter.js"

function categorizeProducts(products, categories) {
    products.forEach(product =>  {
        const categoryIndex = product.category 
        product.category = categories[categoryIndex]
    })
    return products
}

handleTheme()
handleFilter()
filterByRange()
render(products)
categorizeProducts(products, categories)