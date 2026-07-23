/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ImageLeft from "../../Assets/images/paint.png";
import { ToastContainer, toast } from "react-toastify";
import { APIsRequestService } from "../../Services/APIsRequestService";
import Spinner from "../Shared/Loader";

function RegisterForm() {
  const [firstName, setFirtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const clearError = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await APIsRequestService.SignUpAPI({
        firstName,
        lastName,
        email: username,
        password,
        confirmPassword: repeatPassword,
      });

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);

        if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
          const validationErrors = {};
          data.errors.forEach((err) => {
            validationErrors[err.field] = err.message;
          });
          setErrors(validationErrors);
          return; 
        }

        return toast.error(data.error);
      }

      setLoading(false);
      toast.success(data.message);

      setFirtName("");
      setLastName("");
      setUsername("");
      setPassword("");
      setRepeatPassword("");
      setErrors({});
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
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

          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <div className="hidden md:flex w-[2px] h-[300px] absolute bg-dark-light-secondary z-10 ml-[-80px]" />

            <div className="flex md:hidden justify-center mb-6">
              <h2 className="text-2xl font-bold text-center">Community Service</h2>
            </div>

            <div className="flex justify-center gap-20 mb-6 font-semibold">
              <Link to="/login" className="text-gray-500 cursor-pointer">Login</Link>
              <div className="w-0.5 h-5 absolute bg-dark-light-secondary z-10 -ml-5" />
              <span className="text-secondary border-b-2 border-secondary pb-1 cursor-pointer">Register</span>
            </div>

            <form onSubmit={handleSignUp} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  required
                  onChange={(e) => {
                    setFirtName(e.target.value);
                    clearError("firstName");
                  }}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-secondary ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  required
                  onChange={(e) => {
                    setLastName(e.target.value);
                    clearError("lastName");
                  }}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-secondary ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={username}
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                    clearError("email");
                  }}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-secondary ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                      clearError("password");
                    }}
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-secondary ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5">
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div>
                <div className="relative">
                  <input
                    type={showRepeatPassword ? "text" : "password"}
                    placeholder="Re-enter Password"
                    value={repeatPassword}
                    required
                    onChange={(e) => {
                      setRepeatPassword(e.target.value);
                      clearError("confirmPassword");
                    }}
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-secondary ${
                      errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <button type="button" onClick={() => setShowRepeatPassword(!showRepeatPassword)} className="absolute right-3 top-2.5">
                    {showRepeatPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-secondary hover:bg-dark-light-secondary text-primary py-2 rounded-lg font-semibold mt-2 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Spinner size={16} color="#ffffff" />
                    <span>Signing Up...</span>
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