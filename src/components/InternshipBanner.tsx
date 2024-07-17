// components/InternshipBanner.tsx
'use client';
import React from 'react';

const InternshipBanner: React.FC = () => {
  const website = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform")
  };

  return (
    <div style={bannerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Apply For Internship and Mentorship Programs</h1>
        <p style={paragraphStyle}>
          Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success.
        </p>
        <p style={paragraphStyle}>
          The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.
        </p>
        <button style={buttonStyle} onClick={website}>Apply Here →</button>
      </div>
    </div>
  );
};

const bannerStyle: React.CSSProperties = {
  backgroundImage: 'url(../../../public/intern.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '50px 20px',
  textAlign: 'center',
  color: 'white',
  position: 'relative',
};

const contentStyle: React.CSSProperties = {
  maxWidth: '100%',
  margin: '0 auto',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '20px',
  borderRadius: '10px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '2.5em',
  marginBottom: '20px',
  color: '#F9C91E',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '1.2em',
  marginBottom: '20px',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  border: '3px solid #f9c91e',
  color: 'white',
  padding: '10px 20px',
  fontSize: '1em',
  cursor: 'pointer',
  borderRadius: '5px',
  animation: 'bounce 1s infinite',
};

const keyframes = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default InternshipBanner;
