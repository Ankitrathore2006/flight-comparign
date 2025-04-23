import React from 'react';

const Header = () => {
  return (
    <header className="section__container header__container">
      <h1 className="section__header">Find And Book<br />A Great Experience</h1>
      {/* <img src="/images/header.jpg" alt="header" /> */}
      <div className="hero">  
        <video 
          src="/images/video1.mp4" 
          autoPlay 
          muted 
          loop 
          style={{
            width: '60rem',
            borderRadius: '20rem'
          }}
        />
        <img 
          src="/images/airplane.png" 
          alt="airplane" 
          style={{
            position: 'absolute',
            width: '86rem',
            left: '-22%',
            top: '-35px',
            margin: 'auto'
          }}
        />
      </div>
    </header>
  );
};

export default Header; 