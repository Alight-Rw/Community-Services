import image from "../../../assets/images/image.png";

const ServiceButton = ({ disabled, onClick }) => {
  return (
    <div
      
      onClick={!disabled ? onClick : undefined}
      className={`flex gap-x-0.5 items-center border-2 rounded-2xl w-[125px] p-2 my-[10px] transition-all
      ${
        disabled
          ? "border-blue-100 bg-gray-50 opacity-60 cursor-not-allowed"
          : "border-blue-400 cursor-pointer hover:bg-blue-50 active:scale-95"
      }`}
    >
      <img
        src={image}
        alt="icon"
        className={`w-5 h-5 object-cover ${disabled ? "grayscale" : ""}`}
      />

      <button
        type="button"
        disabled={disabled}
        className={`text-[13px] font-bold ml-1
          ${
            disabled
              ? "text-blue-200 cursor-not-allowed"
              : "text-blue-500"
          }`}
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceButton;