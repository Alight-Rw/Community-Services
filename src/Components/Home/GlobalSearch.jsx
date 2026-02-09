/** @format */

import React from 'react';
import { Search, MapPin, Menu, ChevronDown } from 'lucide-react';

function GlobalSearch() {
  return (
    
    <div className="flex justify-center p-componentPadding ">
      
      
      
      <div className="flex flex-col md:flex-row items-center bg-dark-light-secondary p-2 md:p-1.5 rounded-2xl md:rounded-full w-full max-w-5xl gap-2 md:gap-0">
        
        
        <div className="w-full md:flex-1 flex items-center gap-2 px-4 bg-secondary text-white rounded-full h-12">
          <Menu size={18} className="shrink-0" />
          <input 
            type="text" 
            placeholder="ALL CATEGORIES" 
            className="bg-transparent outline-none text-xs font-bold uppercase placeholder:text-gray-300 w-full"
          />
          <ChevronDown size={16} className="shrink-0" />
        </div>

        
        <div className="w-full md:flex-[2] flex items-center bg-white rounded-full md:mx-1 px-4 h-12">
          <input 
            type="text" 
            placeholder="Electricien" 
            className="w-full bg-transparent outline-none text-gray-700 text-sm px-2"
          />
          <button className="bg-secondary p-2.5 rounded-full text-white shrink-0 hover:scale-105 transition">
            <Search size={18} />
          </button>
        </div>

        
        <div className="w-full md:flex-1 flex items-center bg-white rounded-full px-4 h-12">
          <input 
            type="text" 
            placeholder="Location" 
            className="w-full bg-transparent outline-none text-gray-700 text-sm px-2"
          />
          <MapPin size={18} className="text-secondary shrink-0" />
        </div>

      </div>
    </div>
  );
}

export default GlobalSearch;
