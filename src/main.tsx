
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to handle intersection observer for animations
const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  // Observe elements with specific animation classes
  setTimeout(() => {
    document.querySelectorAll('.project-card, .skill-item').forEach((el) => {
      observer.observe(el);
    });
  }, 100);
};

// Mount the app
createRoot(document.getElementById("root")!).render(<App />);

// Setup animations after the app is mounted
setTimeout(setupIntersectionObserver, 500);
