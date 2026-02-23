import React from 'react';

const education = [
    {
        institution: "IILM University, Greater Noida",
        degree: "B.Tech in Computer Science & Engineering (AI)",
        period: "2023 - 2027",
        score: "8.64 CGPA"
    },
    {
        institution: "Sri Chaitanya Junior College",
        degree: "MPC Intermediate",
        period: "2021 - 2023",
        score: "75%"
    },
    {
        institution: "SBVEN EM High School",
        degree: "Class X",
        period: "2020 - 2021",
        score: "8.5 CGPA"
    }
];

const Education = () => {
    return (
        <section id="education" className="container">
            <h2 style={{ marginBottom: '4rem', textAlign: 'center', fontSize: '2.5rem' }}>
                Educational <span className="gradient-text">Background</span>
            </h2>
            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {education.map((edu, index) => (
                    <div key={index} className="glass animate-up" style={{ padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{edu.institution}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{edu.degree}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>{edu.score}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{edu.period}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
