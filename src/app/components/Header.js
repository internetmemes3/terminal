'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'SECURE UNDERGROUND NETWORK';
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); 

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <header className="header">
      <div className="title-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 className="title" style={{ borderRight: 'none' }}>
          {displayText}<span style={{ opacity: showCursor ? 1 : 0 }}>_</span>
        </h1>
      </div>
    </header>
  );
} 