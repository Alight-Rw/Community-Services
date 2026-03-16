import { AuthHeader, BASE_URL } from "../Utils/RequestUtils";

export const APIsRequestService = {
  WelcomeAPI: async () => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/api/welcome`, { method: 'GET', headers });
  },

  SignInAPI:async (data)=>{
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/login`, { body:JSON.stringify(data), method: 'POST', headers })
  },
  

  SignUpAPI:async (data)=>{
    console.log(data)
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/client-signup`, { body:JSON.stringify(data), method: 'POST', headers })
  }
  
}