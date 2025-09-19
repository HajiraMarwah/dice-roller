import React, { useState } from "react";

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
    }, 300); // Small delay for better UX
  };

  return (
    <div style={styles.container}>
      <h2> Dice Roller</h2>
      <div style={styles.diceBox}>
        {diceValue ? (
          <span style={styles.diceNumber}>🎲 {diceValue}</span>
        ) : (
          <span style={styles.message}>Click to roll!</span>
        )}
      </div>

      <button onClick={rollDice} disabled={rolling} style={styles.button}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  diceBox: {
    width: "100px",
    height: "100px",
    margin: "20px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "2rem",
    background: "#f4f4f4",
    boxShadow: "2px 2px 6px rgba(0,0,0,0.3)",
  },
  diceNumber: {
    fontWeight: "bold",
    fontSize: "2rem",
  },
  message: {
    fontSize: "1rem",
    color: "gray",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
  },
};
