import React from 'react';

const experiences = [
    {
        role: "Web Development Intern",
        company: "EI Systems",
        period: "Jan 2025 - Feb 2025",
        description: "Architected responsive interfaces for AI project visualization. Leveraged React and modern CSS to decrease latency and improve user flow through performance-centric frontend design."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="container">
            <h2 style={{ marginBottom: '4rem', textAlign: 'center', fontSize: '2.5rem' }}>
                Professional <span className="gradient-text">Experience</span>
            </h2>
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
                {experiences.map((exp, index) => (
                    <div key={index} className="glass animate-up" style={{ padding: '3rem', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                                <h4 style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '1.1rem' }}>{exp.company}</h4>
                            </div>
                            <span style={{ background: 'rgba(129, 140, 248, 0.1)', color: 'var(--primary)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600 }}>
                                {exp.period}
                            </span>
                        </div>
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', opacity: 0.85, lineHeight: '1.8' }}>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
