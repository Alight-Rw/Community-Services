import { toast } from "react-toastify";
import { APIsRequestService } from "../Services/APIsRequestService";

export const useRequestService = () => {

  const requestService = async (requestServiceData) => {
    try {
      const response = await APIsRequestService.requestedServicesIP(requestServiceData);
      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        toast.error(data.message || "Request failed");
        return { success: false, data }; 
      }

     
      return { success: true, data }; 

    } catch (error) {
      toast.error("Something went wrong");
      return { success: false };
    }
  };

  return { requestService };
};