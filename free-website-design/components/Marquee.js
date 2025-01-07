import React from 'react';

export default function Marquee({ text }) {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', backgroundColor: '#ff00ff', color: '#000', padding: '10px 0' }}>
      <div style={{ display: 'inline-block', paddingLeft: '100%', animation: 'marquee 15s linear infinite' }}>
        {text}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}