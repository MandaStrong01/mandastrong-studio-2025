import React, { useState, useEffect } from 'react';
import { 
  Save, Download, Zap, CheckCircle2, Loader2, Play, ListFilter, 
  ChevronLeft, ChevronRight, Wand2, Monitor, ShieldCheck, 
  Film, CreditCard, Activity, Settings, User, Star, X
} from 'lucide-react';

const App = () => {
  const [page, setPage] = useState(1);
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, rendering, success

  // --- RENDERING ENGINE ---
  const startRender = () => {
    setStatus('rendering');
    setTimeout(() => {
      setStatus('success');
    }, 5000);
  };

  const handleNext = () => {
    setPage((p) => Math.min(p + 1, 21));
    if (page !== 16) setStatus('idle');
  };
  
  const handleBack = () => setPage((p) => Math.max(p - 1, 1));
  
  const jumpToPage = (pageNum: number) => { 
    setPage(pageNum); 
    setShowQuickMenu(false); 
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans overflow-hidden">
      
      {/* GLOBAL BACKGROUND */}
      <video autoPlay muted loop playsInline className="fixed inset-0 w-full h-full object-cover opacity-20 z-0">
        <source src="background.mp4" type="video/mp4" />
      </video>

      {/* PAGE 17: FULL SCREEN THEATER (TOTAL OVERLAY) */}
      {page === 17 && (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center animate-in fade-in duration-1000">
          <video autoPlay controls className="w-full h-full object-contain">
            <source src="user-movie-render.mp4" type="video/mp4" />
            <source src="background.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-8 left-8 flex items-center gap-4 opacity-0 hover:opacity-100 transition-opacity">
            <button onClick={() => setPage(16)} className="bg-purple-600 p-4 rounded-full"><X size={24} /></button>
            <span className="font-black italic uppercase tracking-widest text-xs">Full Screen 8K Preview</span>
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="p-4 border-b border-purple-900/50 bg-black/80 backdrop-blur-xl flex justify-between items-center sticky top-0">
          <div className="flex items-center gap-3">
            <img src="IMG_1306.PNG" alt="Logo" className="w-12 h-12 rounded-xl object-cover" />
            <div>
              <h1 className="text-2xl font-black italic tracking-tighter uppercase leading-none">MandaStrong</h1>
              <span className="text-[10px] font-bold text-purple-400 tracking-[0.3em] uppercase italic">Studio 2025</span>
            </div>
          </div>
          <button onClick={() => setShowQuickMenu(!showQuickMenu)} className="px-6 py-3 bg-purple-900/20 border border-purple-500/50 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white">
            <ListFilter size={14} className="inline mr-2" /> QUICK NAV
          </button>
        </header>

        {/* QUICK MENU */}
        {showQuickMenu && (
          <div className="fixed top-24 right-6 w-80 bg-zinc-950/95 border-2 border-purple-600 rounded-[2.5rem] p-8 z-50 shadow-2xl">
             <div className="grid gap-3">
              {[ { l: "Landing (P1)", t: 1 }, { l: "Plans (P3)", t: 3 }, { l: "600 Tools (P6)", t: 6 }, { l: "Enhancement (P13)", t: 13 }, { l: "Render Hub (P16)", t: 16 }, { l: "Theater (P17)", t: 17 } ].map(item => (
                <button key={item.l} onClick={() => jumpToPage(item.t)} className="w-full text-left text-[11px] font-black p-4 hover:bg-purple-600 rounded-2xl transition-all text-white uppercase tracking-widest italic">
                  {item.l}
                </button>
              ))}
            </div>
          </div>
        )}

        <main className="flex-grow flex flex-col items-center justify-center p-8 w-full">
          
          {/* PAGE 1: HOME */}
          {page === 1 && (
            <div className="text-center space-y-8 animate-in zoom-in duration-700">
               <h2 className="text-8xl md:text-[10rem] font-black italic uppercase leading-none tracking-tighter text-white drop-shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                MANDASTRONG <br/><span className="text-purple-600">STUDIO</span>
              </h2>
              <button onClick={handleNext} className="mt-8 px-16 py-6 bg-purple-600 rounded-full font-black text-2xl shadow-2xl hover:bg-purple-500 transition-all text-white uppercase italic">Launch App</button>
            </div>
          )}

          {/* PAGE 3: PRICING */}
          {page === 3 && (
            <div className="w-full max-w-6xl space-y-12 animate-in fade-in">
              <h3 className="text-6xl font-black italic uppercase text-center">Production Tiers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[ { n: 'Basic', p: 20 }, { n: 'Pro', p: 30 }, { n: 'Studio', p: 50 } ].map(plan => (
                  <div key={plan.n} className="p-12 border-2 border-purple-600 rounded-[3.5rem] bg-zinc-950 flex flex-col items-center hover:-translate-y-2 transition-all">
                    <h4 className="text-3xl font-black uppercase italic mb-4">{plan.n}</h4>
                    <div className="text-7xl font-black mb-8">${plan.p}</div>
                    <button className="w-full py-5 bg-purple-600 rounded-2xl font-black uppercase text-xs tracking-widest">Select</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAGE 6: 600 TOOLS CATEGORIES */}
          {page === 6 && (
            <div className="w-full max-w-6xl space-y-10 animate-in slide-in-from-bottom-10">
              <h3 className="text-6xl font-black italic uppercase text-center">AI Tool Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Scripting", "Visual FX", "8K Render", "Color Grade", "Audio AI", "Lighting", "Physics", "Motion Capture"].map(tool => (
                  <div key={tool} className="p-10 bg-zinc-900/50 border border-purple-900/40 rounded-[2.5rem] text-center group hover:border-purple-500 transition-all">
                    <Wand2 className="mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="font-black uppercase italic text-xs tracking-widest">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAGE 16: PRODUCTION HUB (RENDER / SUCCESS) */}
          {page === 16 && (
            <div className="w-full max-w-5xl space-y-8 text-center animate-in fade-in">
              <h3 className="text-6xl font-black italic uppercase">Export Master</h3>
              <div className="bg-zinc-950/80 border-4 border-purple-600 rounded-[4rem] p-12 backdrop-blur-md shadow-2xl min-h-[480px] flex flex-col justify-center">
                {status === 'idle' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <button className="p-10 bg-zinc-900 rounded-[3rem] border border-zinc-800 flex flex-col items-center"><Save className="text-purple-600 mb-4" size={40}/> <span className="font-black italic text-xs">SAVE</span></button>
                    <button onClick={startRender} className="p-10 bg-purple-600 rounded-[3rem] shadow-xl flex flex-col items-center"><Zap className="text-white mb-4" size={40}/> <span className="font-black italic text-xs">8K RENDER</span></button>
                    <button className="p-10 bg-zinc-900 rounded-[3rem] border border-zinc-800 flex flex-col items-center"><Download className="text-purple-600 mb-4" size={40}/> <span className="font-black italic text-xs">DOWNLOAD</span></button>
                  </div>
                )}
                {status === 'rendering' && (
                  <div className="space-y-6">
                    <Loader2 size={100} className="mx-auto text-purple-600 animate-spin" />
                    <p className="text-4xl font-black italic uppercase animate-pulse">Encoding 8K Cinematic Master...</p>
                  </div>
                )}
                {status === 'success' && (
                  <div className="space-y-8 animate-in zoom-in">
                    <CheckCircle2 size={120} className="mx-auto text-green-500" />
                    <h4 className="text-8xl font-black italic uppercase text-green-500">SUCCESS!</h4>
                    <button onClick={() => setPage(17)} className="px-16 py-6 bg-white text-black rounded-full font-black uppercase italic text-xl flex items-center gap-4 mx-auto hover:bg-purple-600 hover:text-white transition-all">
                      <Play fill="currentColor" /> WATCH FULL SCREEN
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* GENERIC PAGE FALLBACK */}
          {![1, 3, 6, 13, 16, 17].includes(page) && (
            <div className="text-center space-y-4">
              <h2 className="text-9xl font-black italic uppercase tracking-tighter opacity-20">STUDIO P{page}</h2>
              <p className="font-black italic uppercase tracking-[0.5em] text-purple-400">Section Active</p>
            </div>
          )}
        </main>

        {/* FOOTER */}
        <footer className="p-10 border-t border-purple-900/50 bg-black/80 flex flex-col items-center gap-6">
          <div className="flex gap-8 w-full max-w-lg">
            <button onClick={handleBack} className="flex-1 py-6 border-2 border-zinc-900 rounded-[2rem] font-black text-white uppercase italic text-xs">BACK</button>
            <button onClick={handleNext} className="flex-1 py-6 bg-purple-600 rounded-[2rem] font-black text-white uppercase italic text-xs shadow-xl">NEXT</button>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 text-center italic text-white">
            MandaStrong1 2025 ~ Professional Studio Master Edition
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;