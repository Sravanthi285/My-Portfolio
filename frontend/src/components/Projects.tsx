import React from 'react';

const projects = [
    {
        name: "AI Chatbot for Academic Assistance",
        description: "Multi-layered chatbot architecture using Java and Spring Boot. Features secure user authentication and complex query handling for educational context.",
        tech: ["Java", "Spring Boot", "MySQL", "REST API"],
        github: "https://github.com/Sravanthi285"
    },
    {
        name: "Time Tracker",
        description: "Enterprise-grade attendance system with role-based access control. Built with Node.js and deployed with environment-based production configurations.",
        tech: ["Node.js", "Express.js", "MySQL", "Render"],
        live: "https://timetrack-zrdo.onrender.com",
        github: "https://github.com/Sravanthi285/timetrack"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="container">
            <h2 style={{ marginBottom: '4rem', textAlign: 'center', fontSize: '2.5rem' }}>
                Featured <span className="gradient-text">Projects</span>
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                gap: '2.5rem'
            }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass animate-up" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', transition: 'all 0.4s var(--transition)' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                            e.currentTarget.style.borderColor = 'var(--primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                        }}>
                        <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem' }}>{project.name}</h3>
                        <p style={{ color: 'var(--text-muted)', flex: 1, marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>{project.description}</p>

                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', borderRadius: '10px', background: 'rgba(129, 140, 248, 0.1)', color: 'var(--primary)', border: '1px solid rgba(129, 140, 248, 0.2)', fontWeight: 600 }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                                    Live Demo
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem', opacity: 0.7, borderBottom: '1px solid transparent' }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
