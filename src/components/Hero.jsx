
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
    return (
      <div className="text-center py-20 px-4 bg-gradient-to-b from-blue-100 to-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to FinMate 🎯</h1>
        <p className="mb-6 text-lg">Learn Financial Literacy Through Interactive Maps & Quests</p>
        <div className="space-x-4">
          <button className="bg-yellow text-white px-6 py-2 rounded-xl shadow hover:bg-black" onClick={() => navigate("/topic")}>
            Start Adventure
          </button>
          {/* <button className="bg-gray-200 px-6 py-2 rounded-xl hover:bg-gray-300" >
            Explore Map
          </button> */}
        </div>
      </div>
    );
  }
  