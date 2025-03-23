'use client';
import { useState, useEffect } from 'react';
import './terminal.css';

export default function TerminalWindows() {
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
    <div className="terminal-grid">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
          <span className="terminal-name">token_info.sh</span>
        </div>
        
        <div className="terminal-content">
          <div className="command">
            <span>$ ./describe_token.sh</span>
          </div>
          <div className="response">
            Token: CA
          </div>
          <div className="response">
            Description: Access token for underground network
          </div>
          <div className="response">
            Holders gain access to secure AI chat channels
          </div>
          <div className="response">
            Minimum threshold: 1,000,000 tokens
          </div>
          
          <div className="command" style={{ marginTop: '1rem' }}>
            <span>$ ./check_status.sh</span>
          </div>
          <div className="response">
            Status: OPERATIONAL
          </div>
          <div className="response">
            Network: SECURE
          </div>
          <div className="response">
            Users: ACTIVE
          </div>
          
          <div className="terminal-cursor">
            <span className="command-prompt">$ </span>
            <span style={{ opacity: showCursor ? 1 : 0 }}>_</span>
          </div>
        </div>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
          <span className="terminal-name">token_details.sh</span>
        </div>
        
        <div className="terminal-content">
          <div className="command">
            <span>$ ./token_details.sh --verbose</span>
          </div>
          <div className="response">
            TOKEN_ADDRESS: CA
          </div>
          <div className="response">
            NETWORK: Solana
          </div>
          <div className="response">
            TYPE: SPL
          </div>
          <div className="response">
            MIN_AMOUNT: 100000
          </div>
          <div className="response">
            ACCESS_LEVEL: FULL
          </div>
          
          <div className="command" style={{ marginTop: '1rem' }}>
            <span>$ ./verify_token.sh</span>
          </div>
          <div className="response">
            Connect wallet to verify holdings...
          </div>
          
          <div className="terminal-cursor">
            <span className="command-prompt">$ </span>
            <span style={{ opacity: showCursor ? 1 : 0 }}>_</span>
          </div>
        </div>
      </div>
    </div>
  );
} 