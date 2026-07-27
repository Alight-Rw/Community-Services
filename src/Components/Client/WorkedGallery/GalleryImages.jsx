
import { toast } from "react-toastify";
import { APIsRequestService } from "../../../Services/APIsRequestService";
import { normalizeCollectionResponse } from "../../../Utils/collectionUtils";

export const handlegetGallery = async (params = {}) => {
  try {
    const response = await APIsRequestService.GalleryAPI(params);
    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message || "Failed to fetch gallery");
      return { items: [], pagination: null };
    }

    return normalizeCollectionResponse(data);
  } catch (error) {
    console.error("Failed to fetch gallery:", error);
    toast.error("Failed to fetch gallery");
    return { items: [], pagination: null };
  }
};
