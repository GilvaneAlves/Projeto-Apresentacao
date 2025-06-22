const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonSeparateVegan = document.querySelector('.filter-all')

function formatCurrency(value, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
      <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>

    `
    })
    list.innerHTML = myLi
}
function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, //10%de desconto em cada item

    }))
    showAll(newPrices)

}

function sumPrices() {
    const total = menuOptions.reduce((acc, item) => acc + item.price, 0);

    list.innerHTML =
        `
        <li>
            <p> O valor total dos itens é  ${formatCurrency(total)} </p>
        </li>
`

}
sumPrices();

function separateVegan() {
    const separateVegan = menuOptions.filter((item) => item.vegan === true)

    showAll(separateVegan)
}



buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumPrices)
buttonSeparateVegan.addEventListener('click', separateVegan)




