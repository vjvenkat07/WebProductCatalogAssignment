import React from 'react';

function Sidebar({ categories, active, onSelect }) {
  return (
    <aside className="sidebar">
      <h2>All categories</h2>
      <ul className='mb-3'>
        <li
          className={`mb-3 list-group-item ${active === 'all' ? 'bg-dark text-white fw-bold rounded' : ''}`}
          onClick={() => onSelect('all')}
        >
          All Categories
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`mb-3 list-group-item ${active === cat ? 'bg-dark text-white fw-bold rounded' : ''}`}
            onClick={() => onSelect(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

