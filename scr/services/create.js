import {createUrl} from "./../constants/index.js";
import page from "./../../node_modules/page/page.mjs"
import {getAuthData} from "./../services/auth.js"

export async function createProduct(e){
    e.preventDefault();
debugger
    let data =  new FormData(e.target)

  const name = data.get('name')
  const description = data.get('description')
  const price = data.get('price')
  const image = data.get('imageUrl')
  const category = data.get('category')
  
    if(name && description && price && image && category){
     
        const response = await fetch(createUrl, {
            method: 'POST',
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
      
        page.redirect('/products')
        }
} else{

    alert("All fields are required!")

}
        }


       