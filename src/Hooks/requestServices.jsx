import { APIsRequestService } from "../Services/APIsRequestService";
import { toast } from "react-toastify";

export const useRequestService = () => {

  const requestService = async (requestServiceData) => {
    try {
      const response = await APIsRequestService.requestedServicesIP(requestServiceData);
      const data = await response.json();
      console.log(data)
      if (!response.ok) {
        toast.error(data.message || "Request failed");
        return;
      }

      toast.success(data.message || "Success");

    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return { requestService };
};