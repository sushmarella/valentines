"use client"
// pages/page.tsx
import confetti from 'canvas-confetti';
import { useState } from 'react';

const Page: React.FC = () => {
  const [message, setMessage] = useState('');
  const [noClickedFirst, setNoClickedFirst] = useState(false);

  const handleYesClick = () => {
    if (noClickedFirst) {
      setMessage('Good choice, dumbass');
    } else {
      confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 }
      });
      setMessage('');
    }
  };

  const handleNoClick = () => {
    if (!noClickedFirst) {
      setNoClickedFirst(true);
    }
    setMessage('Please try again!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-valentine-pink to-valentine-red p-4 text-center">
      <h1 className="text-4xl font-bold text-valentine-dark mb-8">
        Minu Akinapally, Will You Be My Valentine?
      </h1>
      <img src="/heart.png" alt="Heart" className="w-48 h-48 mb-8 animate-pulse"/>
      <div>
        <button className="text-lg bg-white hover:bg-gray-100 text-valentine-dark font-bold py-2 px-4 rounded-full m-2 transition duration-300 ease-in-out transform hover:scale-110"
                onClick={handleYesClick}>
          Yes!
        </button>
        <button className="text-lg bg-valentine-dark hover:bg-black text-white font-bold py-2 px-4 rounded-full m-2 transition duration-300 ease-in-out transform hover:scale-110"
                onClick={handleNoClick}>
          No
        </button>
        {message && <p className="mt-4 text-lg font-semibold text-white">{message}</p>}
      </div>
    </div>
  );
};

export default Page;
