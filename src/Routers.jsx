/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authentication from './Pages/Auth';
import { HomePage } from './Pages/Client/Home';
import { ServicePage } from './Pages/Client/Service';
import { WorkGallery } from './Pages/Client/Gallery';
import { ShowOuter } from './Components/Client/ShowOuter';
import { DashboardClientPage } from './Pages/Client/Dashboard';

import ConfirmBookingPage from './Pages/Client/Booking';
import { DashboardPage } from './Pages/Provider/Dashboard';

import Contact from './Pages/Client/Contact';
import { RequestedServicesPage } from './Pages/Client/RequestedSevices';
import { WaitingServicesPage } from './Pages/Client/WaitingServices';
import { CompletedServicesPage } from './Pages/Client/CompleteServices';
import { RejectedServicesPage } from './Pages/Client/RejectedService';
import { SettingsPage } from './Pages/Client/Setting';



export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<ShowOuter />}
        >
          <Route
            index
            element={<HomePage />}
          />

          <Route
            path='home'
            element={<HomePage />}
          />
          <Route
            path='available-services'
            element={<ServicePage />}
          />
          <Route
            path='work-gallery'
            element={<WorkGallery />}
          />
           <Route
          path='contact-us'
          element={<Contact/>}
        />
        </Route>

         <Route
          path='login'
          element={<Authentication/>}
        />
        
         <Route
          path='register'
          element={<Authentication/>}
        />
         <Route
          path='change-password'
          element={<Authentication/>}
        />

      
         <Route
          path='account-verified'
          element={<Authentication/>}
        />
        <Route
          path='resend-password'
          element={<Authentication/>}
        />

        <Route path="/booking" element={<ConfirmBookingPage />} />
        <Route path="dashboard" element={<DashboardClientPage/>}/>
        <Route path="requested-services" element={<RequestedServicesPage/>}/>
         <Route path="waiting-services" element={<WaitingServicesPage/>}/>
          <Route path="completed-services" element={<CompletedServicesPage/>}/>
           <Route path="rejected-services" element={<RejectedServicesPage/>}/>
           <Route path="settings" element={<SettingsPage/>}/>


        <Route path="provider" element={<Authentication/>}/>
        <Route path="provider-dashboard" element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
