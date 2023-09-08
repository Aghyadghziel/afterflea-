"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    fakeMessage();
  }, []);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async () => {
    if (inputMessage.trim() === "") {
      return;
    }

    const newMessage = {
      content: inputMessage,
      isPersonal: true,
      timestamp: new Date().getTime(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setInputMessage("");

    try {
      const response = await axios.post(
        "https://admin-backend-2imn7pfmma-uc.a.run.app/b2c",
        JSON.stringify({ query: inputMessage }), // Explicitly stringify the payload
        {
          headers: {
            "Content-Type": "application/json", // Set the content type header
          },
        }
      );

      const responseData = response.data;
      console.log("Received response:", responseData);

      const responseMessage = {
        content: responseData,
        isPersonal: false,
        timestamp: new Date().getTime(),
      };

      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const fakeMessage = () => {
    const fakeMessages = [
      "Hello there!",
      "How can I help you?",
      "That sounds interesting!",
    ];

    const fakeMessageIndex = Math.floor(Math.random() * fakeMessages.length);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        content: fakeMessages[fakeMessageIndex],
        isPersonal: false,
        timestamp: new Date().getTime(),
      },
    ]);
  };

  return (
    <div className="chat">
      <div className="chat-title">
        <h1 className=" font-bold">ChatBot</h1>
        <h2>Karlos</h2>
        <figure className={`avatar`}>
          <img
            src="https://img.freepik.com/free-vector/artificial-intelligence-ai-robot-server-room-digital-technology-banner-computer-equipment_39422-768.jpg?w=1060&t=st=1693327593~exp=1693328193~hmac=8e70f8280d384d5e42605c5c89aaa9210dd9686272f222838cb2bb73fc5a7410"
            alt="Avatar"
          />
        </figure>
      </div>
      <div className="messages">
        <div className="messages-content">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message  ${
                message.isPersonal ? "message-personal" : ""
              }`}
            >
              <div className={message.isPersonal ? "hidden" : "avatar"}>
                <img
                  src="https://img.freepik.com/free-vector/artificial-intelligence-ai-robot-server-room-digital-technology-banner-computer-equipment_39422-768.jpg?w=1060&t=st=1693327593~exp=1693328193~hmac=8e70f8280d384d5e42605c5c89aaa9210dd9686272f222838cb2bb73fc5a7410"
                  alt="Avatar"
                />
              </div>
              <div className="message-content">{message.content}</div>
              <div className="timestamp">
                {new Date(message.timestamp).getHours()}:
                {new Date(message.timestamp).getMinutes()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="message-box">
        <textarea
          type="text"
          className="message-input"
          placeholder="Type message..."
          value={inputMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className="message-submit" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
