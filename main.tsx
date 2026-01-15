import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Removed StrictMode to prevent deployment and video-bg initialization failures
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);