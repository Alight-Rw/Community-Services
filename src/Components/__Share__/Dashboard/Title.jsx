import React from 'react'

const Paragraphy = ({ highlight, title, description }) => {
  return (
    <div className="sm:ml-8 md:ml-12 lg:ml-[58px] px-4 sm:px-0 pt-4">
      <h2 className="font-bold text-[8px] sm:text-[12px] md:text-[18px]">
        <span className="underline">{highlight}</span> {title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg mt-2">
        {description}
        
      </p>
    </div>
  )
}

export default Paragraphy
