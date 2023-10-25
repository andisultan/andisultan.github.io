'use strict'

let carts = []
const productCart = document.querySelector('.js-cart')
const productList = document.querySelector('.js-products')

productList.addEventListener('click', (event) => {
  event.preventDefault()

  const isButtonCart = event.target.matches('.js-add-to-cart')

  if (isButtonCart) {
    const isProductExist = carts.find((product) => product.id === event.target.dataset.id)

    if (isProductExist) {
      if (isProductExist.qty >= event.target.dataset.stock) {
        console.info('No hay stock')
        return
      }
      isProductExist.qty += 1
    } else {
      const product = {
        id: event.target.dataset.id,
        title: event.target.dataset.title,
        price: event.target.dataset.price,
        img: event.target.dataset.img,
        qty: 1,
      }

      carts.push(product)
    }

    productCart.innerText = carts.reduce((acc, product) => acc + product.qty, 0)
  }
})

const buttonCart = document.querySelector('.nav__cart')
const header = document.querySelector('.header')
buttonCart.addEventListener('click', (event) => {
  event.preventDefault()

  const cartList = document.createElement('ul')
  cartList.innerHTML = carts.map((product) => {
    return `
      <li>
        <img src="${product.img}" alt="${product.title}" />
        <span>${product.title}</span>
        <span>${product.price}</span>
        <span>${product.qty}</span>
      </li>
    `
  })

  header.innerHTML = ''
  header.append(cartList)
})
