"use client";
import React from "react";

const BackgroundStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
        />
      ))} */}
    </div>
  );
};

export default BackgroundStars;
