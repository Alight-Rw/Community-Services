/** @format */

import { HomePage } from './Pages/Home';
import Authentication from './Pages/Auth';
import { ServicePage } from './Pages/Service';
import { WorkGallery } from './Pages/Gallery';
import { SowOuter } from './Components/ShowOuter';
import {  DashboardPage } from './Pages/Dashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<SowOuter />}
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
        <Route path="dashboard" element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
