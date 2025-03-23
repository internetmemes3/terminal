'use client';
import { useRouter } from 'next/navigation';
import '../styles/accessProtocol.css';

export default function AccessProtocol() {
  const router = useRouter();
  
  const handleConnect = () => {
    router.push('/boot');
  };
  
  return (
    <div className="access-protocol-container">
      <div className="subtitle-container">
        <div className="subtitle-line"></div>
        <div className="subtitle">ACCESS THE AI CHAT</div>
        <div className="subtitle-line"></div>
      </div>
      
      <div className="protocol-steps">
        <div className="protocol-step">
          <div className="step-number"><span>01</span> BUY</div>
          <div className="step-command">$ ./purchase_tokens.sh</div>
          <div className="step-description">Get tokens via Dex</div>
        </div>
        
        <div className="protocol-step">
          <div className="step-number"><span>02</span> CONNECT</div>
          <div className="step-command">$ ./connect_wallet.sh</div>
          <div className="step-description">Establish secure connection<br />with Phantom wallet</div>
        </div>
        
        <div className="protocol-step">
          <div className="step-number"><span>03</span> VERIFY</div>
          <div className="step-command">$ ./verify_holdings.sh</div>
          <div className="step-description">Validate token threshold<br />(1M+)</div>
        </div>
        
        <div className="protocol-step">
          <div className="step-number"><span>04</span> ACCESS</div>
          <div className="step-command">$ ./grant_access.sh</div>
          <div className="step-description">Enter secure AI chat channel</div>
        </div>
      </div>
      
      <div className="secure-network-container">
        <div className="secure-network-header">
          <span className="lock-icon">🔐</span> SECURE NETWORK
        </div>
        
        <div className="secure-network-description">
          Access the AI chat securely exclusive for verified token holders.
        </div>
        
        <div className="secure-network-action">
          <button className="initiate-button" onClick={handleConnect}>
            $ ./initiate.sh <span className="arrow-icon">→</span>
          </button>
        </div>
        
        <div className="network-stats">
          <div className="stat-box">
            <div className="stat-value">24/7</div>
            <div className="stat-label">UPTIME</div>
          </div>
          
          <div className="stat-box">
            <div className="stat-value">100+</div>
            <div className="stat-label">NODES</div>
          </div>
          
          <div className="stat-box">
            <div className="stat-value">1M+</div>
            <div className="stat-label">TOKEN REQ</div>
          </div>
          
          <div className="stat-box">
            <div className="stat-value">E2E</div>
            <div className="stat-label">ENCRYPTION</div>
          </div>
        </div>
      </div>
    </div>
  );
} 