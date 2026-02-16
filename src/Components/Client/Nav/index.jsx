import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";

export function NavigationBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
    
      <div
        className="
          w-full flex justify-between items-center px-mobilePadding md:px-componentPadding pt-6
          h-[60px] lg:h-[100px]
        "
      >
       
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-20 sm:w-26 md:w-28 lg:w-40"
          />
        </Link>

      
        <ul className="hidden lg:flex text-black gap-10 font-bold text-xl">
          <li>
            <Link to="/service" className="hover:text-secondary">
              Service
            </Link>
          </li>

          <li>
            <Link to="/gallery" className="hover:text-secondary">
              Work Gallery
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-secondary">
              Contact Us
            </Link>
          </li>
            
            
        </ul>

      
        <div className="hidden lg:block">
          <Link
            to="/login"
            className="font-bold text-secondary px-8 py-2 rounded-2xl border hover:bg-secondary hover:text-white"
          >
            Login
          </Link>
        </div>
    
       
        <button
          onClick={() => setOpenMenu(true)}
          className="lg:hidden"
        >
          <FaBars className="w-9 h-9 text-secondary font-bold" />
        </button>
      </div>

   
      {openMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-end z-50 lg:hidden">
          <div className="md:w-[40%] md:h-[40%] sm:w-[40%] sm:h-[40%] bg-white p-6 rounded-2xl mt-2 mr-2">
          
            <button
              onClick={() => setOpenMenu(false)}
              className="mb-6 text-3xl font-bold text-secondary "
            >
              ✕
            </button>

        
            <ul className="flex flex-col gap-6 font-bold text-xl">
              <li>
                <Link
                  to="/service"
                  onClick={() => setOpenMenu(false)}
                  className="hover:text-secondary"
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  onClick={() => setOpenMenu(false)}
                  className="hover:text-secondary"
                >
                  Work Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpenMenu(false)}
                  className="hover:text-secondary"
                >
                  Contact Us
                </Link>
              </li>
               <li>
               
               
              </li>
            </ul>

         
            <Link
              to="/login"
              onClick={() => setOpenMenu(false)}
              className="mt-10 block text-center font-bold text-secondary py-3 rounded-2xl border hover:bg-secondary text-white"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

