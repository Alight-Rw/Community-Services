


import { MapPin, Phone, Clock, CalendarCheck } from "lucide-react";

function ServicesPageChild(Props) {
  return (
    <div className=" p-5 flex flex-col  ">
      
      <div className="w-full h-50  overflow-hidden rounded-t-lg ">
        <img 
          src={Props.Img} 
          className="w-full h-full object-cover" 
          alt={Props.title} 
        />
      </div>

      <div className="flex flex-col flex-grow bg-universal rounded-b-lg px-4 py-5 ">
        <h3 className="text-lg font-bold  mb-2">{Props.title}</h3>
        
        
        <span className="inline-block bg-small-soft-blue text-sky-blue text-xs font-semibold px-4 py-1.5 rounded-full w-fit mb-4">
          {Props.ServiceName}
        </span>

        <p className=" text-hard-gray text-xs font-bold leading-relaxed mb-6">
          {Props.description}
        </p>

       
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-hard-gray">
            <MapPin size={16} className="text-hard-gray" />
            <span className="text-[11px]">{Props.place}</span>
          </div>
          <div className="flex items-center gap-3 text-hard-gray">
            <Phone size={16} className="text-hard-gray" />
            <span className="text-[11px]">{Props.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-3 text-hard-gray">
            <Clock size={16} className="text-hard-gray" />
            <span className="text-[11px] font-medium">{Props.time}</span>
          </div>
        </div>

       
        <div className="mt-auto pt-4 border-t border-hard-gray flex justify-center">
          <button className="flex items-center gap-2 border border-secondary text-sky-blue px-8 py-2 m-4 rounded-full text-xs font-bold hover:bg-small-soft-blue transition-colors">
            <CalendarCheck size={16} />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPageChild;