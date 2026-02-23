import React from 'react';

const certificates = [
    {
        title: "Front-End Web Developer",
        issuer: "Infosys Springboard",
        year: "2025",
        description: "Comprehensive study of modern frontend technologies and best practices."
    },
    {
        title: "Machine Learning",
        issuer: "AWS Academy",
        year: "2025",
        description: "Foundational knowledge in ML models and AWS cloud services."
    },
    {
        title: "Java Programming Bootcamp",
        issuer: "Udemy",
        year: "2024",
        description: "Zero to Hero bootcamp covering core Java and advanced concepts."
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="container">
            <h2 style={{ marginBottom: '4rem', textAlign: 'center', fontSize: '2.5rem' }}>
                Professional <span className="gradient-text">Certifications</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {certificates.map((cert, index) => (
                    <div key={index} className="glass animate-up" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
                            {cert.year}
                        </div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', paddingRight: '3rem' }}>{cert.title}</h3>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>{cert.issuer}</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{cert.description}</p>

                        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                            <span style={{ fontSize: '0.8rem', opacity: 0.5, fontStyle: 'italic' }}>* Certificate images coming soon</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
