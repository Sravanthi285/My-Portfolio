import React from 'react';

const skillCategories = [
    { name: "Languages", skills: ["Java", "JavaScript", "Python", "SQL"] },
    { name: "Frontend", skills: ["HTML5", "CSS3", "Bootstrap", "React", "TypeScript"] },
    { name: "Backend", skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"] },
    { name: "Databases", skills: ["MySQL", "MongoDB"] },
    { name: "Tools & Platforms", skills: ["Git", "GitHub", "Postman", "Render", "VS Code", "IntelliJ"] }
];

const Skills = () => {
    return (
        <section id="skills" className="container">
            <h2 style={{ marginBottom: '4rem', textAlign: 'center', fontSize: '2.5rem' }}>
                Technical <span className="gradient-text">Toolbox</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {skillCategories.map((cat, index) => (
                    <div key={index} className="glass animate-up" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 600 }}>{cat.name}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {cat.skills.map((skill, i) => (
                                <span key={i} style={{ fontSize: '0.85rem', padding: '0.4rem 1rem', borderRadius: '100px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
