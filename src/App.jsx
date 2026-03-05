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
  <div className="min-h-screen bg-slate-900">
     <div className="bg-[#FF6600] pb-12 pt-8 px-4 rounded-b-[3rem] shadow-xl">
      <div className="max-w-6xl mx-auto">
        <hi className="text-3xl tracking-tight mb-6">
          <span className="font-black text-[#1a1d21] uppercase">Dealer Source</span>
          <span className="mx-2 text-slate-300">|</span> 
          <span className="font-black text-[#1a1d21] uppercase">Int<span className="text-[#17a14a]">e</span>rspan Electrical</span></hi>
        <h1 className="text-white text-3xl font-black mb-6">INVENTORY HUB</h1>
              
        <div className="relative group max-w-xl">
          <input 
            type="text"
            placeholder="Search by Part Number..."
            className="w-full bg-white p-5 rounded-2xl text-black shadow-lg outline-none border-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>

    <main className="max-w-6xl mx-auto px-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredParts.map(part => (
          <PartCard 
          key={part.id} 
          part={part} 
          onClick={(fullPartData) => setSelectedPart(fullPartData)} />
        ))}
      </div>
    </main>

    {selectedPart && <PartModal part={selectedPart} onClose={() => setSelectedPart(null)} />}
  </div>
);
}

export default App;