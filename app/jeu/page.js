"use client";
import { useEffect, useState } from "react";
const jeu = () => {
  const [count, setCounter] = useState(0);
  const increment = () => setCounter((count) => count + 1);
  const decrement = () => setCounter((count) => (count >= 1 ? count - 1 : 0));
  useEffect(() => {
    const timer = window.setInterval(() => {
      console.log("Is mounted");
      increment();
    }, 1000);
    return () => {
      console.log(timer);
      window.clearInterval(timer);
      console.log("Is unmounted");
    };
  }, []);
  return (
    <main>
      <div className="max-w-lg mx-auto custom-number-input">
        <h1>Page de jeux</h1>
        <label
          htmlFor="custom-input-number"
          className="w-full text-sm font-semibold text-gray-700"
        >
          count Input
        </label>
        <div className="relative flex flex-row w-full h-10 mt-1 bg-transparent rounded-lg">
          <button
            onClick={decrement}
            className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className="flex items-center w-full font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
            name="custom-input-number"
            defaultValue={count}
          />
          <button
            onClick={increment}
            className="w-20 h-full text-gray-600 bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </main>
  );
};
export default jeu;
