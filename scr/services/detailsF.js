import { detailsUrl } from "../constants/index.js";

export async function getviewDetails(ctx, next){
  
    
    console.log(ctx.params.id);

    
  
    
    const res = await fetch(detailsUrl + ctx.params.id )
    const data = await res.json()

    ctx.products = data
     
    next()
}