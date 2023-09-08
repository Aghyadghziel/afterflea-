"use client";
import React, { useEffect } from "react";

const BubblyButton = ({ className }) => {
  const animateButton = (e) => {
    e.preventDefault();

    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(() => {
      e.target.classList.remove("animate");
    }, 700);
  };

  useEffect(() => {
    const bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (let i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener("click", animateButton, false);
    }

    return () => {
      for (let i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].removeEventListener("click", animateButton, false);
      }
    };
  }, []);

  return (
    <button className={`bubbly-button ${className || ""}`}>Click me!</button>
  );
};

export default BubblyButton;
