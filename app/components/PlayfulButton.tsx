"use client";

import React, { useState } from "react";

export default function PlayfulButton() {
  // Initialize the "No..." button to the center of the screen
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100); // Adjust 100 to match the button's width
    const y = Math.random() * (window.innerHeight - 50); // Adjust 50 to match the button's height

    setNoButtonPosition({
      top: `${y}px`,
      left: `${x}px`,
    });
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-start pr-24"> {/* Change justify-center to justify-start */}
      {/* Prev button */}
      <a href="/pageTwo" className="button">
        Prev
      </a>

      {/* No button */}
      <button
        className="button bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg absolute"
        style={{
          top: noButtonPosition.top,
          left: noButtonPosition.left,
          transform: "translate(9%, 50%)", // Adjust this to fine-tune the button's position
        }}
        onClick={moveNoButton}
        onMouseEnter={moveNoButton}
      >
        No...
      </button>
    </div>
  );
}