import { useParams } from 'react-router-dom';

import LoginForm from "./LoginForm";
import AuthLayout from "./AuthLayout";
import RegisterForm from "./RegisterForm";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import AccountVerifiedForm from "./AccountVerifiedForm";
import { ProviderLoginForm } from "./ProviderLoginForm";

export function Auth({ pathURL }) {
  const { token } = useParams();

  return (
    <div>
      <div className="absolute z-10 w-full">
        {pathURL === '/register' && (<RegisterForm />)}
        {pathURL === '/login' && (<LoginForm />)}
        {pathURL === '/account-verified' && (<AccountVerifiedForm />)}
      
       {pathURL === '/forgot-password' && (<ForgotPassword />)}
       {pathURL === '/provider-login' && (<ProviderLoginForm />)}    
       {pathURL === `/change-password/${token}` && (<ChangePassword token={token} />)}   
      </div>
      
      <AuthLayout />
    </div>
  );
}
