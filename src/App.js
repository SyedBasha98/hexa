import React, { useState, useEffect } from "react";
import HexagulfPortfolio from "./HexagulfPortfolio";
import logo from "./assets/hexagulf-logo.png";

export default function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // If showLogo is true → show splash screen
  // If showLogo is false → show main website
  return showLogo ? <LogoSplash logo={logo} /> : <HexagulfPortfolio />;
}

function LogoSplash({ logo }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #0b1220 0%, #1a1a2e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      flexDirection: 'column'
    }}>
      <div style={{ textAlign: 'center' }}>
        {/* Logo Image */}
        <img 
          src={logo} 
          alt="Hexagulf" 
          style={{
            width: '450px',
            height: 'auto',
            marginBottom: '2rem',
            display: 'block'
          }}
        />
        
        {/* Company Name */}
        <h1 style={{
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          margin: '0 0 0.5rem 0',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          HEXAGULF
        </h1>
        
        {/* Tagline */}
        <p style={{
          color: '#9aa4b2',
          fontSize: '1rem',
          margin: '0 0 2rem 0',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          Integrated Solutions
        </p>

        {/* Loading Bar */}
        <div style={{
          width: '150px',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          margin: '0 auto',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '150px',
            height: '100%',
            background: 'linear-gradient(90deg, #C2185B, #FF4081)',
            animation: 'loading 3s linear forwards'
          }}></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}