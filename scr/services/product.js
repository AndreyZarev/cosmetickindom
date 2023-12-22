import { productsUrl } from "./../constants/index.js";
export async function getProducts(ctx, next) {
    const res = await fetch(productsUrl)
    const data = await res.json()
    ctx.products = data
    next()
}