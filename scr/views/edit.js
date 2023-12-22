import { getAuthData } from "../services/auth.js";
import { dataFetch } from "../services/editS.js";
import { render, html } from "./../../node_modules/lit-html/lit-html.js";


const main = document.querySelector("main")


 function detailsTemplate (productsEdit){

    

return html`

<section id="edit">
<div class="form">
  <h2>Edit Product</h2>
  <form class="edit-form" @submit=${(e) => dataFetch(e, productsEdit._id)}>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Product Name"
      value="${productsEdit.name}"
    />
    <input
      type="text"
      name="imageUrl"
      id="product-image"
      placeholder="Product Image"
      value="${productsEdit.imageUrl}"
    />
    <input
      type="text"
      name="category"
      id="product-category"
      placeholder="Category"
      value = "${productsEdit.category}"
    />
    <textarea
      id="product-description"
      name="description"
      placeholder="Description"
      rows="5"
      cols="50"
    >${productsEdit.description}</textarea>
    
    <input
      type="text"
      name="price"
      id="product-price"
      placeholder="Price"
      value = "${productsEdit.price}"
    />
    <button type="submit">post</button>
  </form>
</div>
</section>
`
}



export function editView(ctx) {

    render(detailsTemplate(ctx.products), main);

}


