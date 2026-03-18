
import { toast } from "react-toastify";
import { APIsRequestService } from "../../../Services/APIsRequestService";

export const handlegetGallery = async () => {
  try {
    const response = await APIsRequestService.GalleryAPI();
    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message || "Failed to fetch gallery");
      return [];
    }

   
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch gallery:", error);
    toast.error("Failed to fetch gallery");
    return [];
  }
};