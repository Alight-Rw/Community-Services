import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const Spinner = ({ 
  size = 20, 
  color = "blue", 
  loading = true 
}) => {
  return (
    <div className="flex items-center justify-center">
      <ClipLoader 
        color={color} 
        loading={loading} 
        size={size} 
        speedMultiplier={0.8}
      />
    </div>
  );
};

export default Spinner;