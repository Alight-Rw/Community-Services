import { useState } from "react";
import Pagination from "../../Shared/Pagination";
import ServicesPageChild from "./ServicesCardsChild";
import Spinner from "../../Shared/Loader";
import { useGetService } from "../../../Hooks/useGetClientRequestedHooks";



function ServicesPage() {
  const {items,loading} = useGetService()
  console.log(items)
  

  return (
    <div className=" min-h-screen py-12 px-6 md:px-12 lg:px-20">
         {loading?(
            <Spinner size={30} color="#3b82f6"/>
          ):(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items?.data?.map((item, index) => (
        
              <ServicesPageChild key={index} serviceData={item} />
        
        ))}
      </div>
      )}
      <Pagination/>
    </div>
  );
}

export default ServicesPage;