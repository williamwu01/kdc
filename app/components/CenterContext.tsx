// components/CenteredLayout.tsx
import React from 'react';

interface CenteredLayoutProps {
  children: React.ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
				flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
				gap:'10px',
				position:'relative',
				background: 'linear-gradient(to bottom, #0000ff, #ADD8E6)'
      }}
    >
      {children}
    </div>
  );
};

export default CenteredLayout;