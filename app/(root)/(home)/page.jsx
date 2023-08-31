"use client";
import ChatComponent from "../../../components/chat";

const Root = () => {
  return (
    <>
      <div className="h-screen custom-image relative">
        <h1 className="text-4xl sm:text-6xl z-10">AfterFlea</h1>
      </div>
      <div className="chat-image h-screen relative">
        <ChatComponent />
      </div>
    </>
  );
};

export default Root;
