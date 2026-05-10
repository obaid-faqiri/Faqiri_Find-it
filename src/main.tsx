// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and newer
import './index.css'; // Import global styles (Tailwind CSS)
import App from './App'; // The main App component

const rootElement = document.getElementById('root') as HTMLElement; // Get the root div in your HTML

const root = ReactDOM.createRoot(rootElement); // For React 18 and newer

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);