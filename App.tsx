import React, { useState } from 'react';
import { 
  Save, Download, Zap, CheckCircle2, Loader2, 
  Play, ListFilter, ChevronLeft, ChevronRight, Maximize, X
} from 'lucide-react';

const App = () => {
  const [page, setPage] = useState(1);
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, rendering, success

  const startRender = () => {
    setStatus('rendering');
    setTimeout(() => {
      setStatus('success');
    }, 5000);
  };

  const handleNext = () => setPage((p) => Math.min(p + 1, 21));
  const handleBack = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans overflow-hidden">
      
      {/* PAGE 17: FULL SCREEN CINEMATIC THEATER */}
      {page === 17 ? (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center animate-in fade-in duration-1000">
          <video 
            autoPlay 
            controls 
            className="w-full h-full object-contain shadow-[0_0_100px_rgba(147,51,234,0.2)]"
          >
            <source src="user-movie-render.mp4" type="video/mp4" />
            {/* Fallback to background if movie not found */}
            <source src="background.mp4" type="video/mp4" />
          </video>
          
          {/* MINIMAL OVERLAY CONTROLS */}
          <div className="absolute top-8 left-8 flex items-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
            <button 
              onClick={() => setPage(16)} 
              className="bg-purple-600/50 hover:bg-purple-600 p-4 rounded-full backdrop-blur-md transition-all"
            >
              <X size={24} />
            </button>
            <span className="font-black italic uppercase tracking-[0.3em] text-sm">Now Playing: Your 8K Production</span>
          </div>
        </div>
      ) : (
        /* STANDARD STUDIO WRAPPER FOR OTHER PAGES */
        <div className="relative z-10 flex flex-col min-h-screen">
          <header className="p-4 border-b border-purple-900/50 bg-black/80 backdrop-blur-xl flex justify-between items-center sticky top-0">
            <div className="flex items-center gap-3">
              <img src="IMG_1306.PNG" alt="Logo" className="w-12 h-12 rounded-xl object-cover" />
              <h1 className="text-2xl font-black italic tracking-tighter uppercase leading-none">MandaStrong <span className="text-purple-600">Studio</span></h1>
            </div>
            <button onClick={() => setShowQuickMenu(!showQuickMenu)} className="px-6 py-3 bg-purple-900/20 border border-purple-500/50 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white">
              QUICK ACCESS
            </button>
          </header>

          <main className="flex-grow flex flex-col items-center justify-center p-8 w-full relative">
            {/* PAGE 16: PRODUCTION HUB */}
            {page === 16 && (
              <div className="w-full max-w-5xl space-y-8 text-center animate-in fade-in">
                <div className="space-y-2">
                  <h3 className="text-6xl font-black italic uppercase">Production Hub</h3>
                  <p className="text-purple-400 font-bold uppercase tracking-[0.4em] text-sm italic">Save • Render • Export</p>
                </div>

                <div className="bg-zinc-950/80 border-4 border-purple-600 rounded-[4rem] p-10 backdrop-blur-md shadow-2xl min-h-[450px] flex flex-col justify-center">
                  {status === 'idle' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <button className="p-10 bg-zinc-900 rounded-[3rem] border border-zinc-800 hover:border-purple-500 transition-all">
                        <Save size={40} className="mx-auto mb-4 text-purple-600" />
                        <span className="font-black uppercase italic text-xs tracking-widest">Save Project</span>
                      </button>
                      <button onClick={startRender} className="p-10 bg-purple-600 rounded-[3rem] shadow-xl shadow-purple-900/40 hover:scale-105 transition-all">
                        <Zap size={40} className="mx-auto mb-4 text-white animate-pulse" />
                        <span className="font-black uppercase italic text-xs tracking-widest">8K Render</span>
                      </button>
                      <button className="p-10 bg-zinc-900 rounded-[3rem] border border-zinc-800 hover:border-purple-500 transition-all">
                        <Download size={40} className="mx-auto mb-4 text-purple-600" />
                        <span className="font-black uppercase italic text-xs tracking-widest">Download</span>
                      </button>
                    </div>
                  )}

                  {status === 'rendering' && (
                    <div className="space-y-8">
                      <Loader2 size={100} className="mx-auto text-purple-600 animate-spin" />
                      <p className="text-4xl font-black italic uppercase animate-pulse">Encoding 8K Stream...</p>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="space-y-8 animate-in zoom-in">
                      <CheckCircle2 size={120} className="mx-auto text-green-500" />
                      <h4 className="text-8xl font-black italic uppercase text-green-500">SUCCESS!</h4>
                      <button 
                        onClick={() => setPage(17)} 
                        className="px-16 py-6 bg-white text-black rounded-full font-black uppercase italic text-xl shadow-2xl hover:bg-purple-600 hover:text-white transition-all flex items-center gap-4 mx-auto"
                      >
                        <Play fill="currentColor" /> WATCH FULL SCREEN
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* FALLBACK FOR OTHER PAGES */}
            {page !== 16 && page !== 17 && (
              <div className="text-center">
                <h2 className="text-9xl font-black italic uppercase tracking-tighter">STUDIO P{page}</h2>
              </div>
            )}
          </main>

          <footer className="p-10 border-t border-purple-900/50 bg-black/80 flex flex-col items-center gap-6">
            <div className="flex gap-8 w-full max-w-lg">
              <button onClick={handleBack} className="flex-1 py-6 border-2 border-zinc-900 rounded-[2rem] font-black text-white uppercase italic text-xs">BACK</button>
              <button onClick={handleNext} className="flex-1 py-6 bg-purple-600 rounded-[2rem] font-black text-white uppercase italic text-xs">NEXT</button>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;