import React, { useState } from 'react';

function PartModal({ part, onClose }) {
  const [selectedImg, setSelectedImg] = useState(null); // The "Zoom" memory
  if (!part) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-4xl overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header (Sticky) */}
        <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black text-slate-900 leading-none">{part.partNumber}</h2>
            <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Visual Inspection Gallery</p>
          </div> 
          <button onClick={onClose} className="group p-3 bg-slate-50 hover:bg-red-50 rounded-2xl transition-all duration-300">
            <svg className="w-6 h-6 text-slate-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="p-8 overflow-y-auto bg-slate-50/50">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {part.images?.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedImg(img)} // Click to Zoom
                className="aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-sm cursor-zoom-in hover:scale-[1.02] transition-transform"
              >
                <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* --- THE ZOOM OVERLAY --- */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <img src={selectedImg} className="max-w-full max-h-full rounded-lg shadow-2xl" alt="Zoomed view" />
            <p className="absolute bottom-10 text-white/50 text-sm font-medium">Click anywhere to close zoom</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PartModal;