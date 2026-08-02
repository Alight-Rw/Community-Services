import { useEffect, useState } from "react";
import { APIsRequestService } from "../Services/APIsRequestService";
import { toast } from "react-toastify";
import { normalizeCollectionResponse } from "../Utils/collectionUtils";

export const useGetProviderRequestedServices = ({
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
    const getProviderRequestedServices = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await APIsRequestService.GetProviderRequestedServicesAPI(
          status,
          {
            page,
            limit,
            search,
            sort,
          },
        );
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

    getProviderRequestedServices();
  }, [status, page, limit, search, sort, refreshIndex]);

  return { data, loading, error, refetch };
};
