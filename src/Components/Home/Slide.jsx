

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "NIYOMUFASHA Alice",
    email: "niyoalice@gmail.com",
    message: "From start to finish, the experience was smooth and professional. The results exceeded expectations, and the attention to detail really stood out.",
    image: "/happyClient1.jpg" 
  },
  {
    id: 2,
    name: "Tyga Brown",
    email: "tygabrown780@gmail.com",
    message: "What impressed us most was how well they understood our goals. Every suggestion felt thoughtful and tailored, and the final outcome was exactly what we hoped for.",
    image: "happyClient2.jpg"
  },
  {
    id: 3,
    name: "Chetan Nada",
    email: "chetan@example.com",
    message: "Deadlines were always met, communication was clear, and the quality of work was outstanding. We felt confident and supported throughout the entire process.",
    image: "happyClient3.jpg"
  },
  {
    id: 4,
    name: "Jackson",
    email: "tij79907@gmail.com",
    message: "We came in with a simple idea and ended up with something even better than we imagined. The dedication and expertise really made the difference.",
    image: "happyClient4.jpg" 
  },
  {
    id: 5,
    name: "John Doe",
    email: "johndoe@gmail.com",
    message: "The value delivered far surpassed the cost. High-quality work, excellent communication, and results we’re proud of.",
    image: "happyClient5.jpg"
  },
  {
    id: 6,
    name: "Tuyikunde Jackson",
    email: "tuyikundejackson74@gmail.com",
    message: "Everything was handled with care and precision, making the whole process incredibly easy for us. We’d happily work together again.",
    image: "happyClient6.jpg"
  }
];

const TestimonialCard = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); 

    return () => clearInterval(slideInterval);
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-componentPadding overflow-hidden bg-white">
      
      
      
      <div className="relative fle flex-col-1   w-full h-auto md:h-[550px] lg:h-[650px] transition-all duration-500">
        
        <div className="
          relative md:absolute lg:left-25 md:top-[15%]  sm:left-1 md:right-20
          w-full md:w-[45%] 
          h-[300px]  md:h-[380px] lg:h-[450px] lg:max-w-2xl
          z-10 transition-all duration-700 ease-in-out order-2 md:order-none
        ">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-full h-full object-cover shadow-xl "
          />
        </div>

        <div className="
          relative md:absolute md:left-[45%] top-0 
          w-full md:w-[55%] 
          h-auto md:h-[380px] lg:h-[480px] lg:max-w-3xl
          z-20 transition-all duration-700 ease-in-out order-1 md:order-none mb-6 md:mb-0
        ">
          <div className="w-full h-full bg-[#CDE3FF] p-5 sm:p-8 lg:p-12 relative flex flex-col justify-between shadow-lg ">
            
            <div className="border border-secondary sm:rounded-2xl h-full p-4 sm:p-8 md:p-10 space-y-4 md:space-y-6 flex flex-col justify-center">
              
              <span className="text-secondary lg:px-10 md:px-10 sm:px-10 text-4xl sm:text-6xl font-serif absolute top-6 sm:top-14 md:top-14 lg:top-14 left-8 leading-none">
                    "
              </span>

              <div className="mt-6">
                <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed px-2 sm:px-4">
                  {testimonials[current].message}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-universal-900 text-base sm:text-xl">{testimonials[current].name}</p>
                <p className="text-universal-300 text-xs sm:text-sm">{testimonials[current].email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center space-x-3 mt-12">
        {testimonials.map((t, index) => (
          <span
            key={t.id}
            className={`h-2 sm:h-3 transition-all duration-500 cursor-pointer  ${
              index === current ? "w-8 sm:w-12 bg-secondary" : "w-3 sm:w-4 bg-gray-500 opacity-20"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard