
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "NIYOMUFASHA Alice",
    email: "niyoalice@gmail.com",
    message: "From start to finish, the experience was smooth, professional, and stress-free. The results exceeded expectations, and the attention to detail really stood out.",
    image: "/happyClient1.png" 
  },
  {
    id: 2,
    name: "Tyga Brown",
    email: "tygabrown780@gmail.com",
    message: "What impressed us most was how well they understood our goals. Every suggestion felt thoughtful and tailored, and the final outcome was exactly what we hoped for.",
    image: "happyClient2.png"
  },
  {
    id: 3,
    name: "Chetan Nada",
    email: "chetan@example.com",
    message: "Deadlines were always met, communication was clear, and the quality of work was outstanding. We felt confident and supported throughout the entire process.",
    image: "happyClient3.png"
  },
  {
    id: 4,
    name: "Jackson",
    email: "tij79907@gmail.com",
    message: "We came in with a simple idea and ended up with something even better than we imagined. The dedication and expertise really made the difference.",
    image: "happyClient4.png" 
  },
  {
    id: 5,
    name: "John Doe",
    email: "johndoe@gmail.com",
    message: "The value delivered far surpassed the cost. High-quality work, excellent communication, and results we’re proud of.",
    image: "happyClient5.png"
  },
  {
    id: 6,
    name: "Tuyikunde Jackson",
    email: "tuyikundejackson74@gmail.com",
    message: "Everything was handled with care and precision, making the whole process incredibly easy for us. We’d happily work together again.",
    image: "happyClient6.png"
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden bg-white">
      
     
     
      <div className="relative max-w-5xl w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] transition-all duration-500">
        
  
        <div className="absolute left-0 top-[20%] w-[50%] h-[250px] sm:h-[300px] md:h-[380px] lg:h-[420px] z-10 transition-all duration-700 ease-in-out">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-full h-full object-cover shadow-xl rounded-2xl"
          />
        </div>

        
        
        <div className="absolute left-[50%] top-0 w-[50%] h-[280px] sm:h-[320px] md:h-[400px] lg:h-[450px] z-20 transition-all duration-700 ease-in-out">
          <div className="w-full h-full bg-light-secondary p-3 sm:p-6 lg:p-10 relative flex flex-col justify-between shadow-lg rounded-[20px] sm:rounded-[30px]">
            
            <div className="border border-secondary rounded-xl sm:rounded-2xl h-full p-3 sm:p-6 md:p-8 space-y-2 sm:space-y-4 md:space-y-6 flex flex-col justify-center">
              
              <span className="text-secondary text-2xl sm:text-5xl font-serif absolute top-4 sm:top-10 left-4 sm:left-10 leading-none">
                 "
              </span>

              <div className="mt-4 sm:mt-6">
                <p className="text-[9px] sm:text-xs md:text-sm lg:text-base font-medium leading-relaxed px-1 sm:px-6">
                  {testimonials[current].message}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-universal-900 text-[10px] sm:text-sm md:text-lg">{testimonials[current].name}</p>
                <p className="text-universal-300 text-[8px] sm:text-xs">{testimonials[current].email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center space-x-2 sm:space-x-3 mt-12 ">
        {testimonials.map((t, index) => (
          <span
            key={t.id}
            className={`h-2 sm:h-3 transition-all duration-500 cursor-pointer rounded-full ${
              index === current ? "w-6 sm:w-10 bg-secondary" : "w-3 sm:w-4 bg-hard-universal opacity-20"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;