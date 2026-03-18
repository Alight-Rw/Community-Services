import { useEffect, useState } from "react";
import { APIsRequestService } from "../Services/APIsRequestService";
import { toast } from "react-toastify";

export const useProfile = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);

        const response = await APIsRequestService.GetProfileAPI();
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

    getProfile();
  }, []);

  return { data, loading};
};