import React from 'react';
import './App.css';
import ChatWidget from './components/ChatWidget';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="App">
      <nav className="glass" style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1000px', zIndex: 1000, padding: '1rem 2rem', borderRadius: '100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>
            <span className="gradient-text">KS</span>.dev
          </h2>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Education', 'Projects', 'Certificates'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8 }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        <section id="about" className="container">
          <div className="glass animate-up" style={{ padding: '4rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>About <span className="gradient-text">Me</span></h2>
            <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              I am a Full-stack web developer specializing in
              <strong> Node.js, Spring Boot, and AI-driven applications</strong>.
              My focus is on building scalable, high-performance software with clean architectures and intuitive user interfaces.
              I thrive on solving complex backend challenges while maintaining a keen eye for modern frontend aesthetics.
            </p>
          </div>
        </section>

        <Education />
        <Experience />
        <Projects />
        <Certificates />
        <Skills />
      </main>

      <footer className="container" style={{ padding: '6rem 0', textAlign: 'center', opacity: 0.6 }}>
        <div style={{ width: '40px', height: '2px', background: 'var(--primary)', margin: '0 auto 2rem' }}></div>
        <p>&copy; 2026 Karnapu Sravanthi. Crafted with Precision & AI.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: 'var(--text-dim)' }}>Greater Noida, Uttar Pradesh, India</p>
      </footer>

      <ChatWidget />
    </div>
  );
}

export default App;
