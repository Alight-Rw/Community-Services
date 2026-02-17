import LoginForm from "./LoginForm";
import AuthLayout from "./AuthLayout";
import RegisterForm from "./RegisterForm";
import ChangePassword from "./ChangePassword";
import AccountVerifiedForm from "./AccountVerifiedForm";
import ResendPassword from "./ResendPassword";

import { ProviderLoginForm } from "./ProviderLoginForm";

export function Auth({ pathURL }) {

  return (
    <div>
      <div className="absolute z-10 w-full">
        {pathURL === '/register' && (<RegisterForm />)}
        {pathURL === '/login' && (<LoginForm />)}
        {pathURL === '/change-password' && (<ChangePassword />)}
        {pathURL === '/account-verified' && (<AccountVerifiedForm />)}
      
       {pathURL === '/change-password' && (<ChangePassword />)}
       {pathURL === '/resend-password' && (<ResendPassword />)}
       {pathURL === '/provider' && (<ProviderLoginForm />)}


       
      </div>
      <AuthLayout />
    </div>
  );
}
