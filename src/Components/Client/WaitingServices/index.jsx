/** @format */

import React, { useState } from 'react';
import Paragraphy from '../../Shared/Title';
import DashboardNav from '../../Shared/DashboardNav';
import Sidebar from '../../Shared/Sidebar';
import { WaitingServices } from './WaitingServices';
import DashboardSearch from '../../Shared/DashboardSearch';
import { useDebouncedValue } from '../../../Hooks/useDebouncedValue';
import { useDragScroll } from '../../../Hooks/useDragScroll'; 

export function WaitingSevices() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search, 300);
  
  const dragScroll = useDragScroll(); 

  return (
    <div className='dashboard-shell flex flex-col h-screen bg-small-soft-gray overflow-hidden '>
      <DashboardNav
        notificationNumber={4}
        notifications={[
          { id: 1, type: "success", title: "Booking Confirmed", message: "Your service booking for has been confirmed car Wash for tommorrow at", time: "10:00 AM", minutes: "10h ago", isUnread: true },
          { id: 2, type: "accepted", title: "Service Request Accepted", message: "Your blumping service has been accepted by a provider", time: "1h ago", isUnread: true },
          { id: 3, type: "info", title: "Reminder ", message: "Your  home cleaning services is scheduled for today at", minutes: "1h ago", isUnread: true },
          { id: 4, type: "accepted", title: "Service Completed", }
        ]}
      />
      <div className='flex flex-1 overflow-hidden relative'>
        {isExpanded && (
          <div className='fixed inset-0 bg-black/50 z-20 xl:hidden transition-opacity' onClick={() => setIsExpanded(true)} />
        )}
        <div className='fixed inset-y-0 left-0 z-50 xl:relative'>
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>

        <main className="flex-1 pl-20 overflow-y-auto transition-all duration-300">
          <div className="px-8 md:px-0 pt-20 md:space-y-1 ">
            <Paragraphy highlight={'Waiting Services'} description={'Quick overview of services the client has requested and is awaiting.'} />
          </div>

          <div className='px-8 md:px-0 md:pr-14 py-10 w-[350px] md:w-full'>
            <DashboardSearch value={search} onSearch={setSearch} placeholder='Search waiting services...' />
          </div>
          
         
          <div className='px-8 md:px-0 md:pr-14 w-[350px] md:w-full'>
            <div className='overflow-x-auto scrollbar-hidden' {...dragScroll}>
              <WaitingServices
                width={isExpanded == true ? "1530px" : "1680px"}
                search={debouncedSearch}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}