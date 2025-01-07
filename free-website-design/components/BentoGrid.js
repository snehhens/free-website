import React from 'react';

export default function BentoGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', margin: '50px auto', maxWidth: '1200px' }}>
      {/* Box 1 */}
      <div style={{ gridColumn: '1 / 3', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
        <h3>WHY FREE?</h3>
        <p>Because every great idea deserves great design. (Also building my portfolio, let's be honest)</p>
      </div>

      {/* Box 2 */}
      <div style={{ backgroundColor: '#444', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <h3>Powered by Caffeine & Curiosity</h3>
      </div>

      {/* Box 3 */}
      <div style={{ gridColumn: '1 / 3', backgroundColor: '#555', padding: '20px', borderRadius: '10px' }}>
        <h3>THE PROCESS:</h3>
        <ol>
          <li>You apply</li>
          <li>We vibe check</li>
          <li>Magic happens</li>
          <li>Site goes vrooom</li>
        </ol>
      </div>

      {/* Box 4 */}
      <div style={{ backgroundColor: '#666', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <h3>₹15,000+ VALUE FOR ₹0</h3>
      </div>

      {/* Box 5 */}
      <div style={{ backgroundColor: '#777', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <h3>HOVER FOR TRUTH</h3>
        <p>Yes, it's really free. No, I'm not crazy.</p>
      </div>

      {/* Box 6 */}
      <div style={{ gridColumn: '1 / 4', backgroundColor: '#888', padding: '20px', borderRadius: '10px' }}>
        <h3>APPLICATION FORM</h3>
        <form>
          <input type="text" placeholder="Your Secret Identity (Name)" />
          <input type="email" placeholder="Bat Signal (Email)" />
          <textarea placeholder="The Big Idea (Make it juicy)" />
          <textarea placeholder="Why You? (No pressure... okay maybe a little)" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}