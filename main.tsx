import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

// The "!" tells TypeScript the container definitely exists
const root = createRoot(container!); 
root.render(<App />);