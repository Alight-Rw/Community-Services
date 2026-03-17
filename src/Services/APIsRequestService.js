import { LogIn } from "lucide-react";
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

  LogOutAPI: async () => {
    const headers = AuthHeader('json')
    return await fetch(`${BASE_URL}/auth/logout`, { method: 'POST', headers })

  }
}