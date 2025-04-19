import { useState } from 'react';

const steps = [
  {
    title: "Budgeting Basics",
    description: "Learn how to plan your monthly budget 💰",
  },
  {
    title: "Paying Bills",
    description: "Understand how utility bills work and when to pay them 📅",
  },
  {
    title: "Smart Shopping",
    description: "Make smart choices while spending 🛒",
  },
  {
    title: "Subscriptions",
    description: "Track and manage monthly subscriptions 📦",
  },
  {
    title: "Home Insurance",
    description: "Why and how to insure your home 🏠",
  },
];

export default function HomeCards() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < steps.length - 1) setIndex(index + 1);
  };

  const handleBack = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="min-h-[91vh] flex flex-col items-center justify-center bg-[#F9F7F3] px-4">
      <h1 className="text-3xl font-bold text-[#FF9000] mb-6">🏡 Home Learning Path</h1>

      {/* Card */}
      <div className="w-[320px] bg-white shadow-lg rounded-xl border-t-4 border-[#FF9000] p-6 text-center">
        <h2 className="text-xl font-bold mb-2">{steps[index].title}</h2>
        <p className="text-gray-600">{steps[index].description}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-6">
        <button
          onClick={handleBack}
          className={`px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 transition ${
            index === 0 && 'opacity-50 cursor-not-allowed'
          }`}
          disabled={index === 0}
        >
          ◀ Back
        </button>
        <button className="px-4 py-2 rounded bg-[#FF9000] text-white hover:bg-orange-500 transition">
          🎮 Play
        </button>
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 transition ${
            index === steps.length - 1 && 'opacity-50 cursor-not-allowed'
          }`}
          disabled={index === steps.length - 1}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
