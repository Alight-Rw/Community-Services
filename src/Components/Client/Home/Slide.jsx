

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "NIYOMUFASHA Alice",
    email: "niyoalice@gmail.com",
    message: "From start to finish, the experience was smooth and professional. The results and exceeded expectations ",
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
    email: "jackson74@gmail.com",
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
  }, [current]); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8  md:p-15 xl:p-20 overflow-hidden   md:-mt-10  lg:mt-15">
      


      <div className="mt-10 sm:mt-40 md:mt-60 lg:mt-29 w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
        
        
        <div className="w-full h-[350px] md:h-[400px] lg:h-[500px]">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

     
        <div className="relative z-10 w-full bg-[#CDE3FF] flex flex-col justify-center p-6 sm:p-10 lg:p-16 md:-translate-y-50 ">
          
          <div className="border border-secondary rounded-2xl h-full md:h-[400px] p-6 sm:p-8 md:p-10 relative flex flex-col justify-center space-y-4">
            
            <span className="text-secondary text-5xl sm:text-7xl font-serif absolute top-1 left-6 leading-none px-2">
              "
            </span>

            <div className="mt-4 transition-all duration-500">
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                {testimonials[current].message}
              </p>
            </div>

            <div className="text-right pt-4">
              <p className="font-bold text-universal-900 text-base sm:text-xl uppercase tracking-tighter">
                {testimonials[current].name}
              </p>
              <p className="text-universal-300 text-xs sm:text-sm">
                {testimonials[current].email}
              </p>
            </div>
          </div>
        </div>
      </div>

     
     
      <div className="flex justify-center space-x-3  justify-center spaye  ">
        {testimonials.map((t, index) => (
          <button
            key={t.id}
            onClick={() => setCurrent(index)}
            className={`h-2 transition-all duration-500  mt-10 mb-50 sm:mt-14 sm:mb-40 md:mt-8 lg:mt-10 lg:mb-10  ${
              index === current ? "w-12 bg-secondary" : "w-4 h-2 bg-universal"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;