import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Page/Login/login';
import Registry from './Page/Registry/Registry';
import HomePage from './Page/HomePage/HomePage';
import RemindPassword from './Page/RemindPassword/RemindPassword';
import WaterType from './Page/WaterType/WaterType';
import MapsPZW from './Page/PZW/MapsPZW';
import MapsCommercial from './Page/Commercial/MapsComercial';
import ComPod from './Page/Commercial/ComPod';
const Home = lazy(() => import('./home'));

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    // {
    //     path: '/login',
    //     element: <Login/>
    // },
    {
        path: '/Registry',
        element: <Registry/>
    },
    {
        path: '/HomePage',
        element: <HomePage/>
    },
    {
      path: '/Remind-Password',
      element: <RemindPassword/>
    },
    {
      path: '/WaterType',
      element: <WaterType/>
    },
    {
      path: '/MapsPZW',
      element: <MapsPZW/>
    },
    {
      path: '/MapsCommercial',
      element: <MapsCommercial/>
    },   
     {
      path: '/ComPod',
      element: <ComPod/>
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default Routing;
