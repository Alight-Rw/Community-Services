import React, { useEffect, useState } from "react";
import { APIsRequestService } from "../../Services/APIsRequestService";

const AccountVerifiedForm = ({ token }) => {
  const [status, setStatus] = useState("loading"); 
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const verifyUserAccount = async () => {
      if (!token) {
        setStatus("error");
        setErrorMessage("Invalid verification token.");
        return;
      }

      try {
        const response = await APIsRequestService.VerifyAccountAPI(token);
        
        if (response.ok) {
          setStatus("success");
        } else {
          const data = await response.json();
          setStatus("error");
          setErrorMessage(data.message || "Verification failed. The link may have expired.");
        }
      } catch (error) {
        setStatus("error");
        setErrorMessage("A network error occurred. Please try again.");
      }
    };

    verifyUserAccount();
  }, [token]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-xl rounded-md p-8 m-6 text-center max-w-md w-full">
        
      
        {status === "loading" && (
          <div>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="font-medium text-gray-600">Verifying your account, please wait...</p>
          </div>
        )}

     
        {status === "success" && (
          <div>
            <img
              src="/image7.png"
              alt="Verify Account Success"
              className="w-40 mx-auto mb-6"
            />
            <p className="font-bold text-lg text-green-600">
              Account Verified Successfully!
              <a href="/login" className="text-blue-500 underline ml-2 block mt-2">
                Login now
              </a>
            </p>
          </div>
        )}

        {status === "error" && (
          <div>
            <div className="text-red-500 text-5xl mb-4">❌</div>
            <p className="font-bold text-lg text-red-600 mb-2">Verification Failed</p>
            <p className="text-gray-600 mb-4">{errorMessage}</p>
            <a href="/register" className="text-blue-500 underline">
              Back to Registration
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default AccountVerifiedForm;