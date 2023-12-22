import { getAuthData } from "../services/auth.js";
import { render, html } from "./../../node_modules/lit-html/lit-html.js";


const main = document.querySelector("main")


 function detailsTemplate (productsG){

return html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="${productsG.imageUrl}" />
  <p id="details-title">${productsG.name}</p>
  <p id="details-category">
    Category: <span id="categories">${productsG.category}</span>
  </p>
  <p id="details-price">
    Price: <span id="price-number">${productsG.price}</span>$</p>
  <div id="info-wrapper">
    <div id="details-description">
      <h4>Bought: <span id="buys">0</span> times.</h4>
      <span
        >${productsG.description}</span>
            ${productsG._ownerId === getAuthData()._id ? loggedButtons(productsG) : ""}
    </div>
  </div>

 

`
}

 

function loggedButtons(productsG){
    return html`
    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      <a href="/edit/${productsG._id}" id="edit-btn">Edit</a>
      <a href="" id="delete-btn">Delete</a>
      <a href="" id="buy-btn">Buy</a>
      </div>
    </div>
  </section>
      `
  
}









export function detailsView(ctx) {

    render(detailsTemplate(ctx.products), main);

}









