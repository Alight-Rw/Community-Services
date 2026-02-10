import AuthLayout from "./AuthLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

export function Auth() {
    const [isLogin,setIsLogin]=useState(true)
    const [isSignup,setIsSignup]=useState(false)

    const handLogin = () =>{
        setIsLogin(true)
        setIsSignup(false)
    }
     const handSignup = () =>{
        setIsLogin(false)
        setIsSignup(true)
    }

  return (
    <div>
      <div className="absolute z-10 w-full">
        {isLogin && (<LoginForm onClick={handSignup}/>)}
        {isSignup && (<RegisterForm onClick={handLogin}/>)}
      </div>
      <AuthLayout />
    </div>
  );
}
