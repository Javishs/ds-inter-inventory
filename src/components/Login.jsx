import React, { useState } from 'react';

function Login({ onLogin }) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Dealer123') { 
      onLogin();
    } else {
      alert('Access Denied');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border-t-4 border-[#22C55E]">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-slate-900">Dealer Source</h1>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">
            Inventory Portal Access
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1">
              Access Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#22C55E] outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-green-900/10">
            Verify & Enter Catalog
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;