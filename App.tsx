import { HashRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, ChevronRight, Video, FolderOpen, PlayCircle, SkipBack, Play, 
  SkipForward, Scissors, Type, Music, Image, Plus, Sparkles, Layers, 
  Construction, ShieldCheck, CheckCircle2, FileVideo, Youtube, Instagram, 
  HardDrive, Download, Share2, Link, Twitter, Facebook, Trophy, 
  GripVertical, Save, Home, Settings, Film
} from 'lucide-react';

/* ==========================================
   1. SHARED LAYOUT (The Studio Frame)
   ========================================== */
const StudioLayout = ({ children, stepTitle, stepNum }: any) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <header className="p-4 border-b border-purple-900/50 bg-black/80 backdrop-blur-md flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-purple-900/30 rounded-full transition-all">
            <ArrowLeft className="text-purple-500" />
          </button>
          <div>
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-widest">MandaStrong Studio</h2>
            <h1 className="text-xl font-bold text-white">{stepTitle}</h1>
          </div>
        </div>
        <div className="text-right">
          <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest">Step {stepNum}/21</span>
          <div className="w-32 h-1 bg-gray-800 rounded-full mt-1 overflow-hidden">
            <div className="h-full bg-purple-600 transition-all duration-500" style={{ width: `${(stepNum / 21) * 100}%` }}></div>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

/* ==========================================
   2. PAGE GENERATOR (The 21 Steps)
   ========================================== */
const PageRenderer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const step = parseInt(id || "1");

  const renderStepContent = () => {
    switch (step) {
      case 1: 
        return (
          <div className="min-h-[85vh] relative overflow-hidden flex flex-col items-center justify-center px-4">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
              <source src="/background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            <div className="relative z-10 text-center">
              <div className="inline-block px-6 py-2 bg-purple-600/20 backdrop-blur-md border border-purple-600/50 rounded-full mb-8">
                <span className="text-purple-400 font-black tracking-[0.3em] text-xs uppercase text-white">Professional Movie Making</span>
              </div>
              <h1 className="text-7xl md:text-[9rem] font-black text-white leading-none tracking-tighter mb-2 drop-shadow-2xl uppercase">MandaStrong's</h1>
              <h2 className="text-5xl md:text-7xl font-black text-purple-600 mb-10 tracking-tight drop-shadow-xl">STUDIO</h2>
              <button onClick={() => navigate('/step/2')} className="group px-12 py-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-2xl font-black rounded-2xl transform transition hover:scale-105 shadow-[0_0_40px_rgba(147,51,234,0.4)] flex items-center gap-4 mx-auto">
                START MOVIE <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        );

      case 2: 
        return (
          <div className="p-8 md:p-16 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-5xl font-black text-white mb-6 leading-tight">MAKE YOUR <span className="text-purple-600">MOVIE DREAMS</span> A REALITY</h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  Whether it's awesome family videos or your first feature film, 
                  MandaStrong Studio provides the 21-step professional workflow used by the pros.
                </p>
                <div className="grid grid-cols-1 gap-4 mb-10">
                  <div className="flex items-center gap-4 p-4 bg-purple-900/10 border border-purple-900/30 rounded-xl">
                    <div className="p-3 bg-purple-600 rounded-lg"><Sparkles className="text-white" /></div>
                    <span className="font-bold text-gray-200 text-lg">AI-Powered Scene Enhancement</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-purple-900/10 border border-purple-900/30 rounded-xl">
                    <div className="p-3 bg-purple-600 rounded-lg"><Film className="text-white" /></div>
                    <span className="font-bold text-gray-200 text-lg">4K Cinematic Rendering</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => navigate('/step/3')} className="px-10 py-5 bg-white text-black font-black rounded-xl hover:bg-gray-200 shadow-xl transition-all">CONTINUE</button>
                  <button onClick={() => navigate('/')} className="px-10 py-5 bg-transparent border-2 border-gray-800 text-gray-400 font-bold rounded-xl hover:text-white transition-all">BACK</button>
                </div>
              </div>
              <div className="flex-1 w-full aspect-video bg-purple-900/20 rounded-[3rem] border border-purple-500/20 flex items-center justify-center relative overflow-hidden group">
                <PlayCircle size={100} className="text-purple-500 opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-black"></div>
              </div>
            </div>
          </div>
        );

      case 11: 
        return (
          <div className="p-4 h-[85vh] flex flex-col">
            <div className="flex-1 bg-gray-900 rounded-3xl border border-purple-500/20 relative overflow-hidden flex items-center justify-center">
               <PlayCircle size={100} className="text-purple-600/20" />
               <div className="absolute bottom-0 w-full p-6 bg-black/60 backdrop-blur-md flex flex-col gap-4">
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-purple-600"></div>
                  </div>
                  <div className="flex justify-between items-center px-4">
                    <div className="flex gap-6"><SkipBack className="cursor-pointer"/><Play className="cursor-pointer"/><SkipForward className="cursor-pointer"/></div>
                    <div className="flex gap-6"><Scissors className="cursor-pointer"/><Type className="cursor-pointer"/><Music className="cursor-pointer"/></div>
                  </div>
               </div>
            </div>
          </div>
        );

      case 21:
        return (
          <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
            <Trophy className="text-yellow-500 mb-6 animate-bounce" size={80} />
            <h1 className="text-6xl font-black mb-4 uppercase tracking-tighter">THE END</h1>
            <p className="text-2xl text-purple-400 font-bold mb-12 uppercase italic">Congratulations on your MandaStrong Premiere!</p>
            <button onClick={() => navigate('/')} className="py-4 px-12 bg-purple-600 rounded-xl font-black text-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(147,51,234,0.3)]">CREATE ANOTHER MOVIE</button>
            <p className="mt-20 text-xs text-gray-700 uppercase tracking-[0.5em]">MandaStrong Studio 2025</p>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-12">
             <Construction size={64} className="mx-auto mb-6 text-purple-800" />
             <h2 className="text-3xl font-bold text-gray-400">Step {step} Module</h2>
             <p className="text-gray-600 mb-8 uppercase tracking-widest text-sm">Under Construction</p>
             <button onClick={() => navigate(step === 21 ? '/' : `/step/${step + 1}`)} className="mt-8 px-12 py-4 bg-purple-600 text-white rounded-xl font-black tracking-widest hover:bg-purple-700 transition-all">
               {step === 20 ? "FINISH WORKFLOW" : `GO TO STEP ${step + 1}`}
             </button>
          </div>
        );
    }
  };

  const getStepTitle = (s: number) => {
    const titles: any = { 1: "Landing", 2: "Setup", 11: "Editor Suite", 21: "The Grand Premiere" };
    return titles[s] || `Step ${s} / 21`;
  };

  return (
    <StudioLayout stepTitle={getStepTitle(step)} stepNum={step}>
      {renderStepContent()}
    </StudioLayout>
  );
};

/* ==========================================
   3. MAIN APP ROUTING
   ========================================== */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageRenderer />} />
        <Route path="/step/:id" element={<PageRenderer />} />
      </Routes>
    </HashRouter>
  );
}