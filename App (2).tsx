import React, { useState } from 'react';
import { 
  ChevronRight, ChevronLeft, Sparkles, Zap, Wand2, 
  Monitor, ShieldCheck, ListFilter, Film, CreditCard, 
  Activity, Settings, User
} from 'lucide-react';

const App = () => {
  const [page, setPage] = useState(1);
  const [showQuickMenu, setShowQuickMenu] = useState(false);

  const handleNext = () => setPage((p) => Math.min(p + 1, 21));
  const handleBack = () => setPage((p) => Math.max(p - 1, 1));
  
  const jumpToPage = (pageNum: number) => {
    setPage(pageNum);
    setShowQuickMenu(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <header className="p-4 border-b border-purple-900/50 bg-black/90 backdrop-blur-md flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center font-black italic shadow-lg shadow-purple-500/20">M</div>
          <h1 className="text-2xl font-black italic tracking-tighter uppercase">MandaStrong Studio</h1>
        </div>
        <button onClick={() => setShowQuickMenu(!showQuickMenu)} className="flex items-center gap-2 px-4 py-2 bg-purple-900/20 border border-purple-500/50 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-purple-600 transition-all text-white">
          <ListFilter size={14} /> Quick Access Menu
        </button>
      </header>

      {showQuickMenu && (
        <div className="fixed top-20 right-6 w-72 bg-zinc-950 border-2 border-purple-600 rounded-[2rem] p-6 z-50 shadow-[0_0_50px_rgba(147,51,234,0.3)]">
          <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-purple-400 mb-6 border-b border-purple-900 pb-3 italic text-white">Studio Navigation</h4>
          <div className="space-y-3">
            {[
              { label: "Home (Page 1)", target: 1, icon: <Film size={14}/> },
              { label: "Plans (Page 3)", target: 3, icon: <CreditCard size={14}/> },
              { label: "AI Tools (Page 6)", target: 6, icon: <Wand2 size={14}/> },
              { label: "Enhancement (Page 13)", target: 13, icon: <Sparkles size={14}/> },
              { label: "Export (Page 18)", target: 18, icon: <Activity size={14}/> },
              { label: "Settings (Page 20)", target: 20, icon: <Settings size={14}/> }
            ].map(item => (
              <button key={item.label} onClick={() => jumpToPage(item.target)} className="w-full text-left text-xs font-bold p-3 hover:bg-purple-900/40 rounded-xl transition-all flex items-center gap-3 text-white">
                <span className="text-purple-500">{item.icon}</span> {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="flex-grow flex flex-col items-center justify-center p-6 max-w-7xl mx-auto w-full relative">
        {page === 1 && (
          <div className="text-center space-y-8 animate-in zoom-in duration-700">
             <h2 className="text-8xl md:text-[10rem] font-black italic uppercase leading-none tracking-tighter text-white">MANDASTRONG <br/> <span className="text-purple-600 text-glow">STUDIO</span></h2>
             <button onClick={handleNext} className="mt-8 px-12 py-4 bg-purple-600 rounded-full font-black text-lg text-white shadow-lg shadow-purple-500/20">ENTER STUDIO</button>
          </div>
        )}

        {page === 3 && (
          <div className="w-full space-y-12 text-white">
            <h3 className="text-4xl font-black italic uppercase text-center">Select Your Tier</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[ { name: 'Basic', p: 20 }, { name: 'Pro', p: 30 }, { name: 'Studio', p: 50 } ].map((plan) => (
                <div key={plan.name} className="p-10 border-2 border-purple-600 rounded-[3rem] bg-zinc-950 flex flex-col group hover:bg-zinc-900 transition-all">
                  <h4 className="text-2xl font-black uppercase italic">{plan.name}</h4>
                  <div className="text-6xl font-black mb-8">${plan.p}<span className="text-sm opacity-40">/mo</span></div>
                  <button className="w-full py-5 bg-purple-600 rounded-2xl font-black text-white uppercase tracking-widest">Select</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="p-8 border-t border-purple-900/50 bg-black flex flex-col items-center gap-6 text-white">
        <div className="flex gap-6 w-full max-w-lg">
          <button onClick={handleBack} className="flex-1 py-5 border-2 border-zinc-800 rounded-[1.5rem] font-black">BACK</button>
          <button onClick={handleNext} className="flex-1 py-5 bg-purple-600 rounded-[1.5rem] font-black">NEXT</button>
        </div>
        <p className="text-[10px] font-bold uppercase opacity-40 text-center">
          MandaStrong1 2025 ~ Author of Doxy The School Bully ~ Supporting Veterans at MandaStrong1.Etsy.com
        </p>
      </footer>
    </div>
  );
};

export default App;
