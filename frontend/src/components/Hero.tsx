import React from 'react';

const Hero = () => {
    return (
        <section className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass animate-up" style={{ padding: '5rem 2rem', textAlign: 'center', maxWidth: '1000px', width: '100%', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '100px', background: 'var(--primary)', filter: 'blur(80px)', opacity: 0.4 }}></div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Building Digital <span className="gradient-text">Experiences</span>
                </h1>

                <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem' }}>
                    Hi, I am <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Karnapu Sravanthi</span>.
                    A Full-stack Developer crafting intelligent applications with Node.js, Spring Boot, and AI integrations.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {['GitHub', 'LinkedIn', 'LeetCode'].map((site, i) => {
                        const links = {
                            GitHub: 'https://github.com/Sravanthi285',
                            LinkedIn: 'https://in.linkedin.com/in/karnapu-sravanthi-a36865295',
                            LeetCode: 'https://leetcode.com/u/9T5DMC9y_KSZmh/'
                        };
                        return (
                            <a key={site} href={links[site as keyof typeof links]} target="_blank" rel="noopener noreferrer"
                                className="glass delay-2" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
                                {site}
                            </a>
                        );
                    })}
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn-primary animate-up delay-3">
                        Explore Projects
                    </a>
                    <a href="#contact" className="glass animate-up delay-3" style={{ padding: '0.8rem 2.5rem', fontWeight: 600 }}>
                        Connect
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
