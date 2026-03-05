import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div style={{ marginBottom: '30px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search Part Number (e.g. JXD63...)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '15px 25px',
          borderRadius: '30px',
          border: '1px solid #ddd',
          fontSize: '1rem',
          outline: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
}

export default SearchBar;