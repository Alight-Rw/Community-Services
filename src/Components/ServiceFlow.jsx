import AvailableServicesIcon from "../assets/icons/available Sevices.png";
import BookServiceIcon from "../assets/icons/book service.png";
import BookingConfirmationIcon from "../assets/icons/booking confirmation.png";
import ServiceExecutionIcon from  "../assets/icons/service execution.png";
import ClientServedIcon from "../assets/icons/client served.png";
import HappyClientIcon from "../assets/icons/happy client.png";

const steps = [
  { id: 1, text: "Available Services", icon: AvailableServicesIcon },
  { id: 2, text: "Book a service", icon: BookServiceIcon },
  { id: 3, text: "Booking Confirmation", icon: BookingConfirmationIcon },
  { id: 4, text: "Service Execution", icon: ServiceExecutionIcon },
  { id: 5, text: "Service served", icon: ClientServedIcon },
  { id: 6, text: "Happy Client", icon: HappyClientIcon },
];

export default function ServiceFlow() {
  return (
    <section className="w-full bg-white py-16 px-0 overflow-hidden">
      <div className="flex flex-nowrap items-start justify-center w-full">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className="flex items-center"
          >
            
            <div className="flex flex-col items-center flex-none">
              
              <div className="
                relative flex justify-center items-center rotate-45 border-2 border-universal bg-white
                w-10 h-10       /* Mobile */
                sm:w-14 sm:h-14   /* Small Tablet */
                md:w-20 md:h-20   /* Tablet */
                lg:w-28 lg:h-28   /* Desktop */
              ">
                <img 
                  src={step.icon} 
                  alt={step.text} 
                  className="-rotate-45 w-1/2 h-1/2 object-contain" 
                />
              </div>

              
              <div className="mt-8 md:mt-10 text-center max-w-[55px] sm:max-w-[80px] md:max-w-[120px]">
                <p className="
                  font-bold text-gray-800 Capitalize leading-tight tracking-tighter
                  text-[7px]       /* Tiny Mobile */
                  sm:text-[9px]     /* Mobile */
                  md:text-[11px]    /* Tablet */
                  lg:text-[13px]    /* Desktop */
                ">
                  {step.text}
                </p>
              </div>
            </div>

            {index !== steps.length - 1 && (
              <div className="
                /* Line dimensions */
                h-[2px] bg-universal self-start opacity-70
                /* Responsive width for 'small line' feel */
                w-4 sm:w-8 md:w-12 lg:w-16 
                /* Centering logic: margin-top is exactly half of the diamond height */
                mt-5        /* half of 10 */
                sm:mt-7     /* half of 14 */
                md:mt-10    /* half of 20 */
                lg:mt-14    /* half of 28 */
              " />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}