import React from "react";
import DashboardNav from "../../../../Components/__Share__/Dashboard/DashboardNav";
import Paragraphy from "../../../../Components/__Share__/Dashboard/Title";
import DashboardSearch from "../content/DashboardSearch";

const RequestedServices = () => {
  const handleFilterChange = (type, value) => {
    console.log("Filter Type:", type);
    console.log("Value:", value);

    
  };

  return (
    
    <div className="pt-20 px-6">


  <DashboardNav />

  <Paragraphy
    highlight="Requested"
    title="Services"
    description="Quick summary of services that have been requested by the client"
  />

  <DashboardSearch
    placeholder="Search Services..."
    onSearch={(value) => handleFilterChange("query", value)}
    onStartDateChange={(date) => handleFilterChange("startDate", date)}
    onEndDateChange={(date) => handleFilterChange("endDate", date)}
  />
</div>

    
  );
};

export default RequestedServices;
