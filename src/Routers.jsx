/** @format */

import { HomePage } from './Pages/Home';
import Authantication from './Pages/Auth';
import { ServicePage } from './Pages/Service';
import { WorkGallery } from './Pages/Gallery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SowOuter } from './Components/ShowOuter';
import {  DashboardPage } from './Pages/Dashboard';


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
          path='authantication'
          element={<Authantication/>}
        />
        <Route path="dashboard" element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
