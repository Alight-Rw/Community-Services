import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ImageLeft from "../../assets/images/paint.png";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedService = sessionStorage.getItem("SELECTED-SERVICE");
    
    if (selectedService) {
      const serviceData = JSON.parse(selectedService);
      const slugTitle = serviceData.title.toLowerCase().replace(/\s+/g, "-");
      return navigate(`/confirm-booking/${slugTitle}`, { state: serviceData });
    }

    if (selectedService === null) {
      return navigate('/dashboard');
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="bg-primary w-[90%] max-w-[850px] rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="hidden md:flex justify-center py-6 bg-primary">
          <h2 className="text-2xl font-bold text-center">
            Community Service
          </h2>
        </div>

        <div className="flex justify-center">
          
          <div className="hidden md:flex w-1/2 items-center justify-center">
            <img src={ImageLeft} alt="Illustration" className="w-[280px]" />
          </div>

          <div className="w-3/3 md:w-1/2 p-8 md:p-10 flex flex-col justify-center ">
            
            <div className="flex justify-center gap-20 mb-6 font-semibold">
              <span className="text-secondary border-b-2 border-secondary pb-1 cursor-pointer">
                Login
              </span>

              <div className="w-0.5 h-5 absolute bg-dark-light-secondary z-10 -ml-5" />

              <Link to="/register" className="text-gray-500 cursor-pointer">
                Register
              </Link>
            </div>

            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <input
                type="text"
                placeholder="Username"
                className="border rounded-lg bg-universal border-primary px-4 py-2 focus:outline-secondary"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border rounded-lg bg-universal border-primary px-4 py-2 w-full focus:outline-secondary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>

              <button
                type="submit"
                className="bg-secondary hover:bg-dark-light-secondary text-primary cursor-pointer py-2 rounded-lg font-semibold mt-2"
              >
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