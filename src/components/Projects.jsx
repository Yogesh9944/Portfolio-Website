import { ExternalLink, ArrowRight, TrendingUp, Layers, BarChart2 } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import './Projects.css';

const projects = [
  {
    featured: true,
    icon: <BarChart2 size={22}/>,
    title: 'FinanceIQ',
    subtitle: 'Personal Finance Dashboard',
    problem: 'Most people have no clear picture of where their money goes — no insights, no patterns, no control.',
    solution: 'Built a full-stack dashboard where users track income, expenses & savings goals with interactive charts. Protected by JWT auth.',
    result: 'Real-time visual feedback on spending habits, mobile-first UI, deployed with CI/CD on Vercel.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'JWT', 'Tailwind CSS', 'Vite'],
    live: 'https://finance-iq-mu.vercel.app/',
    github: 'https://github.com/Yogesh9944/FinanceIQ',
    color: '#3b82f6',
    highlights: ['Real-time charts', 'JWT Auth', 'RESTful APIs', 'Mobile-first'],
  },
  {
    featured: true,
    icon: <Layers size={22}/>,
    title: 'Momentum',
    subtitle: 'Project Management SaaS',
    problem: 'Small teams needed a lightweight, multi-tenant project management tool without paying for enterprise software.',
    solution: 'Engineered a SaaS platform with Kanban boards, drag-and-drop task management, deadline tracking & team workspaces.',
    result: 'Multi-tenant architecture with workspace isolation, role-based access control, and real-time dashboard updates.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vite', 'Tailwind CSS'],
    live: 'https://momentum-project-management-saas-ap.vercel.app/',
    github: 'https://github.com/Yogesh9944/Momentum---Project-Management-SAAS-Application-',
    color: '#06b6d4',
    highlights: ['Multi-tenant', 'Kanban Board', 'RBAC', 'Real-time updates'],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="reveal" style={{textAlign:'center'}}>
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">What I've built</h2>
          <p className="section-sub" style={{margin:'0 auto 56px'}}>
            Real-world applications with full-stack architecture, not just UI prototypes — 
            each one solving a genuine problem.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div key={p.title} className={`project-card card reveal ${i % 2 !== 0 ? 'project-card-alt' : ''}`} style={{ '--accent-color': p.color }}>
              <div className="project-top">
                <div className="project-icon-wrap" style={{ background: `${p.color}18`, border: `1px solid ${p.color}30`, color: p.color }}>
                  {p.icon}
                </div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">
                    <GitHubIcon size={17}/>
                    <span>Code</span>
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link-live" style={{ background: p.color }}>
                    <ExternalLink size={16}/>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="project-titles">
                <h3 className="project-title">{p.title}</h3>
                <span className="project-subtitle">{p.subtitle}</span>
              </div>

              <div className="project-story">
                <div className="story-step">
                  <span className="story-label problem">Problem</span>
                  <p>{p.problem}</p>
                </div>
                <div className="story-arrow"><ArrowRight size={16}/></div>
                <div className="story-step">
                  <span className="story-label solution">Solution</span>
                  <p>{p.solution}</p>
                </div>
                <div className="story-arrow"><ArrowRight size={16}/></div>
                <div className="story-step">
                  <span className="story-label result">Result</span>
                  <p>{p.result}</p>
                </div>
              </div>

              <div className="project-highlights">
                {p.highlights.map(h => (
                  <span key={h} className="highlight-chip" style={{ '--c': p.color }}>
                    <TrendingUp size={12}/>{h}
                  </span>
                ))}
              </div>

              <div className="project-stack">
                {p.stack.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta reveal">
          <p>More projects on GitHub</p>
          <a href="https://github.com/Yogesh9944" target="_blank" rel="noreferrer" className="btn btn-outline">
            <GitHubIcon size={18}/> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
