import { CiSearch } from "react-icons/ci";


const Main = () => {
  return (
    <div>
      <div></div>
      <div>
        <input 
        type="text" placeholder="electrician" 
            className="py-3 px-6 rounded-full outline-none border border-gray-500"
        />
        <button>
            <CiSearch className="w-6 h-6 sm:h-4 sm:w-4" />
        </button>
      </div>
      <div>
        <input />
        <button></button>
      </div>
    </div>
  );
};

export default Main;
