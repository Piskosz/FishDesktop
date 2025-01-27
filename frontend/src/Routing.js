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
import Wetter from './Page/Pogoda/Wetter';
import Notes from './Page/Notes/Notes';
import Calendar from './Page/Callendar/Callendar';
import BialaPodlaska from './Page/PZW/Okregi/BialaPodlaska/BialaPodlaska';
import Bialystok from './Page/PZW/Okregi/Bialystok/Bialystok';
import Bydgoszcz from './Page/PZW/Okregi/Bydgoszcz/Bydgoszcz';
import Chelm from './Page/PZW/Okregi/Chelm/Chelm';
import Ciechanow from './Page/PZW/Okregi/Ciechanow/Ciechanow';
import Czestochowa from './Page/PZW/Okregi/Czestochowa/Czestochowa';
import Elblag from './Page/PZW/Okregi/Elblag/Elblag';
import Gdansk from './Page/PZW/Okregi/Gdansk/Gdansk';
import DolnoSlaskie from './Page/Commercial/Kommercje/DolnoSlaskie/DolnoSlaskie';
import BobrowaPrzystan from './Page/Commercial/Kommercje/DolnoSlaskie/BobrowaPrzystan/BobrowaPrzystan';
import CastleLakes from './Page/Commercial/Kommercje/DolnoSlaskie/CastleLakes/CastleLakes';
import PodSilosami from './Page/Commercial/Kommercje/DolnoSlaskie/PodSilosami/PodSilosami';
import RekreacyjnePrzemkow from './Page/Commercial/Kommercje/DolnoSlaskie/RekreacyjnePrzemkow/RekreacyjnePrzemkow';
import KujawskoPomorskie from './Page/Commercial/Kommercje/KujawskoPomorskie/KujawskoPomorskie';
import Niewiescin from './Page/Commercial/Kommercje/KujawskoPomorskie/Niewiescin/Niewiescin';
import ParadiseCarpLake from './Page/Commercial/Kommercje/KujawskoPomorskie/ParadiseCarpLake/ParadiseCarpLake';
import StawyDylewskie from './Page/Commercial/Kommercje/KujawskoPomorskie/StawyDylewskie/StawyDylewskie';
import LodzkieCom from './Page/Commercial/Kommercje/Lodzkie/Lodzkie';
import Lodzkie from './Page/Commercial/Kommercje/Lodzkie/Lodzkie';
import Lubelskie from './Page/Commercial/Kommercje/Lubelskie/Lubelskie';
import KarperLake from './Page/Commercial/Kommercje/Lodzkie/KarperLake/KarperLake';
import Makary from './Page/Commercial/Kommercje/Lodzkie/Makary/Makary';
import MlynekTuszyn from './Page/Commercial/Kommercje/Lodzkie/MlynekTuszyn/MlynekTuszyn';
import StrongCarpLake from './Page/Commercial/Kommercje/Lodzkie/StrongCarpLake/StrongCarpLake';
import Bobrowisko from './Page/Commercial/Kommercje/Lubelskie/Bobrowisko/Bobrowisko';
import Jezow from './Page/Commercial/Kommercje/Lubelskie/Jezow/Jezow';
import Krzesimow from './Page/Commercial/Kommercje/Lubelskie/Krzesimow/Krzesimow';
import Moszczanka from './Page/Commercial/Kommercje/Lubelskie/Moszczanka/Moszczanka';
import Lubuskie from './Page/Commercial/Kommercje/Lubuskie/Lubuskie';
import CarpShopLakes from './Page/Commercial/Kommercje/Lubuskie/CarpShopLake/CarpShopLake';
import Dabie from './Page/Commercial/Kommercje/Lubuskie/Dabie/Dabie';
import NatanLake from './Page/Commercial/Kommercje/Lubuskie/NatanLake/NatanLake';
import ZaciszeLake from './Page/Commercial/Kommercje/Lubuskie/ZaciszeLake/ZaciszeLake';
import Malopolskie from './Page/Commercial/Kommercje/Malopolskie/Malopolskie';
import Borowa from './Page/Commercial/Kommercje/Malopolskie/Borowa/Borowa';
import EkoLakesWojcina from './Page/Commercial/Kommercje/Malopolskie/EkoLakeWojcina/EkoLakeWojcina';
import EkoLakeWojcina from './Page/Commercial/Kommercje/Malopolskie/EkoLakeWojcina/EkoLakeWojcina';
import FishZone from './Page/Commercial/Kommercje/Malopolskie/FishZone/FishZone';
import KarpMaslomiaca from './Page/Commercial/Kommercje/Malopolskie/KarpMaslomica/KarpMaslomica';
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
    {
      path: '/Wetter',
      element: <Wetter/>
    },
    {
      path: '/Notes',
      element: <Notes/>
    },
    {
      path: '/Callendar',
      element: <Calendar/>
    },  
    {
      path: '/BialaPodlaska',
      element: <BialaPodlaska/>
    },
    {
      path: '/Bialystok',
      element: <Bialystok/>
    },
    {
      path: '/Bydgoszcz',
      element: <Bydgoszcz/>
    },
    {
      path: '/Chelm',
      element: <Chelm/>
    },
    {
      path: '/Ciechanow',
      element: <Ciechanow/>
    },
    {
      path: '/Czestochowa',
      element: <Czestochowa/>
    },
    {
      path: '/Elblag',
      element: <Elblag/>
    },
    {
      path: '/Gdansk',
      element: <Gdansk/>
    },
    {
      path: '/DolnoSlaskie',
      element: <DolnoSlaskie/>
    },
    {
      path: '/BobrowaPrzystan',
      element: <BobrowaPrzystan/>
    },
    {
      path: '/CastleLake',
      element: <CastleLakes/>
    },
    {
      path: '/PodSilosami',
      element: <PodSilosami/>
    },
    {
      path: '/RekreacyjnePrzemkow',
      element: <RekreacyjnePrzemkow/>
    },
    {
      path: '/KujawskoPomorskie',
      element: <KujawskoPomorskie/>
    },
    {
      path: '/Niewiescin',
      element: <Niewiescin/>
    },
    {
      path: '/ParadiseCarpLake',
      element: <ParadiseCarpLake/>
    },
    {
      path: '/StawyDylewskie',
      element: <StawyDylewskie/>
    },
    {
      path: '/Lodzkie',
      element: <Lodzkie/>
    },
    {
      path: '/Lubelskie',
      element: <Lubelskie/>
    },
    {
      path: '/KarperLake',
      element: <KarperLake/>
    },
    {
      path: '/Makary',
      element: <Makary/>
    },
    {
      path: '/MlynekTuszyn',
      element: <MlynekTuszyn/>
    },
    {
      path: '/StrongCarpLake',
      element: <StrongCarpLake/>
    },
    {
      path: '/Bobrowisko',
      element: <Bobrowisko/>
    },
    {
      path: '/jezow',
      element: <Jezow/>
    },
    {
      path: '/krzesimow',
      element: <Krzesimow/>
    },
    {
      path: '/Moszczanka',
      element: <Moszczanka/>
    },
    {
      path: '/Lubuskie',
      element: <Lubuskie/>
    },
    {
      path: '/CarpShopLake',
      element: <CarpShopLakes/>
    },
    {
      path: '/Dabie',
      element: <Dabie/>
    },
    {
      path: '/NatanLake',
      element: <NatanLake/>
    },
    {
      path: '/ZaciszeLake',
      element: <ZaciszeLake/>
    },
    {
      path: '/Malopolskie',
      element: <Malopolskie/>
    },
    {
      path: '/Borowa',
      element: <Borowa/>
    },
    {
      path: '/EkoLakeWojcina',
      element: <EkoLakeWojcina/>
    },
    {
      path: '/FishZone',
      element: <FishZone/>
    },
    {
      path: '/KarpMaslomica',
      element: <KarpMaslomiaca/>
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default Routing;
