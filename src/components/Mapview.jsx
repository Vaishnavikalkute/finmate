// import { useState } from 'react';
import mapImg from '../assets/map1.png'; // Adjust path as needed
import homeimg from '../assets/home.png'
import glbimg from '../assets/global.png'


export default function MapView() {
  // const [location, setLocation] = useState(null);

  const handleClick = (place) => {
    // setLocation(place);
    console.log("work in progress")
  };

  return (
    <div className="relative w-full h-[91vh] bg-gray-200 overflow-hidden">
      <img src={mapImg} alt="FinMate Map" className="w-full h-full object-fill" />
      {/* Background Map Image */}

      {/* Bank Button */}
      <div
        className="absolute top-[33%]  left-[64%] cursor-pointer"
        onClick={() => handleClick("Home")}
      >

        <img src={homeimg} alt="Home" className="w-15 h-15 object-fit" /> 
      </div>

      {/* School Button */}
      <div
        className="absolute bottom-[100%] left-[10%] cursor-pointer"
        onClick={() => handleClick("Global")}
      >

        <img src={glbimg} alt="Global" className="w-12 h-12 object-fit" /> 
      </div>
    </div>
  );
}
