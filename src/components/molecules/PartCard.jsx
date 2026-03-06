import React from 'react';

 function PartCard({ part, onClick }) {
  
  const generatedImages = Array.from({ length: part.imageCount || 0 }, (_, i) => 
  `${import.meta.env.BASE_URL}images/${part.partNumber}/${i + 1}.jpeg`
);

  const mainImage = generatedImages.length > 0 
    ? generatedImages[0] 
    : 'https://via.placeholder.com/400x300?text=No+Image+Available';

  
  const handleCardClick = () => {
    onClick({ ...part, images: generatedImages });
  };

  return (
    <div className="group cursor-pointer bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
   
      <div onClick={handleCardClick} className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
        <img 
          src={mainImage} 
          alt={part.partNumber}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold">
          {generatedImages.length} Photos
        </div>
      </div>     
      {/* Info Section */}
      <div className="mt-4 px-1">
        <p className="text-slate-900 text-[10px] font-bold uppercase tracking-wider">Part Number</p>
        <h3 className="text-xl font-black text-slate-900 mb-3">{part.partNumber}</h3>

        <p className="text-slate-900 text-[10px] font-bold uppercase tracking-wider">Location:</p>
        <h3 className="text-xl font-black text-slate-900 mb-3">{part.location}</h3>
        
        <p className="text-slate-900 text-[10px] font-bold uppercase tracking-wider">Description:</p>
        <h3 className="text-xl font-black text-slate-900 mb-3">{part.description}</h3>

        {/* Status Section  */}
        <div className="flex gap-4 pt-3 border-t border-slate-50">
          <label className="flex items-center gap-2 cursor-pointer group/check">
            <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-green-600 focus:ring-green-500" />
            <span className="text-sm font-bold text-slate-600 group-hover/check:text-green-600">Good</span> 
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer group/check">
            <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-red-600 focus:ring-red-500" />
            <span className="text-sm font-bold text-slate-600 group-hover/check:text-red-600">Not Good</span> 
          </label>
        </div>
      </div>
    </div>
  );
}

export default PartCard;