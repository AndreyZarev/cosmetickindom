import page from "./../node_modules/page/page.mjs";
// import page from "../../node_modules/pages/page.mjs";

import {authMidleware} from "./midleware/authMidleware.js";

import {navbarView} from "./views/navbar.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { logoutView } from "./views/logout.js";
import { productView } from "./views/products.js";
import { getProducts } from "./services/product.js";
import { createView } from "./views/createT.js";
import { detailsView } from "./views/details.js";
import { getviewDetails } from "./services/detailsF.js";
import { getviewEdit } from "./services/editS.js";
import { editView } from "./views/edit.js";


page(authMidleware)
page(navbarView);
page("/", homeView)
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/products", getProducts, productView);
page("/create", createView);
page("/products/:id", getviewDetails, detailsView );
page("/edit/:id", getviewEdit, editView)
page.start();


