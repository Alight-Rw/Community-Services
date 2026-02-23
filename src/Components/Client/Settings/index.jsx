import React, { useState } from "react";
import Paragraphy from "../../Shared/Title";
import DashboardNav from "../../Shared/DashboardNav";
import Sidebar from "../../Shared/Sidebar";
import SettingProfileSection from "./SettingProfileSection";
import { SettingsPage } from "../../../Pages/Client/Setting";
import SettingsCard from "./SettingCards";

export function Settings() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-universal overflow-hidden">
      <DashboardNav />

      <div className="flex flex-1 overflow-hidden relative">
        {isExpanded && (
          <div
            className="fixed inset-0 bg-black/50 z-20 xl:hidden transition-opacity"
            onClick={() => setIsExpanded(false)}
          />
        )}

        <div className="fixed inset-y-0 left-0 z-50 xl:relative">
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>

        <main className="flex-1 pl-20 md:pl-20 overflow-y-auto transition-all duration-300">
          <div className="max-w-[1600px] not-[]:mx-auto py-20 md:space-y-10 ">
            <div className="px-8 md:px-0 **:md:space-y-1 ">
              <Paragraphy
                highlight={"Account Settings"}
                description={
                  "Quick Manage and update your personal account information settings"
                }
              />
            </div>
            <div className="ml-8 md:ml-0">
              <SettingProfileSection />
              <SettingsCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
