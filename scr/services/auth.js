import { loginUrl } from "../constants/index.js";
import { registerUrl } from "../constants/index.js";
import { logoutUrl } from "../constants/index.js";

//hey
import page from "./../../node_modules/page/page.mjs"

export function getAuthData() {
    return JSON.parse(localStorage.getItem('auth'))
    
}

export function handleLogin(e){
   e.preventDefault()

   const form = new FormData(e.target);

   const email = form.get('email');
   const password = form.get('password');
if(!email || !password){
    alert('Please fill in all fields')
    return
}
   const body = {
    email,
    password
   }
   login(body)
  
}

async function login(body){
    const res = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
       })

       if (res.status !== 200) {
        alert(res.status + "invalind credentials!")
       } else {
        const data = await res.json()
        sethAuthData(data)
        page.redirect('/products')
       }
}
//-------------------------authenticating-----------------------------
export function sethAuthData(data) {
    localStorage.setItem('auth', JSON.stringify(data))

}


//----------------------register--------------------
export function handlerRegister(e) {
   
        e.preventDefault()
     
        const form = new FormData(e.target);
     
        const email = form.get('email');
        const password = form.get('password');
        const rePassword = form.get('re-password');
     if(!email || !password || !rePassword){
         alert('Please fill in all fields')
         return
     } 
     if(password!== rePassword){
         alert('Passwords do not match!')
         return
     }
        const body = {
         email,
         password
        }
        register(body)
       
     
}

async function register(body){
    const res = await fetch(registerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
       })
       if (res.status !== 200) {
        alert(res.status + "invalind credentials!")
       } else {
        const data = await res.json()
        sethAuthData(data)
        page.redirect('/products')
       }
}

//------------------------logout------------------------

export async function logout() {

    const res = await fetch(logoutUrl, {
        
        method: 'GET',
     
        headers: {
          "X-Authorization": getAuthData().accessToken
        
        }
       })
      
        localStorage.removeItem('auth')
    
       
}

//------------------------product Pages------------------------

