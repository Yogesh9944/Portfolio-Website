import { Shield, Award, ExternalLink } from 'lucide-react';
import './Experience.css';

const certs = [
  { title: 'Zscaler Certified Cyber Security Fundamentals', issuer: 'Zscaler', icon: <Shield size={20}/>, color: '#3b82f6' },
  { title: 'AMCAT Certified Technical Associate', issuer: 'Aspiring Minds', icon: <Award size={20}/>, color: '#818cf8' },
];

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <div className="exp-grid">
          <div className="reveal-l">
            <span className="section-eyebrow">Experience</span>
            <h2 className="section-title">Background &<br/>Achievements</h2>
          </div>

          <div className="exp-content">
            <div className="exp-block reveal" data-delay="0">
              <div className="exp-dot" />
              <div className="exp-item card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">Cyber Security Virtual Intern</h3>
                    <span className="exp-company">Zscaler</span>
                  </div>
                  <span className="exp-year">2024</span>
                </div>
                <ul className="exp-points">
                  <li>Hands-on exposure to zero-trust network architecture, cloud security, and secure web gateways.</li>
                  <li>Applied knowledge of SASE frameworks and cloud-delivered security models.</li>
                  <li>Earned Zscaler Certified Cyber Security Fundamentals certification on completion.</li>
                </ul>
              </div>
            </div>

            <div className="exp-block reveal" data-delay="100">
              <div className="exp-dot exp-dot-alt" />
              <div className="exp-item card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">MumbaiHacks 2025 — GenAI Hackathon</h3>
                    <span className="exp-company">Competitive Developer</span>
                  </div>
                  <span className="exp-year">2025</span>
                </div>
                <ul className="exp-points">
                  <li>Developed and presented an AI-powered application as part of a competitive development team.</li>
                  <li>Collaborated under time pressure to ship a working product with real-world utility.</li>
                </ul>
              </div>
            </div>

            <div className="certs-row reveal" data-delay="200">
              <p className="certs-heading">Certifications</p>
              <div className="certs-grid">
                {certs.map(c => (
                  <div key={c.title} className="cert-card card">
                    <div className="cert-icon" style={{ color: c.color, background: `${c.color}15` }}>{c.icon}</div>
                    <div>
                      <div className="cert-title">{c.title}</div>
                      <div className="cert-issuer">{c.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
