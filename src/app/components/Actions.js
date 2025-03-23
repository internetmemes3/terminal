'use client';
import { useRouter } from 'next/navigation';

export default function Actions() {
  const router = useRouter();

  const handleConnect = () => {
    router.push('/boot');
  };
  
  return (
    <div className="actions">
      <button className="action-button" onClick={handleConnect}>
        $ ./connect.sh →
      </button>
      <button className="action-buttons">
        $ verify --token
      </button>
      <button className="action-buttons">
        $ buy --tokens
      </button>
    </div>
  );
} 