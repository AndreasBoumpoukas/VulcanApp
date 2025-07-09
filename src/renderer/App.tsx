// src/App.tsx
import React from 'react';
import logo from './assets/vulcan.png';
import valorant from './assets/valorant.png';
import fortnite from './assets/fortnite.png';
import league from './assets/league.png';
import r6 from './assets/r6.png';
import coinImage from './assets/coin.png'; // Add your coin image path here

const games = [
  { title: 'Valorant', image: valorant },
  { title: 'Fortnite', image: fortnite },
  { title: 'League of Legends', image: league },
  { title: 'Rainbow Six Siege', image: r6 },
];

const App: React.FC = () => {
  const username = "VLC.Andre"; // Updated username
  const vCoins = 1200; // Example VCoins count

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: `url('/assets/noise-texture.png'), linear-gradient(to bottom, rgba(255, 248, 225, 0.7), rgba(255, 204, 128, 0.7))`, // Texture with gradient
        backgroundSize: 'cover',  // Ensures the texture scales across the screen
        backgroundRepeat: 'repeat', // Repeat the texture
        fontFamily: 'Arial, sans-serif',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Spread the content between left (logo + buttons) and right (profile + coins)
          background: 'linear-gradient(90deg, #FF7043, #FFB74D)', // Gradient for header
          padding: '20px 40px',
          color: '#2C1C00',
          fontSize: 16,
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderBottom: '3px solid #FFD54F',
        }}
      >
        {/* Left side: Logo and buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src={logo} alt="Vulcan Logo" style={{ width: 64, marginRight: '20px' }} />
          
          {/* Buttons (Game, Shop, Social) */}
          <button
            style={{
              background: '#FFCC80',
              border: 'none',
              borderRadius: '30px',
              padding: '12px 24px',
              color: '#2C1C00',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onClick={() => alert('Games')}
          >
            Games
          </button>
          <button
            style={{
              background: '#FFCC80',
              border: 'none',
              borderRadius: '30px',
              padding: '12px 24px',
              color: '#2C1C00',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onClick={() => alert('Shop')}
          >
            Shop
          </button>
          <button
            style={{
              background: '#FFCC80',
              border: 'none',
              borderRadius: '30px',
              padding: '12px 24px',
              color: '#2C1C00',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onClick={() => alert('Social')}
          >
            Social
          </button>
        </div>

        {/* Right side: Profile and VCoins */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#FFCC80',
            borderRadius: '30px',
            padding: '12px 24px',
            color: '#2C1C00',
            fontSize: '16px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          <span style={{ fontWeight: 'bold', marginRight: '12px' }}>{username}</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={coinImage} alt="VCoins" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            <span style={{ fontWeight: 'bold' }}>{vCoins}</span>
          </div>
        </div>
      </div>

      {/* Subtitle Section */}
      <div
        style={{
          backgroundColor: '#FFB74D',
          padding: '20px 40px',
          borderRadius: '30px',
          marginLeft: '40px',
          marginRight: '40px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginTop: '20px',
        }}
      >
        <h2
          style={{
            textAlign: 'left',
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#2C1C00',
            margin: 0,
          }}
        >
          Select Your Game
        </h2>
      </div>

      {/* Game Grid with Texture Background */}
      <div
        style={{
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          justifyItems: 'center',
        }}
      >
        {games.map((game, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <img
              src={game.image}
              alt={game.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-in-out',
              }}
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          background: 'linear-gradient(90deg, #FF7043, #FFB74D)',
          color: '#2C1C00',
          padding: '20px 40px',
          textAlign: 'left',
          fontSize: '16px',
          marginTop: 'auto',
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: '14px' }}>
          <p style={{ margin: '5px 0' }}>
            <a href="/about-us" style={{ textDecoration: 'none', color: '#2C1C00' }}>About Us</a>
          </p>
          <p style={{ margin: '5px 0' }}>
            <a href="/contact" style={{ textDecoration: 'none', color: '#2C1C00' }}>Contact</a>
          </p>
          <p style={{ margin: '5px 0' }}>
            <a href="/terms" style={{ textDecoration: 'none', color: '#2C1C00' }}>Terms & Conditions</a>
          </p>
        </div>

        <div style={{ fontSize: '14px' }}>
          <p>&copy; 2025 Vulcan Interactive Gaming Inc. | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
