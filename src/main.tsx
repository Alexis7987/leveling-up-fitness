import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application starting...");

const rootElement = document.getElementById("root");
console.log("Root element found:", rootElement);

if (rootElement) {
  const root = createRoot(rootElement);
  console.log("Root created, rendering app...");
  
  root.render(<App />);
  console.log("App rendered");
} else {
  console.error("Root element not found!");
}