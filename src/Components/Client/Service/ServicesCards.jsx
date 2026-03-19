import { useEffect, useState } from "react";
import Pagination from "../../Shared/Pagination";
import ServicesPageChild from "./ServicesCardsChild";
import { APIsRequestService } from "../../../Services/APIsRequestService";
import { ToastContainer, toast } from 'react-toastify';

function ServicesPage() {
  const [items,setItems]=useState([])


useEffect(()=>{
  const fecthServices=async()=>{
      const response= await APIsRequestService.GetServicesAPI()
      const data= await response.json()
      console.log(data)
      if(!response.ok){
        return toast.error(data.message)
      }
      setItems(data)
      return toast.success(data.message)
  }
  fecthServices()
},[])
const defaultPhoneNumber='+2507xxxxxxxxx'
const defaultLocation="Musanze"


  return (
    <div className=" min-h-screen py-12 px-6 md:px-12 lg:px-20">
    <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {items?.data?.map((item, index) => (
          <ServicesPageChild
            key={index}
            Img={item.avatar}
            title={item.name}
            ServiceName={item?.category?.categoryName}
            description={item.description}
            place={item.providerId.location || defaultLocation}
            phoneNumber={item.providerId.number || defaultPhoneNumber }
            time={item.timeFrom}
            to={item.timeTo}
            price={item.price}
            available={item.isActive}

          />
        ))}
      </div>
      <Pagination/>
    </div>
  );
}

export default ServicesPage;