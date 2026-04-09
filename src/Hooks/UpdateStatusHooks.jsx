import { toast } from "react-toastify";
import { APIsRequestService } from "../Services/APIsRequestService";

const statusMap = {
  waiting: "Waitting",
  approve: "Approved",
  complete: "Completed",
  reject: "Rejected",
};

export const handleUpdateStatuses = async (e, id, newStatus, refreshData, note) => {
  if (e && e.preventDefault) e.preventDefault();

  try {
    const mappedStatus = statusMap[newStatus.toLowerCase()];
    if (!mappedStatus) throw new Error("Invalid status");

    
    const response = await APIsRequestService.UpdateStatusAPI(id, mappedStatus, note);

    if (!response.success) {
      return toast.error(response.message || "Failed to update status");
    }

    toast.success(response.message || "Status updated successfully");

    if (refreshData) refreshData();
    return response;

  } catch (error) {
    console.error("Failed to update status:", error);
    toast.error(error.message || "An unexpected error occurred");
  }
};