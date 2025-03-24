'use client';
import { useState, useEffect } from 'react';
import '../terminal.css';
import './verify.css';

export default function VerifyPage() {
  const [connecting, setConnecting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      window.location.href = '/boot';
    }, 1500);
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="verify-container">
      <div className="terminal-window verify-terminal">
        <div className="terminal-header">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
          <span className="terminal-name">connect_wallet.sh</span>
        </div>
        
        <div className="terminal-content">
          <div className="authentication-header">
            AUTHENTICATION REQUIRED
          </div>
          
          <div className="command-line">
            $ ./verify_identity.sh --wallet=phantom
          </div>
          
          <div className="instructions-box">
            <div className="instructions-command">
              $ cat instructions.txt
            </div>
            <div className="instructions-content">
              Connect your Phantom wallet to verify
              identity and token holdings.
              Secure authentication required for
              network access.
            </div>
            <div className="terminal-cursor">
            <span className="command-prompt">$ </span>
            <span style={{ opacity: showCursor ? 1 : 0 }}>_</span>
          </div>
          </div>
          
          <button 
            className="connect-button"
            onClick={handleConnect}
            disabled={connecting}
          >
            {connecting ? 'Connecting...' : '$ ./connect_phantom.sh'}
          </button>
          
          <div className="help-text">
            // If connection rejected, retry by executing the command above
          </div>
        </div>
      </div>
    </div>
  );
}
