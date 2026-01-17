import React, { useState } from 'react';

const CSS = `
  body { margin: 0; background: #000; color: #fff; font-family: 'Arial Black', sans-serif; text-transform: uppercase; overflow-x: hidden; }
  
  /* MATCHING YOUR IMAGE: FULL-BLEED OCEAN BACKGROUND */
  .video-bg { position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; z-index: -1; object-fit: cover; }
  
  /* MATCHING YOUR IMAGE: PRECISE TITLE PLACEMENT & COLOR */
  .hero-title { 
    font-size: 8.5vw; 
    margin-bottom: 5px; 
    color: #000; /* Dark text exactly like IMG_1305.PNG */
    letter-spacing: 1px; 
    font-weight: 900; 
    text-shadow: 1px 1px 2px rgba(255,255,255,0.2);
  }

  .hero-subtitle { 
    font-size: 2.8vw; 
    color: #000; /* Dark text exactly like IMG_1305.PNG */
    font-style: italic; 
    margin-bottom: 60px; 
    font-weight: bold; 
  }

  /* MATCHING YOUR IMAGE: THREE BLACK BUTTONS WITH ROUNDED CORNERS */
  .button-container { display: flex; gap: 25px; justify-content: center; margin-top: 20px; }
  .black-btn { 
    background: #000; 
    color: #fff; 
    border: none; 
    padding: 18px 45px; 
    border-radius: 12px; 
    font-size: 1.6rem; 
    cursor: pointer; 
    font-weight: bold; 
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    text-transform: none; 
  }
  .black-btn:hover { background: #333; transform: scale(1.05); box-shadow: 0 10px 20px rgba(0,0,0,0.4); }

  /* REMAINING 21-PAGE FUNCTIONAL STYLES */
  .nav-header { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; border-bottom: 3px solid #00f2ff; background: rgba(0,0,0,0.9); position: sticky; top: 0; z-index: 100; }
  .cyan-glow { color: #00f2ff; text-shadow: 0 0 10px rgba(0, 242, 255, 0.8); }
  .manda-slider { -webkit-appearance: none; width: 100%; height: 20px; background: #111; border: 2px solid #00f2ff; outline: none; border-radius: 15px; }
  .manda-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 45px; height: 45px; background: #00f2ff; border: 3px solid #fff; cursor: pointer; border-radius: 50%; box-shadow: 0 0 15px #00f2ff; }
  .footer { position: fixed; bottom: 0; left: 0; width: 100%; padding: 18px; background: rgba(0,0,0,0.95); border-top: 4px solid #00f2ff; text-align: center; font-size: 0.9rem; z-index: 1000; font-weight: bold; letter-spacing: 1px; }
`;

export default function App() {
  const [page, setPage] = useState(1);
  const [duration, setDuration] = useState(90);
  const [exportOpen, setExportOpen] = useState(false);

  const nav = (n: number) => { 
    setPage(n); 
    window.scrollTo(0,0); 
    setExportOpen(false); 
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '140px' }}>
      <style>{CSS}</style>

      {/* PAGE 1: EXACT MATCH TO YOUR SCREENSHOT IMG_1305.PNG */}
      {page === 1 && (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <video autoPlay loop muted playsInline className="video-bg">
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <h1 className="hero-title">MANDASTRONG'S STUDIO</h1>
          <h2 className="hero-subtitle">Welcome To The All-In-One Make-A-Movie App!</h2>
          <div className="button-container">
            <button className="black-btn" onClick={() => nav(3)}>Next</button>
            <button className="black-btn" onClick={() => alert('Accessing Secure Login...')}>Login</button>
            <button className="black-btn" onClick={() => alert('Opening Registration...')}>Register</button>
          </div>
        </div>
      )}

      {/* HEADER NAV FOR PAGES 3-21 */}
      {page > 1 && (
        <div className="nav-header">
          <span className="cyan-glow" style={{fontSize: '1.3rem'}}>MANDASTRONG STUDIO v2.0</span>
          <div style={{display:'flex', gap:'12px'}}>
            {page === 11 && <button className="black-btn" style={{padding:'10px 20px', fontSize:'0.9rem'}} onClick={() => nav(12)}>Media Library</button>}
            {page === 12 && <button className="black-btn" style={{padding:'10px 20px', fontSize:'0.9rem'}} onClick={() => nav(13)}>Enhancement Studio</button>}
            <button className="black-btn" style={{padding:'10px 20px', fontSize:'0.9rem', background: '#333'}} onClick={() => nav(page - 1)}>Back</button>
            <button className="black-btn" style={{padding:'10px 20px', fontSize:'0.9rem'}} onClick={() => nav(page + 1)}>Next</button>
          </div>
        </div>
      )}

      <div style={{ padding: '50px' }}>
        {/* PAGE 3: UPDATED PRICING */}
        {page === 3 && (
          <div style={{textAlign:'center'}}>
            <h1 className="cyan-glow">PLAN SELECTION</h1>
            <div style={{display:'flex', gap:'40px', justifyContent:'center', marginTop:'60px'}}>
              <div style={{border:'2px solid #333', padding:'40px', background:'#0a0a0a', width:'220px'}}><h2>BASIC</h2>$20<br/><button className="black-btn" style={{marginTop:'25px', fontSize:'1.1rem'}} onClick={()=>nav(4)}>Select</button></div>
              <div style={{border:'5px solid #00f2ff', padding:'45px', background:'rgba(0,242,255,0.05)', width:'280px', transform:'scale(1.1)'}}><h2 className="cyan-glow">PRO</h2>$40<br/><button className="black-btn" style={{marginTop:'25px', fontSize:'1.1rem'}} onClick={()=>nav(4)}>Select</button></div>
              <div style={{border:'2px solid #333', padding:'40px', background:'#0a0a0a', width:'220px'}}><h2>STUDIO</h2>$80<br/><button className="black-btn" style={{marginTop:'25px', fontSize:'1.1rem'}} onClick={()=>nav(4)}>Select</button></div>
            </div>
          </div>
        )}

        {/* PAGE 13: FUNCTIONAL 0-180 MIN SLIDER */}
        {page === 13 && (
          <div style={{textAlign:'center', maxWidth:'900px', margin:'0 auto'}}>
            <div style={{border:'8px solid #00f2ff', padding:'80px', background:'rgba(0,0,0,0.9)'}}>
              <h1 className="cyan-glow">ENHANCEMENT STUDIO</h1>
              <div style={{fontSize:'12rem', fontWeight:'900', color:'#fff'}}>{duration} <span style={{fontSize:'2.5rem'}}>MIN</span></div>
              <input type="range" min="0" max="180" value={duration} className="manda-slider" onChange={(e: any)=>setDuration(e.target.value)} />
              <div style={{display:'flex', justifyContent:'space-between', marginTop:'25px', fontWeight:'bold', fontSize:'1.2rem'}}><span>0 MIN</span><span>180 MIN</span></div>
            </div>
          </div>
        )}

        {/* PAGE 16: 8-DESTINATION EXPORT MENU */}
        {page === 16 && (
          <div style={{textAlign:'center', paddingTop:'15vh'}}>
            <h1 className="cyan-glow" style={{fontSize:'4.5rem'}}>EXPORT HUB</h1>
            <button className="black-btn" style={{fontSize:'3.5rem', padding:'50px'}} onClick={()=>setExportOpen(true)}>EXPORT MOVIE</button>
            {exportOpen && (
              <div style={{position:'fixed', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,0.97)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:2000}}>
                <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'20px', width:'550px', padding:'50px', border:'6px solid #00f2ff', background:'#000'}}>
                  <h2 style={{gridColumn:'span 2'}} className="cyan-glow">CHOOSE DESTINATION</h2>
                  {['YouTube','TikTok','Vimeo','Google Drive','Etsy Store','Local Disk','Cloud Sync','Studio Hub'].map(d => (
                    <button key={d} className="black-btn" style={{fontSize:'1.1rem'}} onClick={()=>nav(17)}>{d}</button>
                  ))}
                  <button className="black-btn" style={{gridColumn:'span 2', background:'#444', marginTop:'15px'}} onClick={()=>setExportOpen(false)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PAGE 17: AUTO-WATCH PLAYER */}
        {page === 17 && (
          <div style={{textAlign:'center'}}>
            <h1 className="cyan-glow">MOVIE PREVIEW</h1>
            <div style={{width:'100%', height:'70vh', background:'#000', border:'5px solid #00f2ff', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <h2 style={{fontSize:'3rem'}}>▶ AUTO-PLAYING CONTENT</h2>
            </div>
          </div>
        )}

        {/* PAGE 21: FINAL THANK YOU */}
        {page === 21 && (
          <div style={{textAlign:'center'}}>
            <h1 className="cyan-glow" style={{fontSize:'6rem'}}>THANK YOU</h1>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'25px', marginTop:'40px'}}>
              <div style={{border:'1px solid #333', padding:'25px'}}>CREDITS</div><div style={{border:'1px solid #333', padding:'25px'}}>UPDATES</div>
              <div style={{border:'1px solid #333', padding:'25px'}}>BONUSES</div><div style={{border:'1px solid #333', padding:'25px'}}>SURVEY</div>
              <button className="black-btn" style={{gridColumn:'span 2', background:'#8a2be2'}} onClick={()=>nav(1)}>LOG OUT</button>
            </div>
          </div>
        )}
      </div>

      {/* PERMANENT FOOTER CREDITS */}
      <div className="footer">
        MANDASTRONG1 2025 ~ AUTHOR OF "DOXY THE SCHOOL BULLY" ~ SHOP AT MANDASTRONG1.ETSY.COM
      </div>
    </div>
  );
}