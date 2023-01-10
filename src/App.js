import React, { useState } from "react";
import "./styles.css";

const tasteOfIndia = {
  SouthIndian: [
    { name: "Idli Sambar", rating: "7/10" },
    { name: "Masala Dosa", rating: "9/10" },
    { name: "Hyderabadi Biryani", rating: "9.5/10" }
  ],

  NorthIndian: [
    { name: "Aaloo paratha", rating: "8.5/10" },
    { name: "Chole bhature ", rating: "9/10" },
    { name: "Butter chicken", rating: "9/10" },
    { name: "Lassi", rating: "8.5/10" }
  ],

  NorthWestIndia: [
    { name: "Dal bati churma", rating: "9/10" },
    { name: "Ghevar", rating: "8/10" },
    { name: "Thepla", rating: "8.5/10" },
    { name: "Dhokla", ratings: "8/10" }
  ],

  EastIndia: [
    { name: "momos", rating: "9/10" },
    { name: "Rasgulla", rating: "9/10" },
    { name: "Kathi rolls", rating: "8.5/10" }
  ],

  CentralIndia: [
    { name: "Lithi chokha", rating: "9/10" },
    { name: "Murgh mussalam", rating: "9/10" },
    { name: "seekh kabab", rating: "9.5" }
  ],

  Maharashtrian: [
    { name: "vada pav", rating: "8.5/10" },
    { name: "Pav-bhaji", rating: "9/10" },
    { name: "Puran-Poli", rating: "9.5/10" },
    { name: "shreekhand", rating: "8.5/10" }
  ]
};

export default function App() {
  const [selectTaste, setTaste] = useState("Maharashtrian");

  function tasteClickHandler(cuisine) {
    setTaste(cuisine);
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "#94a3b8",
          padding: "1rem",
          borderRadius: "0.5rem"
        }}
      >
        {" "}
        🍜🥘Taste of India🥗🍹
      </h1>
      <h3>
        {" "}
        Check out the food items from different parts of India.Select region to
        get started.
      </h3>
      <div>
        {Object.keys(tasteOfIndia).map(function (cuisine) {
          return (
            <button
              style={{
                background: "#cbd5e1",
                padding: "1rem",
                cursor: "pointer",
                border: "1px solid black",
                borderRadius: "0.5rem",
                margin: "0.5rem",
                fontFamily: "cursive"
              }}
              onClick={() => tasteClickHandler(cuisine)}
              key={cuisine}
            >
              {cuisine}
            </button>
          );
        })}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {tasteOfIndia[selectTaste].map((cuisine) => (
            <li
              key={cuisine.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {cuisine.name} </div>
              <div style={{ fontSize: "smaller" }}> {cuisine.rating} </div>
            </li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}
