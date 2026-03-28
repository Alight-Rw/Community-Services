import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ImageLeft from "../../Assets/images/paint.png";
import { ToastContainer, toast } from 'react-toastify';
import { APIsRequestService } from '../../Services/APIsRequestService';
import Spinner from "../Shared/Loader";
function RegisterForm() {
  
  const[firstName,setFirtName]=useState('');
  const[lastName,setLastName]=useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
     const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
  e.preventDefault();
     setLoading(true);
  try {
    const response = await APIsRequestService.SignUpAPI({
      firstName,
      lastName,
      email: username,
      password,
      confirmPassword: repeatPassword
    });

    const data = await response.json();

   
    if (!response.ok) {
        setLoading(false);
      return toast.error(data.message);
    }

   
    toast.success(data.message || "Check your email to verify your account");
 
  } catch (error) {
      setLoading(false);
    toast.error("Signup failed. Try again.");
  }
};

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <ToastContainer />
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

            <form  onSubmit={handleSignUp} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="FirstName"
                value={firstName}
                onChange={(e)=>setFirtName(e.target.value)}
                className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary"
              />

              <input
                type="text"
                placeholder="LastName"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary"
              />

              <input
                type="email"
                placeholder="Email"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}

                className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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
                  value={repeatPassword}
                  onChange={(e)=>setRepeatPassword(e.target.value)}
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

              <button
                type="submit"
                disabled={loading}
                className="bg-secondary hover:bg-dark-light-secondary text-primary cursor-pointer py-2 rounded-lg font-semibold mt-2 ">
              
           
                {loading ? (
                  <>
                    <Spinner size={16} color="#ffffff" />
                    <span>Sign in...</span>
                  </>
                ) : (
                  <span>Sign Up</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
