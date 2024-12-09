import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 Application starting...");
console.log("📦 Environment:", import.meta.env.MODE);

const rootElement = document.getElementById("root");
console.log("🎯 Root element found:", rootElement);

if (rootElement) {
  try {
    console.log("🏗️ Creating root...");
    const root = createRoot(rootElement);
    
    console.log("🎨 Rendering app...");
    root.render(<App />);
    
    console.log("✅ App rendered successfully");
  } catch (error) {
    console.error("❌ Error during app initialization:", error);
  }
} else {
  console.error("❌ Root element not found! DOM might not be ready");
}