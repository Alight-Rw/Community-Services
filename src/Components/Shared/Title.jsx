import React from 'react'

const Paragraphy = ({ highlight, title, description }) => {
  return (
    <div className="md:px-0 pt-4 ">
      <h2 className="font-bold text-[16px] sm:text-[20px] md:text-[24px]">
        <span className="underline">{highlight}</span> {title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg mt-2 w-[300px] md:w-full">
        {description}
        
      </p>
    </div>
  )
}

export default Paragraphy
