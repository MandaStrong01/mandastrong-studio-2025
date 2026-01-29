import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, ChevronLeft, Menu, Search, 
  Check, Play, X, Grid3X3, Layers, Monitor, 
  Settings, Download, Share2, Heart, MessageSquare, 
  Sparkles, Home, LogOut, Music, Video, Image as ImageIcon,
  Mic, HardDrive, Sliders, Globe, Shield, User, Send,
  Twitter, Youtube, Facebook, Instagram, Linkedin, Mail,
  Activity, Video as VideoIcon
} from 'lucide-react';

// --- PRODUCTION FLOW TOOL GENERATOR (120 PER BOARD) ---
const generateOrderedTools = (category) => {
  const masterData = {
    Writing: ["Dialogue Writer", "Plot Generator", "Scene Writer", "Story Outliner", "Character Developer", "Dialogue Editor", "Plot Designer", "Story Planner", "Treatment Writer", "Script Formatter", "Plot Creator", "Three Act Builder", "Backstory Generator", "Motivation Builder", "Theme Generator", "Advanced Story Outliner", "Story Consultant", "Plot Twist Creator", "Scene Analyzer", "Conflict Generator"],
    Voice: ["Voice Maker", "Voice Cloner", "Voice Creator Tool", "Voice Recorder", "Speech Converter", "Voice Builder", "Advanced Voice Generator", "Voice Studio Tool", "Premium Voice Generator", "Voice Audio Tool", "Emotional Voice Generator", "Advanced Speech Creator", "Breath Synthesizer", "Dialect Coach", "Vocal Harmonizer", "Accent Modulator", "Neural Narration", "Speech To Motion Link", "Sonic Branding", "Echo Chamber"],
    Image: ["Image Creator", "Advanced Image Generator", "Design Generator", "Image Tool", "Art Maker", "Art Mixer", "Image Stream Tool", "Art Library Tool", "Workflow Tool", "Auto Image Generator", "Image Studio Pro", "Easy Image Generator", "Texture Synthesizer", "Matte Painter", "VFX Plate Maker", "Style Transfer", "Depth Mapper", "Lighting Rig AI", "Background Weaver", "Skin Shader"],
    Video: ["Motion Video Maker", "Video Creator", "Avatar Generator", "Video Synthesizer", "Video Studio", "Video Flow Generator", "Video Creator Studio", "Video Crafter", "Image to Motion Tool", "Video Style Tool", "Temporal Flow Tool", "Frame Blender", "Cinematic Pan AI", "Dynamic Tilt", "Tracking Shot Pro", "Crane Movement AI", "Handheld Simulator", "Lens Flare Synth", "Slow Motion AI", "Action Master"],
    Motion: ["Motion Animator", "Motion Studio", "Auto Animator", "Motion Flow Tool", "Motion Capture Pro", "Webcam Motion Tool", "Skeleton Tracker", "Joint Tracker", "Character Rigger", "3D Character Studio", "Player Avatar Creator", "Avatar Generator", "Face Tracker", "Facial Motion Tool", "Audio to Face Link", "Physics Engine AI", "Gravity Simulator", "Fluid Motion", "Cloth Physics", "Collision Master"],
    Editing: ["Smart Video Editor", "Auto Editor", "Video Tools Suite", "Edit Master", "Scene Detector", "Beat Syncer", "Auto Assembly Tool", "Smart Timeline", "Highlight Finder", "Key Moment Finder", "Context Editor", "Intelligent Cutter", "Word Remover", "Filler Word Remover", "Gap Closer", "Smart Trimmer", "Smart Fade Tool", "Transition Matcher", "Flow Transition", "Smooth Cut Tool"]
  };

  const list = [];
  const source = masterData[category] || [];
  for (let i = 0; i < 120; i++) {
    const base = source[i % source.length];
    const version = i >= source.length ? ` PRO ${Math.floor(i / source.length)}` : "";
    list.push(`${base}${version}`.toUpperCase());
  }
  return list;
};

const BOARD_DATA = {
  Writing: generateOrderedTools("Writing"),
  Voice: generateOrderedTools("Voice"),
  Image: generateOrderedTools("Image"),
  Video: generateOrderedTools("Video"),
  Motion: generateOrderedTools("Motion"),
  Editing: generateOrderedTools("Editing")
};

export default function App() {
  const [page, setPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [duration, setDuration] = useState(120);
  const [showShareModal, setShowShareModal] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  // Audio/Video logic: Unmute crashing waves on first interaction
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});

    const handleUnmute = () => {
      if (video && (page === 1 || page === 2)) {
        video.muted = false;
        video.play().catch(() => {});
      }
    };

    window.addEventListener('mousedown', handleUnmute);
    window.addEventListener('touchstart', handleUnmute);
    return () => {
      window.removeEventListener('mousedown', handleUnmute);
      window.removeEventListener('touchstart', handleUnmute);
    };
  }, [page]);

  const goTo = (p) => { setPage(p); setMenuOpen(false); };

  // --- PERSISTENT UI ---
  const PersistentUI = () => (
    <>
      {/* Top Right Quick Access Menu */}
      <div className="fixed top-6 right-6 z-[110]">
        <button onClick={() => setMenuOpen(!menuOpen)} className="bg-purple-600 p-3 rounded-full shadow-[0_0_20px_rgba(138,43,226,0.4)] hover:scale-110 transition">
          <Menu className="text-white" size={24} />
        </button>
        {menuOpen && (
          <div className="absolute top-14 right-0 bg-zinc-950 border border-purple-600 p-4 rounded-2xl w-64 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {[1, 4, 11, 12, 13, 16, 17, 18, 19, 20, 21].map((p) => {
                const labels = {
                  1: "Home", 4: "AI Hub Directory", 11: "Editor Suite", 12: "Asset Manager", 
                  13: "AI Enhancement", 16: "Final Hub", 17: "Tutorial Center", 18: "Legal",
                  19: "Help Desk", 20: "Community Hub", 21: "Thank You"
                };
                return (
                  <button key={p} onClick={() => goTo(p)} className="text-left text-[11px] font-black uppercase text-purple-400 p-3 hover:bg-purple-600 hover:text-white rounded-lg transition border border-purple-900/30">
                    {labels[p]}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Right GROK Icon (Helpdesk) */}
      <button 
        onClick={() => setPage(19)}
        className="fixed bottom-8 right-8 z-[110] bg-white text-black p-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 transition group"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10L30 30M10 30L30 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="20" cy="20" r="4" fill="currentColor"/>
        </svg>
      </button>

      {/* Footer (From Page 3) */}
      {page >= 3 && (
        <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md py-4 text-center z-[90] border-t border-purple-900/30">
          <p className="text-[10px] md:text-[13px] font-black text-white uppercase tracking-widest px-4 leading-tight">
            MANDASTRONG1 2025 ~ Author of Doxy The School Bully ~ Please Help With Our Fundraiser If You Can. Thank you.
          </p>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden text-purple-400">
      <PersistentUI />
      
      {/* PERSISTENT VIDEO BACKGROUND (PAGES 1-2) */}
      {(page === 1 || page === 2) && (
        <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="background.mp4" type="video/mp4" />
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <main className="relative z-10">
        
        {/* PAGE 1: LANDING (Direct Match img_1366.png) */}
        {page === 1 && (
          <div className="h-screen flex flex-col justify-between items-center relative py-12 px-4 overflow-hidden">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-blue-900/40 border border-blue-400/50 px-8 py-1 rounded-full backdrop-blur-sm">
              <span className="text-[11px] font-black text-blue-300 uppercase tracking-widest italic whitespace-nowrap">Professional Movie Making</span>
            </div>

            <div className="text-center mt-12">
              <h1 className="text-6xl md:text-[9rem] font-black text-black uppercase tracking-tighter leading-none mb-2 italic drop-shadow-md">
                MANDASTRONG'S STUDIO
              </h1>
              <p className="text-xl md:text-3xl font-black text-black italic uppercase tracking-wide whitespace-nowrap">
                Welcome To An All In One Make A Movie App ~ Up Ti 3 Hours
              </p>
            </div>
            
            <div className="flex-grow" />

            <div className="w-full flex justify-between items-end pb-12 px-10">
               {/* LEFT PANEL */}
               <div className="bg-black/80 border border-purple-900/60 p-5 rounded-[25px] backdrop-blur-xl w-72 shadow-2xl">
                  <div className="flex justify-between gap-1 mb-4">
                     {["Pre-Prod", "Prod", "Post-Prod"].map((phase, i) => (
                       <div key={phase} className={`flex-grow text-[9px] py-1.5 text-center rounded-lg font-black uppercase border transition-all ${i === 0 ? 'bg-blue-600 border-white text-white shadow-lg' : 'bg-zinc-900 border-zinc-800 text-zinc-600'}`}>
                          {phase}
                       </div>
                     ))}
                  </div>
                  <div className="flex items-center justify-between px-1 text-[11px] font-black text-white italic">
                     <span>Phase: Planning</span>
                     <span className="text-blue-400">1/10</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-3 overflow-hidden">
                     <div className="w-[10%] h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  </div>
               </div>

               {/* CENTER BUTTONS */}
               <div className="flex flex-col items-center gap-6 absolute left-1/2 -translate-x-1/2 bottom-20">
                  <div className="flex gap-4">
                    <button onClick={() => setPage(2)} className="bg-black border border-white/50 px-10 py-3 rounded-xl text-xl font-black text-white hover:bg-zinc-900 transition min-w-[140px] shadow-2xl">Next</button>
                    <button onClick={() => setPage(3)} className="bg-black border border-white/50 px-10 py-3 rounded-xl text-xl font-black text-white hover:bg-zinc-900 transition min-w-[140px] shadow-2xl">Login</button>
                    <button onClick={() => setPage(3)} className="bg-black border border-white/50 px-10 py-3 rounded-xl text-xl font-black text-white hover:bg-zinc-900 transition min-w-[140px] shadow-2xl">Register</button>
                  </div>
                  <button onClick={() => setPage(4)} className="text-[13px] font-black uppercase text-black hover:text-purple-900 transition underline underline-offset-8 italic">Browse For Now</button>
               </div>

               {/* AUTHOR PORTAL */}
               <div className="relative mb-2">
                  <div className="w-40 h-40 rounded-full border-[6px] border-white/40 overflow-hidden shadow-2xl relative">
                     <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" alt="Author" className="w-full h-full object-cover filter grayscale" />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play size={32} fill="currentColor" className="text-white" />
                     </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[8px] px-4 py-1 rounded-full font-black uppercase shadow-2xl whitespace-nowrap">AUTHOR PORTAL</div>
               </div>
            </div>
          </div>
        )}

        {/* PAGE 2: SPLASH (Match IMG_1457.PNG) */}
        {page === 2 && (
          <div className="h-screen flex flex-col justify-center items-center relative text-center px-4 bg-black/40 backdrop-blur-sm">
            <Sparkles className="text-purple-500 mb-8 animate-pulse" size={100} fill="currentColor" />
            <h1 className="text-6xl md:text-[9rem] font-black text-black uppercase leading-none mb-6 italic drop-shadow-lg">
              MANDASTRONG'S STUDIO
            </h1>
            <p className="text-2xl md:text-5xl font-black text-purple-500 uppercase mb-24 tracking-tighter italic drop-shadow-lg">
              Make Awesome Family Movies Or Put Your Dreams Into Reality. Enjoy!
            </p>
            <div className="flex gap-8">
              <button onClick={() => setPage(1)} className="bg-zinc-900/60 border-2 border-purple-600 px-20 py-6 rounded-[30px] text-2xl font-black uppercase text-purple-400 flex items-center gap-4 transition">
                <ChevronLeft size={40}/> Back
              </button>
              <button onClick={() => setPage(3)} className="bg-purple-600 border-2 border-purple-400 px-20 py-6 rounded-[30px] text-2xl font-black uppercase text-white shadow-[0_0_60px_rgba(168,85,247,0.5)] flex items-center gap-4 transition">
                Next <ChevronRight size={40}/>
              </button>
            </div>
          </div>
        )}

        {/* PAGE 3: AUTH & PRICING (Direct Match IMG_1458 & 1459) */}
        {page === 3 && (
          <div className="min-h-screen bg-black pt-10 pb-48 px-8 flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mb-20">
                <div className="bg-zinc-950 border-2 border-purple-900/30 p-12 rounded-[60px] shadow-2xl backdrop-blur-md">
                  <h2 className="text-5xl font-black text-white text-center mb-14 uppercase italic underline underline-offset-8 decoration-purple-900/50">Login</h2>
                  <div className="space-y-6">
                    <input type="email" placeholder="your@email.com" className="w-full bg-black border border-purple-900/40 p-6 rounded-2xl font-black text-white focus:border-purple-500 outline-none" />
                    <input type="password" placeholder="........" className="w-full bg-black border border-purple-900/40 p-6 rounded-2xl font-black text-white focus:border-purple-500 outline-none" />
                    <button onClick={() => setPage(4)} className="w-full bg-purple-600 py-6 rounded-2xl font-black uppercase text-white text-3xl mt-8 shadow-2xl active:scale-95 transition">Login</button>
                  </div>
                </div>
                <div className="bg-zinc-950 border-2 border-purple-900/30 p-12 rounded-[60px] shadow-2xl backdrop-blur-md">
                  <h2 className="text-5xl font-black text-white text-center mb-14 uppercase italic underline underline-offset-8 decoration-purple-900/50">Register</h2>
                  <div className="space-y-6">
                    <input type="text" placeholder="Your Name" className="w-full bg-black border border-purple-900/40 p-6 rounded-2xl font-black text-white focus:border-purple-500 outline-none" />
                    <input type="email" placeholder="your@email.com" className="w-full bg-black border border-purple-900/40 p-6 rounded-2xl font-black text-white focus:border-purple-500 outline-none" />
                    <input type="password" placeholder="........" className="w-full bg-black border border-purple-900/40 p-6 rounded-2xl font-black text-white focus:border-purple-500 outline-none" />
                    <button onClick={() => setPage(4)} className="w-full bg-purple-600 py-6 rounded-2xl font-black uppercase text-white text-3xl mt-8 shadow-2xl active:scale-95 transition">Create Account</button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
                {[
                  {t:'Basic', p:'$20', d:['HD Export', '100 AI Tools', '10GB Storage']},
                  {t:'Pro', p:'$30', d:['4K Export', '300 AI Tools', '100GB Storage']},
                  {t:'Studio', p:'$50', d:['8K Export', 'All 600 AI Tools', '1TB Storage']}
                ].map(plan => (
                  <div key={plan.t} onClick={() => setSelectedPlan(plan.t)} className={`p-12 rounded-[50px] border-2 transition-all duration-500 text-left cursor-pointer relative ${selectedPlan === plan.t ? 'bg-zinc-900 border-purple-500 shadow-[0_0_80px_rgba(138,43,226,0.5)] scale-105' : 'bg-zinc-950 border-purple-900/20'}`}>
                    {plan.t === 'Pro' && <div className="absolute -top-4 left-12 bg-purple-600 text-white text-[11px] px-5 py-1.5 rounded-full font-black uppercase tracking-widest shadow-xl">POPULAR</div>}
                    <h3 className="text-4xl font-black text-white mb-2 mt-8 uppercase italic">{plan.t}</h3>
                    <div className="text-6xl font-black text-purple-400 mb-10 tracking-tighter">{plan.p}<span className="text-xl text-white/40">/mo</span></div>
                    <ul className="space-y-4 mb-14">
                      {plan.d.map(item => (
                        <li key={item} className="text-sm font-black text-white/80 flex items-center gap-4">
                          <Check size={18} className="text-purple-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button onClick={() => setPage(4)} className="mt-20 bg-purple-600 text-white px-32 py-10 rounded-[40px] text-5xl font-black uppercase italic tracking-tighter shadow-2xl hover:scale-105 transition">Continue to Payment</button>
          </div>
        )}

        {/* --- SPLIT SCREEN MODULE (PAGES 4-16) --- */}
        {page >= 4 && page <= 16 && (
          <div className="flex h-screen bg-black pt-20">
            {/* LEFT SIDE: TEXT / CONTROLS */}
            <div className="w-1/3 h-full border-r border-purple-900/30 p-10 overflow-y-auto custom-scrollbar flex flex-col">
               <h2 className="text-5xl font-black text-purple-600 uppercase italic mb-10 leading-none">
                 {page === 4 ? "DIRECTORY" : page <= 10 ? `${Object.keys(BOARD_DATA)[page-5]?.toUpperCase()} BOARD` : "STUDIO SUITE"}
               </h2>
               
               {page === 4 && (
                 <div className="grid grid-cols-1 gap-6">
                    {Object.keys(BOARD_DATA).map((cat, idx) => (
                      <button key={cat} onClick={() => setPage(5 + idx)} className="bg-zinc-950 border-2 border-purple-900/30 p-10 rounded-[40px] hover:bg-purple-600 group transition shadow-xl text-left">
                        <span className="text-3xl font-black uppercase text-purple-300 group-hover:text-black italic">{cat} BOARD</span>
                      </button>
                    ))}
                 </div>
               )}

               {(page >= 5 && page <= 10) && (
                 <div className="grid grid-cols-1 gap-4">
                    {Object.values(BOARD_DATA)[page-5]?.map((tool, i) => (
                      <button key={i} className="bg-zinc-950 border-2 border-purple-900/30 p-8 rounded-[30px] group hover:bg-purple-600 transition text-left">
                        <span className="text-xl font-black text-purple-500 group-hover:text-black uppercase italic">{tool}</span>
                      </button>
                    ))}
                 </div>
               )}

               {page === 11 && (
                 <div className="space-y-6">
                    <h3 className="text-white text-2xl font-black uppercase italic">Professional Timeline Controls</h3>
                    <button className="w-full bg-purple-600 p-6 rounded-2xl font-black text-white uppercase text-xl italic shadow-lg">Finalize Sequence</button>
                    <button className="w-full bg-zinc-900 border border-purple-600 p-6 rounded-2xl font-black text-purple-400 uppercase text-xl italic">Add Dynamic Subtitles</button>
                 </div>
               )}

               <div className="mt-auto pt-10 flex gap-4">
                  <button onClick={() => setPage(page-1)} className="bg-zinc-900 border-2 border-purple-600 px-10 py-3 rounded-xl font-black uppercase text-purple-400">Back</button>
                  <button onClick={() => setPage(page+1)} className="bg-purple-600 border-2 border-purple-400 px-10 py-3 rounded-xl font-black text-black uppercase">Next</button>
               </div>
            </div>

            {/* RIGHT SIDE: THE APP / PREVIEW */}
            <div className="w-2/3 h-full relative overflow-hidden bg-zinc-900">
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {page === 10 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-20 bg-black">
                       <div className="absolute top-10 left-10 text-4xl font-black text-purple-500 italic uppercase">EDITOR’S CHOICE</div>
                       <Play size={150} className="text-purple-600 animate-pulse mb-8" />
                       <h3 className="text-2xl font-black text-white uppercase italic tracking-[0.5em] opacity-40">Full Feature Playback</h3>
                    </div>
                  ) : (
                    <>
                      <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
                        <source src="background.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute top-10 left-10 flex items-center gap-4 bg-black/60 p-4 rounded-xl backdrop-blur-md">
                        <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_red]" />
                        <span className="font-mono text-purple-900 uppercase tracking-widest text-sm font-black italic">Active_Studio_Link_v1.05</span>
                      </div>
                    </>
                  )}
               </div>
               
               {/* STICKY DURATION SLIDER (Page 13 specifically logic) */}
               {page === 13 && (
                 <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-4/5 bg-zinc-950/90 border-2 border-purple-600 p-12 rounded-[50px] shadow-2xl backdrop-blur-xl">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-purple-400 font-black uppercase text-4xl italic tracking-tighter">Master Duration: {duration} Minutes</span>
                      <span className="text-purple-900 text-[12px] font-black uppercase tracking-widest bg-black px-4 py-1 rounded-full">0-180 Limit</span>
                    </div>
                    <input type="range" min="0" max="180" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full h-4 bg-black rounded-full appearance-none accent-purple-600 cursor-pointer border border-purple-900/30" />
                 </div>
               )}
            </div>
          </div>
        )}

        {/* PAGE 19: HELP DESK (AGENT ROCK) */}
        {page === 19 && (
           <div className="min-h-screen bg-black p-10 pt-24 flex flex-col items-center">
              <h1 className="text-[9rem] font-black text-purple-600 uppercase italic mb-16 tracking-tighter underline underline-offset-8 decoration-purple-900/40 leading-none">AGENT ROCK</h1>
              <div className="w-full max-w-5xl bg-zinc-950 border-[6px] border-purple-600 rounded-[80px] h-[65vh] flex flex-col shadow-2xl overflow-hidden relative">
                 <div className="bg-purple-600 p-12 flex items-center gap-10">
                    <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center border-8 border-white/20 shadow-xl">
                       <Mic size={60} className="text-purple-500" />
                    </div>
                    <div>
                       <h3 className="text-5xl font-black text-white uppercase italic leading-none tracking-tighter">Studio Live Support</h3>
                       <p className="text-purple-200 text-xl font-black uppercase tracking-widest mt-4 animate-pulse italic">Online 24/7 // Expert Level</p>
                    </div>
                 </div>
                 <div className="flex-grow p-16 space-y-10 overflow-y-auto custom-scrollbar bg-black/20">
                    <div className="bg-purple-900/30 p-10 rounded-[40px] self-start max-w-[85%] border-2 border-purple-900/50 shadow-inner">
                       <p className="text-white font-bold text-3xl uppercase italic tracking-tight leading-relaxed">"Welcome back. How can I assist you with your MandaStrong project today?"</p>
                    </div>
                 </div>
                 <div className="p-12 bg-black/60 flex gap-10">
                    <input type="text" placeholder="Type message to Agent Rock..." className="flex-grow bg-black border-4 border-purple-900 p-8 rounded-3xl font-black text-white text-2xl italic outline-none focus:border-purple-600" />
                    <button className="bg-purple-600 p-8 rounded-3xl text-white shadow-2xl hover:scale-105 transition"><Send size={48}/></button>
                 </div>
              </div>
           </div>
        )}

        {/* PAGE 21: THANK YOU (THAT’S ALL FOLK’S!) */}
        {page === 21 && (
          <div className="h-screen bg-black flex flex-col justify-center items-center p-20 text-center relative overflow-hidden">
            <h1 className="text-[14rem] font-black text-purple-600 uppercase italic leading-none mb-10 drop-shadow-[0_0_100px_rgba(138,43,226,0.7)] tracking-tighter underline underline-offset-8 decoration-purple-900/50">THAT’S ALL FOLK’S!</h1>
            <div className="w-full max-w-[1500px] h-[45vh] bg-zinc-900 rounded-[120px] border-[12px] border-double border-purple-600 flex items-center justify-center mb-16 shadow-[0_0_150px_rgba(138,43,226,0.3)] relative">
               <span className="text-purple-900 font-mono text-5xl uppercase italic tracking-[1em] animate-pulse">thatsallfolks.mp4</span>
            </div>
            <div className="max-w-6xl space-y-16 mb-24">
              <p className="text-5xl font-bold text-white leading-relaxed italic uppercase tracking-tighter">
                "Amanda’s Thank you to creators now in future. Supporting cinematic innovation through our Veteran Fundraiser mission."
              </p>
              <a href="https://MandaStrong1.Etsy.com" target="_blank" className="inline-block text-[8rem] font-black text-purple-500 hover:text-white transition tracking-tighter underline underline-offset-[30px] decoration-purple-900/50 decoration-[15px]">MandaStrong1.Etsy.com</a>
            </div>
            <div className="flex gap-16">
              <button onClick={() => setPage(1)} className="bg-zinc-950 border-[6px] border-purple-600 px-32 py-10 rounded-full text-5xl font-black text-purple-500 uppercase flex items-center gap-10 shadow-2xl hover:bg-purple-600 hover:text-white transition">
                <Home size={60}/> Home
              </button>
              <button className="bg-zinc-950 border-[6px] border-purple-600 px-32 py-10 rounded-full text-5xl font-black text-purple-500 uppercase flex items-center gap-10 shadow-2xl hover:bg-red-600 hover:text-white transition">
                <LogOut size={60}/> Close
              </button>
            </div>
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 12px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #000; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #8a2be2; border-radius: 30px; border: 4px solid black; }
        input[type=range] { -webkit-appearance: none; background: #18181b; border-radius: 20px; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; height: 36px; width: 36px; border-radius: 50%; background: #8a2be2; cursor: pointer; border: 6px solid white; shadow: 0 0 30px rgba(138,43,226,0.8); }
        input { color: #ffffff !important; caret-color: #8a2be2; font-family: sans-serif; font-weight: 900; background: #000 !important; border: none !important; outline: none !important; }
        input::placeholder { color: #2e1065 !important; opacity: 1; }
      `}} />
    </div>
  );
}