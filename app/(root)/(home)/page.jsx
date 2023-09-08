"use client";
import React from "react";
import ChatComponent from "../../../components/chat";
import BubblyButton from "../../../components/button";

const Root = () => {
  return (
    <>
      <div className="h-screen custom-image relative">
        <h1 className="text-4xl sm:text-6xl z-10 main-text">AfterFlea</h1>
      </div>
      <div className=" bg-gray-900 h-screen relative">
        <ChatComponent />
      </div>
    </>
  );
};

export default Root;
