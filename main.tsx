import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Find the root element in your index.html
const container = document.getElementById('root');

// Initialize the React root without StrictMode to prevent deployment issues
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}