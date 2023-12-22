import { render, html } from "./../../node_modules/lit-html/lit-html.js";

const header = document.getElementById("header");

const loggedInUser = () => {
  return html`
  
  <div class="user">
    <a href="/create">Add Product</a>
    <a href="/logout">Logout</a>
  </div>`
}

const guestUser = () => {
  return html`
  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>`
}

const navbarTemplate = (isAuthentiated) =>{
  return html`
  <!-- Navigation -->
<a id="logo" href="/"
  ><img id="logo-img" src="./images/logo.png" alt=""
/></a>

<nav>
  <div>
    <a href="/products">Products</a>
  </div>

 
${isAuthentiated ? loggedInUser() : guestUser()}
</nav>`
} 


export function navbarView(ctx, next) {

  const isAuthentiated = ctx.authData
 render(navbarTemplate(isAuthentiated), header);


    next();
  } 
 
   
