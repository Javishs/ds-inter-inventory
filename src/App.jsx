import React, { useState } from 'react';
import { partsData } from './data/parts';
import PartCard from './components/molecules/PartCard.jsx';
import PartModal from './components/organisms/PartModal.jsx';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [selectedPart, setSelectedPart] = useState(null);

  const filteredParts = partsData.filter(part => 
    part.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    part.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
     }
     
  return (
    <div className="min-h-screen bg-slate-900 pb-20">
      {/* Header */}
      <div className="bg-[#FF6600] py-12 px-4 rounded-b-[3rem] shadow-xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl tracking-tight mb-6">
            <span className="font-black text-[#1a1d21] uppercase">Dealer Source</span>
            <span className="mx-2 text-white">|</span> 
            <span className="font-black text-[#1a1d21] uppercase">
              Int<span className="text-[#22c55e]">e</span>rspan</span>
        </h1>
        <h2 className="text-white text-xl font-bold opacity-90 my-5">INVENTORY HUB</h2>

          <input 
            type="text"
            placeholder="Search by Part Number..."
            className="w-full max-w-xl bg-white p-5 rounded-2xl text-black shadow-lg outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredParts.map(part => (
            <PartCard 
              key={part.id} 
              part={part} 
              onClick={(fullData) => setSelectedPart(fullData)} 
            />
          ))}
        </div>
      </main>

      {selectedPart && (
        <PartModal part={selectedPart} onClose={() => setSelectedPart(null)} />
      )}
      <footer className="mt-12 py-8 border-t border-slate-200 text-center">
  <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
    Developed by Javish S • Dealer Source | Interspan Division
  </p>
  <p className="text-slate-300 text-[10px] mt-1">© 2026 Internal Inventory Hub v1.0</p>
</footer>
 

{/* AI agent placeholder for phase II */}
<div className="fixed bottom-8 right-8 z-50">
  <button className="bg-slate-900 hover:bg-[#22C55E] text-white p-4 rounded-full shadow-2xl transition-all flex items-center gap-2 group">
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm">
      Ask Inventory AI 
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
    </svg>
  </button>
</div>
    </div>
  );
}

export default App;