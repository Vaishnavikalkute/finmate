import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import MapView from './components/Mapview';
import Topics from './components/topic';
import HomeCards from './components/cardscroll';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/map" element={<MapView />} />
      <Route path="/topic" element={<Topics />} />
      <Route path="/home" element={<HomeCards/>}/>
    </Routes>
  );
}
