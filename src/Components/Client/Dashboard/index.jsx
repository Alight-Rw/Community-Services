import StatusCard from "./StatusCard";
import Paragraphy from "../../Shared/Title";
import ServicesStatics from "./ServicesStatics";
import { ProfileSection } from "./ProfilSection";
import DashboardNav from "../../Shared/DashboardNav";
import ServiceTable from "./ServiceTable";



export function Dashboard() {
  return (
    <div className="pt-20 bg-universal">
      <DashboardNav />
      <Paragraphy
        highlight={"Dashboard"}
        title={"Overview"}
        description={
          "Quick summary of key metrics, recent activities, and service performance"
        }
      />
      <StatusCard />
      <ServicesStatics />
      <div className="flex flex-col lg:flex-row gap-8 justify-between px-[20px] md:px-componentPadding lg:px-12 items-center pb-10">
        <div className="w-full lg:w-3/4">
          <ServiceTable />
        </div>
        <div className="w-full lg:w-[24%]">
          <ProfileSection />
        </div>
      </div>
    </div>
  );
}
