import { useEffect, useState } from "react";
import { APIsRequestService } from "../Services/APIsRequestService";
import { toast } from "react-toastify";

export const useGetProviderRequestedServices = ({ status }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProviderRequestedServices = async () => {
      try {
        setLoading(true);

        const response = await APIsRequestService.GetProviderRequestedServicesAPI(status)
        const result = await response.json();
        if (!response.ok) {
          return toast.error(result.message);
        }

        setData(result);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    getProviderRequestedServices();
  }, [status]);

  return { data, loading };
};