"use client";
import ChatComponent from "../../../components/chat";
const Root = () => {
  return (
    <div>
      <div className="h-screen custom-image">
        <h1 className=" text-4xl sm:text-6xl z-10 "></h1>
      </div>
      <div className="">
        <ChatComponent />
      </div>
    </div>
  );
};

export default Root;
