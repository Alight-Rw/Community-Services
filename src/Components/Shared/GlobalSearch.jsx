/** @format */

import React, { useState, useEffect } from 'react';
import { Search, MapPin, Menu, ChevronDown } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { APIsRequestService } from '../../Services/APIsRequestService';
import { useNavigate } from 'react-router-dom';

function GlobalSearch() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const navigate = useNavigate();

  const [searchLocation, setSearchLocation] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleSearchName = () => {
    if (!searchName.trim()) {
      return toast.error('Please enter a service name or location');
    }

     navigate(`/single-service?search=${encodeURIComponent(searchName)}`);
  };

  const handleSearchLocation = () => {
    if (!searchLocation.trim()) {
      return toast.error('Please enter a service name or location');
    }

     navigate(`/single-service?search=${encodeURIComponent(searchLocation)}`);
  };

  const handleGetCategories = async () => {
    try {
      const response = await APIsRequestService.FietchcategoryAPI();
      const data = await response.json();

      if (!response.ok) {
        return toast.error(data.message || 'Failed to fetch categories');
      }

      setCategories(data.data || []);
    } catch (error) {
      toast.error('Fail error', error);
    }
  };

  useEffect(() => {
    if (isDropdownOpen && categories.length === 0) {
      handleGetCategories();
    }
  }, [isDropdownOpen]);

  return (
    <div className='flex justify-center p-componentPadding'>
      <ToastContainer />
      <div className='flex flex-col md:flex-row items-center bg-[#7BB7FF] p-2 md:p-1.5 rounded-2xl md:rounded-full w-full gap-2 md:gap-0'>
        <div className='relative w-full md:flex-1'>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className='w-full flex items-center gap-2 px-4 bg-secondary text-white rounded-full h-12 cursor-pointer hover:bg-opacity-90 transition-all'
          >
            <Menu size={18} />
           <input
              type="text"
              readOnly
              value={selectedCategory}
              placeholder="ALL CATEGORIES"
              className="bg-transparent outline-none text-xs font-bold uppercase placeholder:text-gray-100 w-full cursor-pointer"
            />
            <ChevronDown
              size={16}
              className={`transition-transform ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </div>

          {isDropdownOpen && (
            <ul className='absolute top-14 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 py-2 max-h-60 overflow-y-auto'>
              {categories.length > 0 ? (
                categories.map((cat) => (
                  <li
                    key={cat._id}
                    onClick={() => {
                      setSelectedCategory(cat.categoryName);
                      setIsDropdownOpen(false);
                    }}
                    className='px-4 h-12 flex items-center text-sm text-black hover:bg-blue-50 hover:text-secondary cursor-pointer transition-colors'
                  >
                    {cat.categoryName}
                  </li>
                ))
              ) : (
                <li className='px-4 py-2 text-sm text-gray-500'>
                  No categories found
                </li>
              )}
            </ul>
          )}
        </div>

        <div className='w-full md:flex-[2] flex items-center bg-white rounded-full md:mx-1 px-4 h-12'>
          <input
            type='text'
            value={searchName}
            placeholder='Search service...'
            onChange={(e) => setSearchName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchName();
              }
            }}
            className='w-full bg-transparent outline-none text-gray-700 text-sm px-2'
          />
          <button
            onClick={handleSearchName}
            className='bg-secondary p-2.5 rounded-full text-white hover:scale-105 transition'
          >
            <Search size={18} />
          </button>
        </div>

        <div className='w-full md:flex-1 flex items-center bg-white rounded-full px-4 h-12'>
          <input
            type='text'
            value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearchLocation();
                }
              }}
            placeholder='Location'
            className='w-full bg-transparent outline-none text-gray-700 text-sm px-2'
          />
          <MapPin
            size={18}
            className='text-secondary'
            onClick={handleSearchLocation}
          />
        </div>
      </div>
    </div>
  );
}

export default GlobalSearch;
