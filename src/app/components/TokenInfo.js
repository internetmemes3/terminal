'use client';
import { useState, useEffect } from 'react';
import './terminal.css';

export default function TokenInfo() {
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <>
    <div className="subtitle-container">
        <div className="subtitle-line"></div>
        <div className="subtitle">TOKEN VERIFICATION REQUIRED</div>
        <div className="subtitle-line"></div>
      </div>
    <div className="token-info">
      <div className="command">
        <span>$ cat token_info.txt</span>
      </div>

      <div className="response">
        Access restricted to holders of CA
      </div>
      <div className="response">
        Minimum requirement: 1,000,000 tokens
      </div>
      <div className="response">
        Network: Solana
      </div>
      <div className="terminal-cursor">
            <span className="command-prompt">$ </span>
            <span style={{ opacity: showCursor ? 1 : 0 }}>_</span>
          </div>
    </div>
    </>
  );
} 