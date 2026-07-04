import LoginForm from "./LoginForm";
import AuthLayout from "./AuthLayout";
import RegisterForm from "./RegisterForm";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import AccountVerifiedForm from "./AccountVerifiedForm";
import { ProviderLoginForm } from "./ProviderLoginForm";

export function Auth({ pathURL }) {
  
 
  const extractToken = (path, baseRoute) => {
    if (path && path.startsWith(baseRoute)) {
      return path.replace(baseRoute, "");
    }
    return null;
  };

  return (
    <div>
      <div className="absolute z-10 w-full">
        {pathURL === '/register' && <RegisterForm />}
        {pathURL === '/login' && <LoginForm />}
        {pathURL === '/forgot-password' && <ForgotPassword />}
        {pathURL === '/provider-login' && <ProviderLoginForm />}    
        
      
        {pathURL?.startsWith('/account-verified/') && (
          <AccountVerifiedForm token={extractToken(pathURL, '/account-verified/')} />
        )}
      
      
        {pathURL?.startsWith('/change-password/') && (
          <ChangePassword token={extractToken(pathURL, '/change-password/')} />
        )}   
      </div>
      
      <AuthLayout />
    </div>
  );
}