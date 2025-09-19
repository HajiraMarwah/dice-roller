import React, { useState } from "react";
import "./DiceRoller.css";

export default function DiceRoller() {
  const [diceValue, setDiceValue] = useState(null);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);

    // Simulate dice roll animation delay
    setTimeout(() => {
      const value = Math.floor(Math.random() * 6) + 1; // 1–6
      setDiceValue(value);
      setRolling(false);
    }, 300);
  };

  return (
    <div className="dice-container">
      <h2> Dice Roller</h2>
      <div className="dice-box">
        {diceValue ? (
          <span className="dice-number">🎲 {diceValue}</span>
        ) : (
          <span className="message">Click to roll!</span>
        )}
      </div>

      <button onClick={rollDice} disabled={rolling} className="dice-button">
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  );
}
