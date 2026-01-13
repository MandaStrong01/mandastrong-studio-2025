import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './App.css';

// Locate the root element in your index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create the root and render the App directly
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Critical Error: Could not find the root element in index.html.");
}