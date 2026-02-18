
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Clock, Star, Info, Banknote } from 'lucide-react';

import BookingSystem from './BookingSystem';
import DashboardNav from '../../Shared/DashboardNav';

const ConfirmBooking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="p-10">No service selected. Please return to services page.</div>;

  return (
    <>
      <DashboardNav />
      
      <div className="min-h-screen  p-6 md:p-8 ">
        
        
        <div className=" mx-auto">
          
        
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Book Service</h1>
            <p className="text-sm text-hard-gray">Quick summary of key metrics, recent activities, and service performance</p>
          </div>

         
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center ">
            
            
            <div className="  lg:w-[700px] lg:h-[800px] bg-primary rounded-[30px] p-6 shadow-sm border border-universal ">
              <img src={state.Img} className="w-full h-68 object-cover rounded-2xl mb-4" alt="" />
              
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-bold">{state.title}</h2>
                <div className="flex items-center gap-1 shrink-0">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} size={12} fill="#FFC107" color="#FFC107" />
                  ))}
                  <Star size={12} color="#D1D5DB" />
                  <span className="text-[10px] text-hard-gray font-medium ml-1">4.8 (267 reviews)</span>
                </div>
              </div>

              <span className="inline-block bg-small-soft-blue text-sky-blue text-xs font-bold px-3 py-1 rounded-lg mb-4">
                {state.ServiceName}
              </span>

              <p className="text-xs text-hard-gray leading-relaxed mb-6">{state.description}</p>
              
              <div className="space-y-3 mb-6 border-b border-universal pb-6">
                <div className="flex items-center gap-3 text-sm ">
                  <MapPin size={16} /> {state.place}
                </div>
                <div className="flex items-center gap-3 text-sm ">
                  <Phone size={16} /> {state.phoneNumber}
                </div>
                <div className="flex items-center gap-3 text-sm ">
                  <Clock size={16} /> {state.time}
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-secondary pt-2">
                  <Banknote size={18} />
                  <span>{state.price}</span>
                </div>
              </div>

              <div className="bg-small-soft-green text-glass-green p-3 rounded-xl flex items-center gap-2 mb-6 ">
                <Info size={16} /> 
                <span className="text-xs font-bold">Service Available</span>
              </div>

              <button 
                onClick={() => navigate(-1)} 
                className="w-full py-3 bg-secondary text-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100"
              >
                <ArrowLeft size={18} /> Back to Services
              </button>
            </div>

            
            <div className="flex-1 w-full space-y-6">
              <BookingSystem />
            </div>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmBooking;