import homeimg from '../assets/home.png'
import glbimg from '../assets/global.png'
import { useNavigate } from 'react-router-dom';

export default function Topics() {
    const Navigate=useNavigate()
    return (
      <div className="flex items-center justify-center h-[91vh] bg-black ">
        {/* First Button */}
        <button>
          <img
            src={homeimg}
            alt="Investing"
            className="w-100 hover:scale-105 transition-transform duration-300"
            onClick={()=>Navigate("/home")}
          />
        </button>
  
        {/* Second Button */}
        <button>
          <img
            src={glbimg}
            alt="Saving"
            className="w-100 hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>
    );
  }
  