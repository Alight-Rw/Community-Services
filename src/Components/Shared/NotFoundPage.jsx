import { PiWarningCircle } from "react-icons/pi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
   
      <div className="bg-univeral   flex flex-col items-center justify-center  min-h-screen w-full">
        <div className="text-5xl font-bold text-secondary">404</div>

       
          <div className=" w-16 h-16 my-4 rounded-full bg-red-50 border-2 border-red-100 flex items-center justify-center">
            <PiWarningCircle size={30} color="red" />
          </div>
        

        <h1 className=" text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>

        <p className=" text-gray-400 text-base text-center  mb-8 max-w-sm">
          Oops! It looks like the page you're searching for doesn't exist or has
          been moved. Don't worry, we've got you covered.
        </p>

        <Link to="/">
          <button className="flex gap-2 bg-secondary justify-center items-center py-2 px-3 rounded-md text-primary">
            <div>
              <FaLongArrowAltLeft />
            </div>
            <div>Back to Home</div>
          </button>
        </Link>

        <div className=" w-1/2 h-px bg-gray-400 my-8" />

      
       
          <p className="text-gray-400 text-sm mb-3">
            Still need help? Our support team is ready to assist you.
          </p>
          <Link to="/contact-us" className="font-semibold text-xl pb-0.5">
            <div className="flex gap-2 underline justify-center items-center py-2 px-3 rounded-md text-secondary">
            <span>
              Get in touch with us
            </span>
              <span>
                <FaLongArrowAltRight />
              </span>
            </div>
          </Link>
     
      </div>
   
  );
}