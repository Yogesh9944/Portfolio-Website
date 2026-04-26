import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#3b82f6',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Vite', level: 80 },
    ],
  },
  {
    category: 'Backend',
    color: '#06b6d4',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 82 },
      { name: 'REST API Design', level: 85 },
      { name: 'JWT Authentication', level: 80 },
    ],
  },
  {
    category: 'Database & Cloud',
    color: '#818cf8',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 72 },
      { name: 'PostgreSQL', level: 68 },
      { name: 'AWS', level: 65 },
    ],
  },
  {
    category: 'Tools & Others',
    color: '#22c55e',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Vercel / Render', level: 80 },
      { name: 'Postman', level: 82 },
      { name: 'Python & DSA', level: 72 },
    ],
  },
];

const badges = ['React.js','Node.js','Express','MongoDB','JavaScript','HTML5','CSS3','Tailwind CSS',
  'Vite','Git','GitHub','PostgreSQL','MySQL','AWS','Vercel','Render','JWT','REST API','Python','Postman'];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="reveal" style={{textAlign:'center'}}>
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub" style={{margin:'0 auto 56px'}}>
            A full-stack toolkit — from pixel-perfect UIs to scalable server-side architectures.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="skill-card card reveal" data-delay={gi * 120}>
              <div className="skill-cat-header">
                <span className="skill-cat-dot" style={{ background: group.color }} />
                <span className="skill-cat-name">{group.category}</span>
              </div>
              <div className="skill-bars">
                {group.skills.map((s) => (
                  <div key={s.name} className="skill-bar-row">
                    <div className="skill-bar-top">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct" style={{ color: group.color }}>{s.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{ '--fill': `${s.level}%`, '--color': group.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="badges-section reveal" data-delay="200">
          <p className="badges-title">Full tech stack at a glance</p>
          <div className="badges-wrap">
            {badges.map(b => (
              <span key={b} className="skill-badge">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
