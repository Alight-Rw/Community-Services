import StatusCard from "./StatusCard";
import Paragraphy from "../../Shared/Title";
import ServicesStatics from "./ServicesStatics";
import { ProfileSection } from "./ProfilSection";
import DashboardNav from "../../Shared/DashboardNav";



export function Dashboard() {
  return (
    <div className="pt-20 bg-universal">
      <DashboardNav />
      <Paragraphy highlight={"Dashboard"} title={"Overview"} description={ "Quick summary of key metrics, recent activities, and service performance" } />
      <StatusCard />
      <ServicesStatics />
      <ProfileSection />
    </div>
  );
}
