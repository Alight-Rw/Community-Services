import { useEffect, useState } from "react";
import { APIsRequestService } from "../Services/APIsRequestService";
import { toast } from "react-toastify";

export const useGetClientRequestedServices = ({ status }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRequestedServices = async () => {
      try {
        setLoading(true);

        const response = await APIsRequestService.GetRequestedServicesAPI(status)
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

    getRequestedServices();
  }, []);

  return { data, loading };
};


export const useGetProviderRequestedServices = ({ status }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRequestedServices = async () => {
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

    getRequestedServices();
  }, [status]);

  return { data, loading };
};


export const useGetService = () => {
  const [items, setItems] = useState([])
   const[loading,setLoading]=useState(false)
  

  useEffect(() => {
    const fecthServices = async () => {
       setLoading(true)
      const response = await APIsRequestService.GetServicesAPI()
      const data = await response.json()
      if (!response.ok) {
        setLoading(false)
        return toast.error(data.message)
      }
      setItems(data)
         setLoading(false)
    }
    fecthServices()
  }, [])
  return { items ,loading}
}