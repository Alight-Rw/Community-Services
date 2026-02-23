import React from 'react'

const RecentServicesTab = () => {
  return (
    <div className=' w-full '>
     <h1 className="text-secondary font-bold text-5xl mb-3 px-2 ">
              Recent Activities
            </h1>
            <div className="grid grid-cols-5 text-2xl text-secondary ">
              <h2 className='underline px-9'>Available Services</h2>
               <h2>Requested Services</h2>
                <h2>Waiting Services</h2>
                 <h2>Completed Services</h2>
                 <h2 className='px-1'>Rejected Services</h2>
                  
            </div> 
    </div>
  )
}

export default RecentServicesTab
