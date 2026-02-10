import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ImageLeft from "../../assets/images/paint.png";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="bg-primary w-[90%] max-w-[850px] rounded-2xl shadow-2xl overflow-hidden">
        <div className="hidden md:flex justify-center py-6 bg-primary">
          <h2 className="text-2xl font-bold text-center">Community Service</h2>
        </div>

        <div className="flex justify-center">
          <div className="hidden md:flex w-1/2 items-center justify-center">
            <img src={ImageLeft} alt="Illustration" className="w-[280px]" />
          </div>

          <div className="w-3/3 md:w-1/2 p-8 md:p-10 flex flex-col justify-center ">
            <div className="hidden md:flex w-[2px] h-[300px] absolute bg-dark-light-secondary z-10 ml-[-80px]" />

            <div className="flex md:hidden justify-center mb-6">
              <h2 className="text-2xl font-bold text-center">
                Community Service
              </h2>
            </div>

            <div className="flex justify-center gap-20 mb-6 font-semibold">
              <Link to="/login" className="text-gray-500 cursor-pointer" > Login </Link>
              <div className="w-0.5 h-5 absolute bg-dark-light-secondary z-10 -ml-5" />
              <span className="text-secondary border-b-2 border-secondary pb-1 cursor-pointer"> Register </span>
            </div>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="FirstName"
                className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary"
              />

              <input
                type="text"
                placeholder="LastName"
                className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary"
              />

              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary w-full"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5"
                >
                  {showPassword ? ( <FaEyeSlash size={18} /> ) : ( <FaEye size={18} /> )}
                </button>
              </div>

              <div className="relative">
                <input
                  type={repeatPassword ? "text" : "password"}
                  placeholder="Re-enter Password"
                  className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary w-full"
                />

                <button
                  type="button"
                  onClick={() => setRepeatPassword(!repeatPassword)}
                  className="absolute right-3 top-2.5"
                >
                  {repeatPassword ? ( <FaEyeSlash size={18} /> ) : ( <FaEye size={18} /> )}
                </button>
              </div>

              <button className="bg-secondary hover:bg-dark-light-secondary text-primary cursor-pointer py-2 rounded-lg font-semibold mt-2 "> Sign Up </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
