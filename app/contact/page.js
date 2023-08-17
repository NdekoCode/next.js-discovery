"use client";
import { useMemo, useState } from "react";
import useAppContext from "../context/theme";
const contact = () => {
  const [number, setNumber] = useState(1);
  const [letter, setLetter] = useState(null);
  const increment = () => {
    setNumber((s) => s + 1);
  };
  const generateRandomNumber = () => {
    for (let i = 0; i < 2_000_000_000; i++) {}
    return number * Math.random();
  };
  const handleChange = (evt) => {
    console.log(evt.target.value);
    setLetter(evt.target.value);
  };
  const value = useMemo(() => generateRandomNumber(), [number]);
  const { toggleTheme } = useAppContext();
  return (
    <div>
      <div className="py-3">
        <h1>Nous contacter</h1>
        <button class="btn" onClick={toggleTheme}>
          Changer le background
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button class="btn" onClick={increment}>
          Increment
        </button>
        <p>Number {number}</p>
        <p>{value}</p>
      </div>
      <div className="flex items-center gap-3 py-3">
        <input type="text" value={letter} onChange={handleChange} />
        {letter}
      </div>
    </div>
  );
};
export default contact;
