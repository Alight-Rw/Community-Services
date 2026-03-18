
import { AuthHeader, BASE_URL } from "../Utils/RequestUtils";

export const APIsRequestService = {
  WelcomeAPI: async () => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/api/welcome`, { method: 'GET', headers });
  },

  SignInAPI: async (data) => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/login`, { body: JSON.stringify(data), method: 'POST', headers })
  },

  SignUpAPI:async (data)=>{
    
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/client-signup`, { body:JSON.stringify(data), method: 'POST', headers })
  },
     LogOutAPI: async () => {
    const headers = AuthHeader('json')
    return await fetch(`${BASE_URL}/auth/logout`, { method: 'POST', headers })

  },
  SignUpAPI:async (data)=>{
   
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/client-signup`, { body:JSON.stringify(data), method: 'POST', headers })
  },
FiechcategoryAPI:async() =>{
  
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/category/categories`,{
      method:"GET",
      headers
    })
  },
  
  contactUsAPI:async (data)=>{
   
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/contact/message`, { body:JSON.stringify(data), method: 'POST', headers })
    return await fetch(`${BASE_URL}/auth/login`, { body:JSON.stringify(data), method: 'POST', headers })
  },
  
  GalleryAPI: async () => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/api/gallery`, {
      method: 'GET',
      headers
    });
  }
}