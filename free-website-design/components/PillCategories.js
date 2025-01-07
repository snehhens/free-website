import React from 'react';

export default function PillCategories() {
  const categories = [
    { emoji: '🚀', text: 'STARTUPS WITH FIRE' },
    { emoji: '💡', text: 'CREATIVE SOULS' },
    { emoji: '🌱', text: 'SMALL BUSINESSES' },
    { emoji: '❤️', text: 'NGOs DOING GOOD' },
    { emoji: '🎨', text: 'ARTISTIC VENTURES' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
      {categories.map((category, index) => (
        <div key={index} style={{ backgroundColor: '#333', padding: '10px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>{category.emoji}</span>
          <span>{category.text}</span>
        </div>
      ))}
    </div>
  );
}