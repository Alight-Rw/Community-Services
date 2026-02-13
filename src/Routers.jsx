/** @format */

import { HomePage } from './Pages/Client/Home';
import Authentication from './Pages/Auth';
import { ServicePage } from './Pages/Client/Service';
import { WorkGallery } from './Pages/Client/Gallery';
import { ShowOuter } from './Components/Client/ShowOuter';
import { DashboardClientPage } from './Pages/Client/DashboardClient';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProviderDashboardPage } from './Pages/Provider';
import ConfirmBooking from './Components/Client/ClientDashboard/BookingConfirmation/ConfirmBooking';


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
            path='service'
            element={<ServicePage />}
          />
          <Route
            path='gallery'
            element={<WorkGallery />}
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
        <Route path="dashboard" element={<DashboardClientPage/>}/>
        <Route path="provider-dashboard" element={<ProviderDashboardPage/>}/>
        <Route path="/booking" element={<ConfirmBooking />} />
      </Routes>
    </BrowserRouter>
  );
}
