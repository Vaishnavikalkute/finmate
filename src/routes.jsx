import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import MapView from './components/Mapview';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/map" element={<MapView />} />
    </Routes>
  );
}
