
import { Sun ,Bell } from 'lucide-react';

const DashboardNav = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-primary shadow-lg h-20 flex justify-end items-center px-5 lg:px-10 gap-4 lg:gap-3 font-san">
      
      <button className="p-2 bg-primary rounded-xl shadow-sm border border-universal hover:bg-universal h-10 w-10 py-[2.5px] px-[1px] md:h-9 md:w-10 lg:px-1.5 lg:h-10 lg:w-12 transition-colors">
       
       <Sun  size={30}  style={{cursor:'pointer'}}/>
      </button>

      <div className="relative p-2 bg-primary rounded-xl hover:bg-universal shadow-sm border border-universal h-10 w-10 cursor-pointer">
        <span className="absolute top-[2px] right-[4px] text-primary h-auto w-auto bg-dark-red py-[2px] px-[2px] rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">
          22
        </span >
         <Bell size={30}  style={{cursor:'pointer'}}/>
      </div>

      <div className="h-12 w-12 lg:h-12 lg:w-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-universal">
        <img src="/image.jpg" alt="User profile" className="w-full h-full object-cover"/>
      </div>

    </div>
  );
};

export default DashboardNav;
