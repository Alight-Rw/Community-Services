
import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, User, Mail, Phone, MessageSquare } from 'lucide-react';

const BookingSystem = () => {

  const [currentDate, setCurrentDate] = useState(new Date()); 
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 1, 17)); 
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay(); 
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    
    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);
    
    return [...blanks, ...days];
  }, [currentDate]);

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + offset)));
  };

  const handleYearChange = (e) => {
    setCurrentDate(new Date(currentDate.setFullYear(parseInt(e.target.value))));
  };

  const isSelected = (day) => {
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === currentDate.getMonth() && 
           selectedDate.getFullYear() === currentDate.getFullYear();
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-primary space-y-6 ">
      
   
      <section className="border border-universal rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6 font-bold ">
          <CalendarIcon size={18} /> <span>Select Date</span>
        </div>

        
        <div className="flex items-center justify-between mb-6 px-2">
          <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-universal rounded-full transition-colors">
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2 items-center">
            <span className="font-bold text-lg">{months[currentDate.getMonth()]}</span>
            <select 
              value={currentDate.getFullYear()} 
              onChange={handleYearChange}
              className="font-bold text-lg  bg-transparent border-none focus:ring-0 cursor-pointer "
            >
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <button onClick={() => changeMonth(1)} className="p-2 hover:bg-universal rounded-full transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

       
        <div className="grid grid-cols-7 gap-1 text-center mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
            <div key={d} className="text-xs font-semibold text-hard-gray py-2">{d}</div>
          ))}
          {daysInMonth.map((day, idx) => (
            <div key={idx} className="aspect-square flex items-center justify-center">
              {day && (
                <button
                  onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                  className={`w-20 h-10 rounded-xl text-sm transition-all flex items-center justify-center
                    ${isSelected(day) ? ' bg-secondary text-primary shadow-lg' : 'bg-soft-gray text-hard-gray '}`}
                >
                  {day}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="bg-small-soft-blue text-secondary p-3 rounded-xl text-xs font-medium border border-soft-small-soft-blue">
          Selected Date: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </section>

    
      <section className="border border-universal rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4 font-bold text-gray-800">
          <Clock size={18} /> <span>Select Time (08:00 AM - 18:00 PM)</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'].map(time => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-3 text-xs font-medium rounded-xl border transition-all
                ${selectedTime === time ? 'bg-secondary text-primary border-secondary shadow-md' : ' border-universal text-hard-gray hover:border-sky-blue'}`}
            >
              {time}
            </button>
          ))}
        </div>
        <div className="mt-4 bg-soft-green text-hard-green p-3 rounded-xl text-xs font-medium">
          Selected Time: {selectedTime}
        </div>
      </section>

      
      <section className="border border-universal rounded-2xl p-6 shadow-sm space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-bold flex items-center gap-2"><MapPin size={14}/> Service Location</label>
          <input type="text" placeholder="KG 8 St Remera-Kabeza" className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold flex items-center gap-2"><MessageSquare size={14}/> Additional Notes</label>
          <textarea rows="3" placeholder="Add any special requests or details..." className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
        </div>

        <div className="pt-4 border-t border-universal">
          <h3 className="text-sm font-bold flex items-center gap-2 mb-4"><Phone size={14}/> Your Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 mb-4 text-[10px] uppercase tracking-wider text-hard-gray font-bold"><User size={14}/>Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 mb-4 text-[10px] uppercase tracking-wider text-hard-gray font-bold"><Mail size={14}/>Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-hard-gray font-bold"><Phone size={14}/>Phone Number</label>
            <input type="text" placeholder="+250 788 888 888" className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="flex-1 py-4 border border-universal rounded-2xl font-bold text-sm hover:universal transition-colors">Cancel</button>
          <button className="flex-1 py-4 bg-secondary text-primary rounded-2xl font-bold text-sm hover:bg-blue-700 shadow-xl shadow-soft-small-soft-blue transition-all">Confirm Booking</button>
        </div>
      </section>
    </div>
  );
};

export default BookingSystem;