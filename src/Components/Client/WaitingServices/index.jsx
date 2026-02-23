/** @format */

import React, { useState } from 'react';
import Paragraphy from '../../Shared/Title';
import DashboardNav from '../../Shared/DashboardNav';
import Sidebar from '../../Shared/Sidebar';
import { WaitingServices } from './WaitingServices';
import DashboardSearch from '../../Shared/DashboardSearch';

export function WaitingSevices() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className='flex flex-col h-screen bg-universal overflow-hidden '>
      <DashboardNav />

      <div className='flex flex-1 overflow-hidden relative'>
        {isExpanded && (
          <div
            className='fixed inset-0 bg-black/50 z-20 xl:hidden transition-opacity'
            onClick={() => setIsExpanded(false)}
          />
        )}

        <div className='fixed inset-y-0 left-0 z-50 xl:relative'>
          <Sidebar
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>

        <main className='flex-1 pl-20 overflow-y-auto transition-all duration-300'>
          <div className='px-8 md:px-0 pt-20 md:space-y-1 '>
            <Paragraphy
              highlight={'Waiting Services'}
              description={
                'Quick overview of services the client has requested and is awaiting.'
              }
            />
          </div>

          <div className='px-8 md:px-0 md:pr-14 py-10 w-[350px] md:w-full'>
            <DashboardSearch />
          </div>
          <div className='ml-8 md:ml-0 overflow-y-auto'>
            <WaitingServices width={isExpanded == true ? '1530px' : '1680px'} />
          </div>
        </main>
      </div>
    </div>
  );
}
