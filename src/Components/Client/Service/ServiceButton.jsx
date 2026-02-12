
import image from "../../../assets/image.png";

const ServiceButton = () => {

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="flex gap-x-0.5 items-center border-2 border-blue-400 rounded-2xl w-[120px] p-2">
      <img src={image} alt="image" className="w-5 h-5 object-cover" />
      
      <button 
        type="button" 
        onClick={handleClick}
        className="text-blue-500 text-[14px]"
      >
        Book Now
      </button>

    </div>
  );
}

export default ServiceButton;

