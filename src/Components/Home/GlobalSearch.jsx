/** @format */

import React from 'react';
import { Search, MapPin, Menu, ChevronDown } from 'lucide-react';

function GlobalSearch() {
  return (
    
    <div className="flex justify-center">

 <div className="flex items-center bg-[#4f46e5] p-1.5 rounded-full w-full ">
      
      
      <div className="flex-1 flex items-center gap-2 px-4 bg-[#1e1b4b] text-white rounded-full h-12 min-w-[160px]">
        <Menu size={18} className="shrink-0" />
        <input 
          type="text" 
          placeholder="ALL CATEGORIES" 
          className="bg-transparent outline-none text-xs font-bold uppercase placeholder:text-gray-300 w-full"
        />
        <ChevronDown size={16} className="shrink-0" />
      </div>

      
      <div className="flex-[2] flex items-center bg-white rounded-full mx-1 px-4 h-12">
        <input 
          type="text" 
          placeholder="Electricien" 
          className="w-full bg-transparent outline-none text-gray-700 text-sm px-2"
        />
        <button className="bg-[#1e1b4b] p-2.5 rounded-full text-white shrink-0 hover:scale-105 transition">
          <Search size={18} />
        </button>
      </div>

      
      <div className="flex-1 flex items-center bg-white rounded-full px-4 h-12 min-w-[140px]">
        <input 
          type="text" 
          placeholder="Location" 
          className="w-full bg-transparent outline-none text-gray-700 text-sm px-2"
        />
        <MapPin size={18} className="text-[#4f46e5] shrink-0" />
      </div>

    </div>

    </div>
   
  );
}

export default GlobalSearch;
