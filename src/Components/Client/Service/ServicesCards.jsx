
import Pagination from "../../Shared/Pagination";
import ServicesPageChild from "./ServicesCardsChild";

import { useGetService } from "../../../Hooks/useGetClientRequestedHooks";

function ServicesPage() {
  const {items} = useGetService()

  return (
    <div className=" min-h-screen py-12 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items?.data?.map((item, index) => (
          <ServicesPageChild
            key={index}
            Img={item.avatar}
            title={item.name}
            ServiceName={item?.category?.categoryName}
            description={item.description}
            place={item.providerId.location || defaultLocation}
            phoneNumber={item.providerId.phone || defaultPhoneNumber }
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