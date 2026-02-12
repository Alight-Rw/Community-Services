
import image from "../../../assets/image.png";

const ServiceButton = ({ disabled }) => {

  const handleClick = () => {
    if (!disabled) {
      alert("Button clicked!");
    }
  };

  return (
    <div
      className={`flex gap-x-0.5 items-center border-2 rounded-2xl w-[120px] p-2 my-[25px]
      ${
        disabled
          ? "border-blue-200 bg-blue-50 opacity-60 cursor-not-allowed"
          : "border-blue-400 cursor-pointer"
      }`}
    >
      <img
        src={image}
        alt="image"
        className={`w-5 h-5 object-cover ${disabled ? "opacity-50" : ""}`}
      />

      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className={`text-[14px]
          ${
            disabled
              ? "text-blue-300 cursor-not-allowed"
              : "text-blue-500 hover:bg-small-soft-blue"
          }`}
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceButton;
