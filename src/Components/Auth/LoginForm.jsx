import { useState } from "react";
import ImageLeft from "../../assets/images/paint.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
<<<<<<< HEAD
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[90%] max-w-[850px] rounded-2xl shadow-2xl overflow-hidden">
        <div className="hidden md:flex justify-center py-6 bg-white">
=======
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="bg-primary w-[90%] max-w-[850px] rounded-2xl shadow-2xl overflow-hidden">
        <div className="hidden md:flex justify-center py-6 bg-primary">
>>>>>>> e724e276a052e67203eae7c7ee224c9d022fa2ea
          <h2 className="text-2xl font-bold text-center">Community Service</h2>
        </div>

        <div className="flex justify-center">
          <div className="hidden md:flex w-1/2 items-center justify-center">
            <img src={ImageLeft} alt="Illustration" className="w-[280px]" />
          </div>

<<<<<<< HEAD
          <div className="w-2/3 md:w-1/2 p-8 md:p-10 flex flex-col justify-center ">
            <div className="hidden md:flex w-[2px] h-[300px] absolute bg-gray-300 z-10 ml-[-80px]">
=======
          <div className="w-3/3 md:w-1/2 p-8 md:p-10 flex flex-col justify-center ">
            <div className="hidden md:flex w-[2px] h-[300px] absolute bg-dark-light-secondary z-10 ml-[-80px]">
>>>>>>> e724e276a052e67203eae7c7ee224c9d022fa2ea
              {" "}
            </div>

            <div className="flex md:hidden justify-center mb-6">
              <h2 className="text-2xl font-bold text-center">
                Community Service
              </h2>
            </div>

            <div className="flex justify-center gap-20 mb-6 font-semibold">
<<<<<<< HEAD
              <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">
                Login
              </span>
              <div className="w-[2px] h-[20px] absolute bg-gray-300 z-10 ml-[-20px] ">
=======
              <span className="text-secondary border-b-2 border-secondary pb-1 cursor-pointer">
                Login
              </span>
              <div className="w-[2px] h-[20px] absolute bg-dark-light-secondary z-10 ml-[-20px] ">
>>>>>>> e724e276a052e67203eae7c7ee224c9d022fa2ea
                {" "}
              </div>
              <span className="text-gray-500 cursor-pointer">Register</span>
            </div>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
<<<<<<< HEAD
                className="border rounded-lg border-gray-300 px-4 py-2 focus:outline-blue-500"
=======
                className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary"
>>>>>>> e724e276a052e67203eae7c7ee224c9d022fa2ea
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
<<<<<<< HEAD
                  className="border rounded-lg border-gray-300 px-4 py-2 w-full focus:outline-blue-500"
=======
                  className="border rounded-lg bg-universal border-primary px-4 py-2 w-full focus:outline-secondary"
>>>>>>> e724e276a052e67203eae7c7ee224c9d022fa2ea
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
<<<<<<< HEAD
                  className="absolute right-3 top-2.5 text-gray-500"
=======
                  className="absolute right-3 top-2.5 "
>>>>>>> e724e276a052e67203eae7c7ee224c9d022fa2ea
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                <span>Remember</span>
              </div>

              <p className="text-sm text-gray-500">
<<<<<<< HEAD
                Forgot your password?{" "}
                <span className="text-blue-600 cursor-pointer font-medium">
=======
                Forgot your password?
                <span className="text-secondary cursor-pointer font-medium">
>>>>>>> e724e276a052e67203eae7c7ee224c9d022fa2ea
                  Change Password
                </span>
              </p>

<<<<<<< HEAD
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mt-2">
=======
              <button className="bg-secondary hover:bg-dark-light-secondary text-primary cursor-pointer py-2 rounded-lg font-semibold mt-2 ">
>>>>>>> e724e276a052e67203eae7c7ee224c9d022fa2ea
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
