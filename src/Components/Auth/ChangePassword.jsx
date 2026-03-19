
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { APIsRequestService } from "../../Services/APIsRequestService";
import ImageLeft from "../../Assets/images/paint.png";
const ChangePassword = ({ token }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!password) {
      setIsSubmitting(false);
      return toast.error("Please enter a new password.");
    }
    if (password !== confirmPassword) {
      setIsSubmitting(false);
      return toast.error("Passwords do not match!");
    }
  
      try {
        const response = await APIsRequestService.ChangePasswordAPI(token, { newPassword: password, confirmPassword });
        const data = await response.json();
  
        if (!response.ok) {
          setIsSubmitting(false);
          return toast.error(data.message);
        }
  
        setTimeout(() => { navigate('/login')}, 3000);
        setIsSubmitting(false);
        return toast.success(data?.message);
      } catch (error) {
        console.error('Failed Error:', error);
      }
    };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="bg-primary w-[90%] max-w-[850px] rounded-2xl shadow-2xl overflow-hidden">
        <div className="hidden md:flex justify-center py-6 bg-primary">
          <h2 className="text-2xl font-bold text-center">Community Service</h2>
        </div>
        <div className="flex justify-center relative">
          <div className="hidden md:flex w-1/2 items-center justify-center">
            <img src={ImageLeft} alt="Illustration" className="w-[280px]" />
          </div>
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-[2px] bg-dark-light-secondary -translate-x-1/2"></div>
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <div className="flex md:hidden justify-center mb-6">
              <h2 className="text-2xl font-bold text-center">
                Community Service
              </h2>
            </div>
            <div className="flex justify-center items-center gap-8 mb-6 font-semibold relative">
              <span className="text-secondary border-b-2 border-secondary pb-1 cursor-pointer">
                Change Password
              </span>
              <div className="w-[2px] h-5 bg-dark-light-secondary"></div>
              <Link
                to="/register"
                className="text-gray-500 cursor-pointer hover:text-secondary transition-colors"
              >
                Register
              </Link>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleChangePassword}>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  autocomplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded-lg bg-universal border-primary text-base px-4 py-3 mt-6 w-full focus:outline-secondary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9.5"
                >
                  {showPassword ? (
                    <FaEyeSlash size={22} color="gray" />
                  ) : (
                    <FaEye size={22} color="gray" />
                  )}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border rounded-lg bg-universal border-primary text-base px-4 py-3 mt-3 w-full focus:outline-secondary"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-6.5"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={22} color="gray" />
                  ) : (
                    <FaEye size={22} color="gray" />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 my-4">
                Already remember account ?{" "}
                <Link
                  to="/login"
                  className="text-secondary cursor-pointer font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-secondary hover:bg-dark-light-secondary text-primary cursor-pointer py-2 rounded-lg font-semibold mt-2 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Change Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
