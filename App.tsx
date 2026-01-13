import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const [duration, setDuration] = useState(90);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-purple-500">
        <Routes>
          {/* PAGE 1: SPLASH */}
          <Route path="/" element={
            <div className="h-screen flex flex-col items-center justify-center relative">
              <div className="ocean-video-container"><video autoPlay loop muted className="ocean-video"><source src="https://assets.mixkit.co/videos/preview/mixkit-ocean-waves-in-the-sunset-4119-large.mp4" /></video></div>
              <h1 className="relative z-10 text-7xl mb-8">MANDASTRONG STUDIO</h1>
              <div className="relative z-10 flex gap-6">
                <Link to="/pricing" className="border-4 border-purple-600 px-12 py-3 hover:bg-purple-600 transition-all">GET STARTED</Link>
              </div>
            </div>
          } />

          {/* PAGE 3: PRICING */}
          <Route path="/pricing" element={
            <div className="p-12 text-center">
              <h2 className="text-6xl mb-16">CHOOSE YOUR PLAN</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <div className="border-4 border-purple-600 p-10"><h3 className="text-4xl">BONUS</h3><div className="text-5xl my-6">$10</div><button className="w-full bg-purple-600 py-3">SELECT</button></div>
                <div className="border-4 border-white p-10 bg-purple-600"><h3 className="text-4xl">PRO</h3><div className="text-5xl my-6">$20</div><button className="w-full bg-black py-3">SELECT</button></div>
                <div className="border-4 border-purple-600 p-10"><h3 className="text-4xl">STUDIO</h3><div className="text-5xl my-6">$30</div><button className="w-full bg-purple-600 py-3">SELECT</button></div>
              </div>
              <Link to="/editor" className="mt-16 inline-block text-2xl text-purple-500">CONTINUE TO EDITOR →</Link>
            </div>
          } />

          {/* PAGE 11: EDITOR SUITE */}
          <Route path="/editor" element={
            <div className="p-8">
              <h2 className="text-5xl mb-8">EDITOR SUITE</h2>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 border-4 border-purple-600 p-6">
                  <div className="aspect-video bg-gray-900 mb-6 flex items-center justify-center text-3xl">PREVIEW</div>
                  <div className="flex gap-6">
                    <Link to="/timeline" className="border-2 border-purple-600 px-6 py-2">TIMELINE</button>
                    <button className="border-2 border-purple-600 px-6 py-2">MEDIA</button>
                    <button className="bg-purple-600 px-8 py-2 text-white">OPEN ENHANCEMENT STUDIO</button>
                  </div>
                </div>
                <div className="border-4 border-purple-600 p-6">
                  <h3 className="text-2xl mb-6">QUICK TOOLS</h3>
                  {['CUT', 'TRIM', 'SPLIT', 'MERGE'].map(t => <button key={t} className="w-full border-2 border-purple-600 mb-4 py-2 hover:bg-purple-600">{t}</button>)}
                </div>
              </div>
            </div>
          } />

          {/* PAGE 13: 180-MIN SLIDER */}
          <Route path="/timeline" element={
            <div className="p-12 max-w-5xl mx-auto text-center">
              <h2 className="text-5xl mb-12">TIMELINE PREVIEW</h2>
              <div className="bg-gray-900 h-80 border-4 border-purple-600 flex items-center justify-center mb-12"><span className="text-8xl text-purple-600">▶</span></div>
              <div className="border-4 border-purple-600 p-10">
                <h3 className="text-3xl mb-6">MOVIE DURATION</h3>
                <div className="text-7xl text-purple-600 mb-8 font-black">{duration} MINUTES</div>
                <input type="range" min="0" max="180" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))} className="w-full h-6 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between mt-4 text-xl"><span>0 MIN</span><span>180 MIN</span></div>
              </div>
              <Link to="/editor" className="mt-12 inline-block text-purple-500">← BACK TO EDITOR</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;