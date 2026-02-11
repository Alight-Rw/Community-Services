import { Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Link to="/" className="absolute top-4 md:top-8 right-4 md:right-8 z-10">
        <img
          src="/images/logo.png"
          alt="OnlineBooking"
          className="h-25 w-25 md:h-40 md:w-40"
        />
      </Link>

      <div className="flex flex-1 text-xs sm:text-sm md:text-base">
        <div
          className="w-1/2 flex flex-col justify-end py-4 sm:py-6 md:py-10 text-universal"
          style={{
            backgroundImage: "url(/images/blueCard.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col md:flex-row  justify-between items-end gap-2 sm:gap-0">
            <div className="px-2 sm:px-4 md:px-mobilePadding lg:px-componentPadding text-center sm:text-left w-full sm:w-auto">
              &copy; 2025 Community Services -
              <span className="underline">All Rights Reserved</span>
            </div>
            <div className="pr-2 sm:pr-4 md:pr-6 text-center sm:text-right whitespace-nowrap w-full sm:w-auto">
              Developed with Love
            </div>
          </div>
        </div>

        <div
          className="w-1/2 flex flex-col justify-end py-4 sm:py-6 md:py-10 "
          style={{
            backgroundImage: "url(/images/whiteCard.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-2 sm:gap-0">
            <div className="pl-2 sm:pl-4  md:pl-6 text-center sm:text-left w-full sm:w-auto">
              By <span className="underline">Coding School</span>
            </div>
            <div className="px-2 sm:px-4 md:px-mobilePadding lg:px-componentPadding text-center sm:text-right w-full sm:w-auto">
              In Partnership with 
               <span className="underline">Alight Rwanda</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
