import React, { useState } from "react";

function Chatbot() {
  const [conversation, setConversation] = useState([]);

  function handleNewUserMessage(message) {
    setConversation([...conversation, { text: message, user: true }]);
    // Here you can add code to handle the chatbot's response to the user's message
  }

  return (
    <div>
      <h1>Chatbot</h1>
      <div>
        {conversation.map((msg, i) => (
          <div key={i}>
            {msg.user ? "User: " : "Chatbot: "}
            {msg.text}
          </div>
        ))}
      </div>
      <input type="text" placeholder="Type your message" />
      <button onClick={() => handleNewUserMessage("Hello!")}>Send</button>
    </div>
  );
}

export default Chatbot;
