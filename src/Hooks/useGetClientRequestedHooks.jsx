import { useEffect, useState } from "react";
import { APIsRequestService } from "../Services/APIsRequestService";
import { toast } from "react-toastify";
import { normalizeCollectionResponse } from "../Utils/collectionUtils";

export const useGetClientRequestedServices = ({
  status,
  page,
  limit,
  search,
  sort,
} = {}) => {
  const [data, setData] = useState({ data: [], pagination: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refetch = () => setRefreshIndex((current) => current + 1);

  useEffect(() => {
    const getRequestedServices = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await APIsRequestService.GetRequestedServicesAPI(status, {
          page,
          limit,
          search,
          sort,
        });
        const result = await response.json();

        if (!response.ok) {
          setError(result.message || "Failed to fetch requested services");
          return toast.error(result.message);
        }

        const normalized = normalizeCollectionResponse(result);
        setData({
          data: normalized.items,
          pagination: normalized.pagination,
        });
      } catch (err) {
        setError(err.message);
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    getRequestedServices();
  }, [status, page, limit, search, sort, refreshIndex]);

  return { data, loading, error, refetch };
};





export const useGetService = ({
  page,
  limit,
  search,
  serviceName,
  category,
  location,
  sort,
  isActive,
  providerId,
} = {}) => {
  const [items, setItems] = useState({ data: [], pagination: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshIndex, setRefreshIndex] = useState(0);
  const refetch = () => setRefreshIndex((current) => current + 1);
  

  useEffect(() => {
    const fecthServices = async () => {
      setLoading(true);
      setError(null);
      const response = await APIsRequestService.GetServicesAPI({
        page,
        limit,
        search,
        serviceName,
        category,
        location,
        sort,
        isActive,
        providerId,
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Failed to fetch services");
        setLoading(false)
        return toast.error(data.message)
      }
      const normalized = normalizeCollectionResponse(data);
      setItems({
        data: normalized.items,
        pagination: normalized.pagination,
      });
         setLoading(false)
    }
    fecthServices()
  }, [page, limit, search, serviceName, category, location, sort, isActive, providerId, refreshIndex])
  return { items ,loading,error,refetch }
}
