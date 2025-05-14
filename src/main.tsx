
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

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

// Function to create cursor trailer effect
const setupCursorTrailer = () => {
  const trailer = document.getElementById('cursor-trailer');
  if (!trailer) return;
  
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    
    // Add smooth animation with delay
    setTimeout(() => {
      trailer.style.opacity = '0.7';
      trailer.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
    }, 100);
  });
  
  // Hide trailer when cursor is not moving
  let timeout;
  window.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      trailer.style.opacity = '0';
    }, 1500);
  });
};

// Mount the app
createRoot(document.getElementById("root")!).render(<App />);

// Setup animations after the app is mounted
setTimeout(() => {
  setupIntersectionObserver();
  setupCursorTrailer();
}, 500);
