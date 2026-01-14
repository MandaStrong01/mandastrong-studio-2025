import ReactDOM from 'react-dom/client';
import App from './App'; // Removed .tsx extension to let the compiler handle it
import './App.css';

// Using a non-null assertion (!) to tell the compiler the root exists
const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(<App />);