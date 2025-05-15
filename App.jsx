
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import spinLogo from "./spin-logo.png";
import "./App.css";

const numbers = Array.from({ length: 38 }, (_, i) => {
  if (i === 37) return "00";
  return i.toString();
});

export default function App() {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [history, setHistory] = useState([]);
  const [burnedTotal, setBurnedTotal] = useState(0);
  const [remainingTo10M, setRemainingTo10M] = useState(10000000);

  useEffect(() => {
    const interval = setInterval(() => {
      const result = numbers[Math.floor(Math.random() * numbers.length)];
      setCurrentNumber(result);
      setHistory(prev => {
        const newHistory = [result, ...prev];
        return newHistory.slice(0, 20);
      });

      if (result === "0" || result === "00") {
        const burnRate = burnedTotal >= 10000000 ? 0.0003 : 0.00015;
        const burnedAmount = burnRate * 1000000000;
        setBurnedTotal(prev => prev + burnedAmount);
        setRemainingTo10M(prev => Math.max(0, prev - burnedAmount));
      }
    }, 120000);

    return () => clearInterval(interval);
  }, [burnedTotal]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black text-white p-6 relative overflow-hidden">
      <img src={spinLogo} alt="$SPIN Logo" className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 opacity-20 pointer-events-none" />

      <h1 className="text-5xl font-extrabold text-center mb-6 text-yellow-400 drop-shadow-md">
        🎰 RLTC Roulette
      </h1>

      <section className="flex flex-col items-center gap-4">
        <motion.div
          className="w-60 h-60 border-[10px] border-yellow-400 rounded-full flex items-center justify-center text-3xl font-bold bg-gradient-to-tr from-red-700 via-black to-red-700 shadow-2xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        >
          🎯
        </motion.div>
        <p className="text-2xl font-bold">Result: <span className="text-green-400">{currentNumber}</span></p>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/70 border-4 border-yellow-500 rounded-xl p-4">
          <h2 className="text-lg font-semibold text-yellow-300 mb-2">🟢 Last 20 Spins</h2>
          <div className="flex flex-wrap gap-2">
            {history.map((num, idx) => (
              <div key={idx} className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center font-bold">
                {num}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/70 border-4 border-yellow-500 rounded-xl p-4">
          <h2 className="text-lg font-semibold text-yellow-300 mb-2">🔥 Total Burned</h2>
          <p className="text-3xl text-red-400 font-bold">{burnedTotal.toLocaleString()} RLTC</p>
        </div>

        <div className="bg-black/70 border-4 border-yellow-500 rounded-xl p-4">
          <h2 className="text-lg font-semibold text-yellow-300 mb-2">🎯 Until 10M Burn</h2>
          <p className="text-3xl text-blue-300 font-bold">{remainingTo10M.toLocaleString()} RLTC</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-yellow-300 mb-2">💬 Live Chat</h2>
        <div className="h-48 bg-black/60 border border-yellow-500 rounded-lg p-4 overflow-y-auto">
          <p className="italic text-sm text-gray-400">(Chat integration coming soon...)</p>
        </div>
      </section>
    </main>
  );
}
