/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { APIsRequestService } from "../../Services/APIsRequestService";
import ImageLeft from "../../Assets/images/paint.png";
import Spinner from "../Shared/Loader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await APIsRequestService.ForgotPasswordAPI({ email });
      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        return toast.error(data.message || "wrong E-mail");
      }

      setIsSent(true);
      toast.success(data.message || "Reset link sent! Check your email.");
      setEmail("");
      
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error(error);

    }
  };

  return (


    <div className="relative w-full h-screen flex items-center justify-center ">
      <ToastContainer />
      <div className="bg-primary w-[90%] max-w-[850px] rounded-2xl shadow-2xl overflow-hidden ">
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
                Verify Email
              </span>
              <div className="w-[2px] h-5 bg-dark-light-secondary"></div>
              <Link
                to="/register"
                className="text-gray-500 cursor-pointer hover:text-secondary transition-colors"
              >
                Register
              </Link>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg bg-universal border-primary px-4 py-3 my-4 focus:outline-secondary"
              />

              <p className="text-sm text-gray-500 my-2">
                Already remember account?{" "}
                <Link
                  to="/login"
                  className="text-secondary cursor-pointer font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-secondary text-white py-2 rounded-lg hover:bg-secondary/70 transition-all disabled:opacity-50"
              >
           
                {loading ? (
                  <>
                    <Spinner size={16} color="#ffffff" />
                    <span>Sending Link...</span>
                  </>
                ) : (
                  <span>send verify link</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;


