import { render, html } from "./../../node_modules/lit-html/lit-html.js";



const main = document.querySelector("main")

function productLinks(products) {
  

  return html`
  <div class="product">
            <img src="${products.imageUrl}" alt="example1" />
            <p class="title">
              ${products.name}
            </p>
            <p><strong>Price:</strong><span class="price">${products.price}</span>$</p>
            <a class="details-btn" id="${products.name}" href="${`products/${products._id}`}">Details</a>
          </div>
`
}
function productsTemplate (products){
return html`

        
        <section id="dashboard">
          ${products.map((product) => productLinks(product))}
        
        </section>
         <!-- Display an h2 if there are no posts -->
         

`
}

 function productSection(products) {
    
    return html`
    <h2>Products</h2>
    ${products && products.length > 0 ?
   productsTemplate (products) :
    html`<h2>No products yet.</h2>`}
   `

}

export function productView(ctx) {
  
        render(productSection(ctx.products), main);
   
    }