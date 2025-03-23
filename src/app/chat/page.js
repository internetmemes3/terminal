'use client';
import { useState, useEffect, useRef } from 'react';
import '../terminal.css';
import './chat.css';

export default function ChatPage() {
  const [messages, setMessages] = useState([

  ]);
  const [message, setMessage] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const messageInputRef = useRef(null);
  

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: 'user',
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit', 
          hour12: true 
        }),
        content: message,
        reactions: {}
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  useEffect(() => {
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
  }, []);
  
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
        </div>
        <div className="chat-title">secure_channel.sh</div>
      </div>
      
      <div className="chat-title-section">
        <h1>SECURE CHANNEL</h1>
        <div className="command-line">$ ./encrypted_comms.sh --e2e</div>
      </div>
      
      <div className="chat-messages">
        
        
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <div className="message-avatar">
              {msg.user === 'Tommy' ? (
                <div className="avatar avatar-t">T</div>
              ) : (
                <div className="avatar avatar-img">
                  <img src="/avatar-placeholder.png" alt={msg.user} />
                </div>
              )}
            </div>
            <div className="message-content">
              <div className="message-header">
                <span className="message-user">{`> ${msg.user}`}</span>
                <span className="message-time">{msg.time}</span>
              </div>
              <p className="message-text">{msg.content}</p>
              <div className="message-actions">
                <button className="reply-button">Reply</button>
                <div className="reaction-buttons">
                  {Object.entries(msg.reactions).map(([emoji, count]) => (
                    <button key={emoji} className="reaction-button">
                      <span className="emoji">{emoji}</span>
                      <span className="count">{count}</span>
                    </button>
                  ))}
                </div>
                <button className="add-reaction-button">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="chat-input">
        <span className="input-prompt">$</span>
        <input
          ref={messageInputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="echo &quot;message&quot; > channel"
          className="message-input"
        />
        <button 
          className="send-button"
          onClick={handleSendMessage}
        >
          <svg viewBox="0 0 24 24" className="send-icon">
            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </button>
      </div>
    </div>
  );
} 