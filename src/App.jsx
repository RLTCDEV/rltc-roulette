import React from 'react';
import logo from '/spin-logo.png';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-8">
      <h1 className="text-4xl font-bold">🎰 RLTC Roulette</h1>
      <img src={logo} alt="Spin Logo" className="w-32 animate-spin-slow" />
      <div className="grid grid-cols-2 gap-4 max-w-md text-left">
        <div className="bg-gray-800 p-4 rounded-xl shadow">Burned: <b>2.45M RLTC</b></div>
        <div className="bg-gray-800 p-4 rounded-xl shadow">Total Spins: <b>6,192</b></div>
        <div className="bg-gray-800 p-4 rounded-xl shadow">Next Burn At: <b>0</b></div>
        <div className="bg-gray-800 p-4 rounded-xl shadow">Remaining to 10M Burn: <b>7.55M</b></div>
      </div>
    </div>
  );
}
