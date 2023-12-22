import { editUrl } from "../constants/index.js";
import { detailsUrl } from "../constants/index.js";
import { getAuthData, sethAuthData } from "./auth.js";
import page from "./../../node_modules/page/page.mjs"
export async function getviewEdit(ctx, next){
  
    const id = ctx.params.id
   const res  = await fetch(detailsUrl + id)
   

   const retData = await res.json()

    
 
  
   
    ctx.products = retData
    
    next()
}
export async function dataFetch(e, id) {
    e.preventDefault();
    let data =  new FormData(e.target)

    const name = data.get('name')
    const description = data.get('description')
    const price = data.get('price')
    const image = data.get('imageUrl')
    const category = data.get('category')
  
    if(name && description && price && image && category){
     
        const response = await fetch(detailsUrl + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "X-Authorization": getAuthData().accessToken
            },
            body: JSON.stringify({
                name,
                description,
                price, 
                image,
                category
        })
         
        })
        if(response.status !== 200){
            alert("Something went wrong!")
        } else { 
            debugger
        page.redirect('/products/'+ id)
        }
} else{

    alert("All fields are required!")

}
 }
 
//  async function login(body){
//      const res = await fetch(loginUrl, {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json'
//          },
//          body: JSON.stringify(body)
//         })
 
//         if (res.status !== 200) {
//          alert(res.status + "invalind credentials!")
//         } else {
//          const data = await res.json()
//          sethAuthData(data)
//          page.redirect('/products')
//         }
 //}