import AuthLayout from "./AuthLayout";
import ChangePassword from "./ChangePassword";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export function Auth({ pathURL }) {

  return (
    <div>
      <div className="absolute z-10 w-full">
        {pathURL === '/register' && (<RegisterForm />)}
       {pathURL === '/login' && (<LoginForm />)}
       {pathURL === '/change-password' && (<ChangePassword />)}
       
      </div>
      <AuthLayout />
    </div>
  );
}
