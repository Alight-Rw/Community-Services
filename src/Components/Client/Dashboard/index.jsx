import { useState } from "react";
import StatusCard from "./StatusCard";
import Paragraphy from "../../Shared/Title";
import ServicesStatics from "./ServicesStatics";
import { ProfileSection } from "./ProfilSection";
import DashboardNav from "../../Shared/DashboardNav";
import Sidebar from "./Sidebar"; 

export function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen bg-universal overflow-hidden flex">

      
      <div
        className={`fixed top-0 left-0 h-full z-40 
        transition-all duration-300
        `}
      >
        <Sidebar  />
      </div>

      
      <div className="flex-1 flex flex-col h-full">

      
        <div className="sticky top-0 z-20 bg-universal flex items-center px-4 h-16">
         
         

          <DashboardNav />
        </div>
        <main
          className={`flex-1 overflow-y-auto transition-all duration-300
          ${isOpen ? "ml-64" : "ml-16"}`}
        >
          <div className="w-full h-full p-4 md:p-8 space-y-8 ">

            <Paragraphy
              highlight="Dashboard"
              title="Overview"
              description="Quick summary of key metrics, recent activities, and service performance"
            />

            <StatusCard />

           
              <div className="lg:col-span-2">
                <ServicesStatics />
              </div>

              <div>
                <ProfileSection />
              </div>
            </div>


        </main>

      </div>
    </div>
  );
}
