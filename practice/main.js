const productField = document.getElementById('product');
let product = productField.value.trim();
productField.addEventListener('keyup', (event) => {
   product = event.target.value
})

const quantityField = document.getElementById('quantity')
let quantity = productField.value.trim();
quantityField.addEventListener('keyup', (event) => {
   quantity = event.target.value
})

const btn = document.getElementById('addButton')
const manual = document.getElementById('manual')
const mystorage = document.getElementById('localStorage')

let store = [];
if(store.length === 0) {
 let myStore = JSON.parse(localStorage.getItem('store'))
}

btn.addEventListener('click', (event) => {

     let products = {product, quantity}
     store.push(products)

     localStorage.setItem(`store`, JSON.stringify(store))
     
   manual.innerHTML = ''
   store.forEach(value => {
      if(value.product && value.quantity) {
         
         const tr = document.createElement('tr')
         tr.innerHTML = 
                        `
                          <td>${value.product}</td>
                          <td>${value.quantity}</td>
                         `
         manual.appendChild(tr)
     }
   })

    productField.value = ''
    quantityField.value = ''
    product = ''
    quantity = ''
})