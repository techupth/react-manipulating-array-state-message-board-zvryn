import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const deleteMessage = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message Board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <h1>{message}</h1>
            <button
              className="delete-button"
              onClick={() => deleteMessage(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
