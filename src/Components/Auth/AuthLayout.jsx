const AuthLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute top-4 md:top-8 right-4 md:right-8 z-10">
        <img
          src="/images/logo.png"
          alt="OnlineBooking"
          className="h-20 md:h-32 w-20 md:w-32"
        />
      </div>

      <div className="flex flex-1">
        <div
          className="w-[51.2%]"
          style={{
            backgroundImage: "url(/images/blueCard.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className="w-[48.8%]"
          style={{
            backgroundImage: "url(/images/whiteCard.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <footer className=" absolute bottom-10 left-0 right-0 py-3 px-mobilePadding md:px-componentPadding 
      flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between items-center  md:text-sm text-center md:text-left">
        <div className="text-universal text-medium">
          ©2025 Community Services -
          <strong className="underline text-medium">All Right Reserved</strong>
        </div>

        <div className="text-universal text-medium pr-2">
          Developed with 
          <span className="text-gray-600"> Love By Coding School</span>
        </div>

        <div className="text-gray-600 text-medium">
          In Partnership with
          <strong className="underline text-medium">Alight Rwanda</strong>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
