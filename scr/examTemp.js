import page from "page/page.mjs";

//-------------import in app.js-----------------------------------------------------

import { render, html } from "lit-html";

//--------------import in navbar.js----------------------------------------------------

export function navbarView(){
    render(navbarView(), header);
}


//-------------export form navbar.js and render in header element----------------------------------------------------