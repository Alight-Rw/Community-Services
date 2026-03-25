import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, User, Mail, Phone, MessageSquare, CheckCircle, Loader2, X } from 'lucide-react';
import { useRequestService } from '../../../Hooks/requestServices';
import { ToastContainer } from 'react-toastify';

const ConfirmationModal = ({ isOpen, isLoading, selectedDate, selectedTime, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={!isLoading ? onClose : undefined} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 flex flex-col items-center text-center animate-[fadeInScale_0.3s_ease-out]">
        {isLoading ? (
          <>
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Loader2 size={40} className="text-blue-500 animate-spin" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Submitting your booking...</h2>
            <p className="text-sm text-gray-500">Please wait while we process your request.</p>
          </>
        ) : (
          <>
            <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors">
              <X size={18} className="text-gray-400" />
            </button>
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6 animate-[popIn_0.4s_0.1s_ease-out_both]">
              <CheckCircle size={44} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Received! </h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Your booking has been submitted successfully. Our team will review your request and get back to you shortly.
            </p>
            <div className="w-full bg-blue-50 border border-blue-100 rounded-2xl p-4 text-left space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CalendarIcon size={16} className="text-blue-500 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-blue-400 font-bold">Date</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-blue-500 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-blue-400 font-bold">Time</p>
                  <p className="text-sm font-semibold text-gray-700">{selectedTime}</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
              <p className="text-xs text-amber-700 font-medium">
                Awaiting confirmation from our team. You'll receive a response within 24 hours.
              </p>
            </div>
            <button onClick={onClose} className="mt-6 w-full py-3 bg-gray-800 text-white rounded-xl font-bold text-sm hover:bg-gray-700 transition-colors">
              Done
            </button>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

const BookingSystem = ({ serviceData }) => {
  const navigate = useNavigate();
  const { requestService } = useRequestService();



  const [serviceId, setServiceId] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 1, 17));
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const [location, setLocation] = useState('');
  const [requestNote, setRequestNote] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    return [...Array(firstDay).fill(null), ...Array.from({ length: totalDays }, (_, i) => i + 1)];
  }, [currentDate]);

  const changeMonth = (offset) => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + offset)));
  const handleYearChange = (e) => setCurrentDate(new Date(currentDate.setFullYear(parseInt(e.target.value))));

  const isSelected = (day) => day === selectedDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear();
  const handleConfirmBooking = async () => {
    console.log('LOGS', serviceData);

    if (!selectedDate || !selectedTime) {
      toast.error("Please select date and time");
      return;
    }

    setIsLoading(true);

    const bookingData = {
      serviceId: serviceData._id,
      Date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      location,
      requestNote,
      fullName,
      email: username,
      phone
    };

    const result = await requestService(bookingData);

    setIsLoading(false);

    if (result?.success) {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsLoading(false);
  };

  return (
    <>
      <ConfirmationModal
        isOpen={modalOpen}
        isLoading={isLoading}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onClose={handleCloseModal}
      />

      <ToastContainer />

      <div className="max-w-8xl mx-auto p-4 bg-primary p-10 space-y-20 px-componentPadding">


        <section className="border border-universal rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 font-bold">
            <CalendarIcon size={18} /> <span>Select Date</span>
          </div>

          <div className="flex items-center justify-between mb-6 px-2">
            <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-universal rounded-full transition-colors">
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2 items-center">
              <span className="font-bold text-lg">{months[currentDate.getMonth()]}</span>
              <select value={currentDate.getFullYear()} onChange={handleYearChange} className="font-bold text-lg bg-transparent border-none focus:ring-0 cursor-pointer">
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>

            <button onClick={() => changeMonth(1)} className="p-2 hover:bg-universal rounded-full transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} className="text-xs font-semibold text-hard-gray py-2">{d}</div>)}
            {daysInMonth.map((day, idx) => (
              <div key={idx} className="aspect-square flex items-center justify-center">
                {day && (
                  <button
                    onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                    className={`w-20 h-10 rounded-xl text-sm transition-all flex items-center justify-center ${isSelected(day) ? 'bg-secondary text-primary shadow-lg' : 'bg-soft-gray text-hard-gray'}`}
                  >
                    {day}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="bg-small-soft-blue text-secondary p-3 rounded-xl text-xs font-medium border border-soft-small-soft-blue">
            Selected Date: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>setServiceId
        </section>

        <section className="border border-universal rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 font-bold text-gray-800">
            <Clock size={18} /> <span>Select Time (08:00 AM - 18:00 PM)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'].map(time => (
              <button key={time} onClick={() => setSelectedTime(time)}
                className={`py-3 text-xs font-medium rounded-xl border transition-all ${selectedTime === time ? 'bg-secondary text-primary border-secondary shadow-md' : 'border-universal text-hard-gray hover:border-sky-blue'}`}
              >
                {time}
              </button>
            ))}
          </div>
          <div className="mt-4 bg-soft-green text-hard-green p-3 rounded-xl text-xs font-medium">
            Selected Time: {selectedTime}
          </div>
        </section>


        <section className="max-w-8xl border border-universal rounded-2xl p-6 shadow-sm space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold flex items-center gap-2"><MapPin size={14} /> Service Location</label>
            <input type="text" placeholder="KG 8 St Remera-Kabeza" value={location} onChange={e => setLocation(e.target.value)} className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold flex items-center gap-2"><MessageSquare size={14} /> Additional Notes</label>
            <textarea rows="3" placeholder="Add any special requests or details..." value={requestNote} onChange={e => setRequestNote(e.target.value)} className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
          </div>

          <div className="pt-4 border-t border-universal">
            <h3 className="text-sm font-bold flex items-center gap-2 mb-4"><Phone size={14} /> Your Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 mb-4 text-[10px] uppercase tracking-wider text-hard-gray font-bold"><User size={14} />Full Name</label>
                <input type="text" placeholder="John Doe" value={fullName} onChange={e => setFullName(e.target.value)} className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 mb-4 text-[10px] uppercase tracking-wider text-hard-gray font-bold"><Mail size={14} />Email Address</label>
                <input type="email" placeholder="john@example.com" value={username} onChange={e => setUsername(e.target.value)} className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-hard-gray font-bold"><Phone size={14} />Phone Number</label>
              <input type="text" placeholder="+250 788 888 888" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-3 universal border border-universal rounded-xl text-sm focus:ring-2 ring-soft-small-soft-blue outline-none" />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => navigate('/available-services')}
              className="flex-1 py-4 border border-universal rounded-2xl font-bold text-sm hover:universal transition-colors"
            >
              Cancel
            </button>

            <button
              onClick={handleConfirmBooking}
              disabled={isLoading}
              className="flex-1 py-4 bg-secondary text-primary rounded-2xl font-bold text-sm hover:bg-sky-blue shadow-xl shadow-soft-small-soft-blue transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookingSystem;