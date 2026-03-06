import { useEffect } from 'react'
import Hero from './components/Hero'
import Lineage from './components/Lineage'
import Alchemy from './components/Alchemy'
import Collections from './components/Collections'
import Bespoke from './components/Bespoke'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  useEffect(() => {
    // Scroll Reveal Animation - 1000ms slow fade-in
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-paper-white">
      <Navigation />
      <Hero />
      <Lineage />
      <Alchemy />
      <Collections />
      <Bespoke />
      <footer className="bg-ink-black text-paper-white py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="font-serif text-lg mb-2">以心相交、以火交心</p>
          <p className="text-sm opacity-75">© 2026 吳榮交趾陶 Wu Rong Cochin Ceramics. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
