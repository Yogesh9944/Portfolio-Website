import { GraduationCap, MapPin, Coffee, Zap } from 'lucide-react';
import './About.css';

const facts = [
  { icon: <GraduationCap size={18}/>, label: 'B.E. Computer Science', sub: 'Sant Gadge Baba Amravati University, 2025 · CGPA 7.85' },
  { icon: <MapPin size={18}/>, label: 'Amravati, Maharashtra', sub: 'Open to remote & relocation' },
  { icon: <Zap size={18}/>, label: 'Currently building', sub: 'Full-stack SaaS & finance apps with MERN' },
  { icon: <Coffee size={18}/>, label: 'MumbaiHacks 2025', sub: 'GenAI Hackathon participant — AI-powered app' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-left reveal-l">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">A developer who<br />builds for impact</h2>
          <p className="about-text">
            I'm a fresher Full Stack Developer graduating in 2025, specialising in the MERN stack. 
            I focus on building production-grade web applications that are not just functional — 
            but fast, scalable, and maintainable.
          </p>
          <p className="about-text">
            From implementing multi-tenant SaaS architectures to designing real-time finance dashboards, 
            I enjoy solving problems that have real-world impact. I write clean code, care deeply about UX, 
            and constantly push to level up.
          </p>
          <p className="about-text">
            Currently looking for a <strong>full-time software development role</strong> where I can 
            contribute from day one and grow with a team.
          </p>
          <a href="#contact" className="btn btn-primary about-cta">
            Let's Connect
          </a>
        </div>

        <div className="about-right reveal-r">
          <div className="facts-grid">
            {facts.map((f, i) => (
              <div key={i} className="fact-card card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="fact-icon">{f.icon}</div>
                <div>
                  <div className="fact-label">{f.label}</div>
                  <div className="fact-sub">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-stat-row">
            {[
              { val: '2+', label: 'Production Projects' },
              { val: '7.85', label: 'CGPA' },
              { val: '5+', label: 'Tech Stack' },
            ].map((s) => (
              <div key={s.label} className="stat-box">
                <span className="stat-val">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
