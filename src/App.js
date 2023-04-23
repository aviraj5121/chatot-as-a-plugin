import React, { useState } from 'react';
import Chatbot from './chatbot.js';
import ChatButton from './chatButton.js';
import './App.css';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  function handleToggleChatbot() {
    setShowChatbot(!showChatbot);
  }

  return (
    <div>
      <h1>Chatbot application </h1>

      <ChatButton onClick={handleToggleChatbot} />
      {showChatbot && <Chatbot />}
    </div>
  );
}

export default App;
