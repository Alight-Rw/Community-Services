/** @format */

import Authentication from './Pages/Auth';
import { HomePage } from './Pages/Client/Home';
import { ServicePage } from './Pages/Client/Service';
import { WorkGallery } from './Pages/Client/Gallery';
import { ShowOuter } from './Components/Client/ShowOuter';
import { DashboardClientPage } from './Pages/Client/Dashboard';

import ConfirmBookingPage from './Pages/Client/Booking';
import { DashboardPage } from './Pages/Provider/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======
import { ProviderDashboardPage } from './Pages/Provider';
import ConfirmBookingPage from './Pages/Client/ConfirmBookingPage';
import RequestedServicesPage from './Pages/Client/RequestedServicesPage';
>>>>>>> 94b6b1b (final codes)



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
        <Route path="/booking" element={<ConfirmBookingPage />} />
<<<<<<< HEAD
        <Route path="provider-dashboard" element={<DashboardPage/>}/>
=======
        <Route path="/requested-services" element={<RequestedServicesPage />} />
        
>>>>>>> 94b6b1b (final codes)
      </Routes>
    </BrowserRouter>
  );
}
