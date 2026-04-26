import { useEffect, useRef } from 'react';
import { Mail, ArrowDown, ExternalLink, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import './Hero.css';

const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'React Developer', 'Problem Solver'];

export default function Hero() {
  const roleRef = useRef(null);
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;
    function type() {
      const role = roles[idxRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        if (roleRef.current) roleRef.current.textContent = role.slice(0, charRef.current);
        if (charRef.current === role.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 1800);
        } else {
          timeout = setTimeout(type, 80);
        }
      } else {
        charRef.current--;
        if (roleRef.current) roleRef.current.textContent = role.slice(0, charRef.current);
        if (charRef.current === 0) {
          deletingRef.current = false;
          idxRef.current = (idxRef.current + 1) % roles.length;
          timeout = setTimeout(type, 400);
        } else {
          timeout = setTimeout(type, 45);
        }
      }
    }
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge reveal" data-delay="0">
          <span className="badge-dot" />
          <span>Open to work — Fresher 2025</span>
        </div>

        <h1 className="hero-name reveal" data-delay="100">
          Hi, I'm <span className="name-accent">Yogesh Pande</span>
        </h1>

        <div className="hero-role reveal" data-delay="200">
          <Terminal size={16} className="terminal-icon" />
          <span ref={roleRef} className="typed-role" />
          <span className="cursor-blink">|</span>
        </div>

        <p className="hero-tagline reveal" data-delay="300">
          I build <strong>scalable, full-stack web applications</strong> that solve real problems — 
          from SaaS platforms to finance dashboards, with clean code and great UX.
        </p>

        <div className="hero-stack reveal" data-delay="350">
          {['React.js','Node.js','MongoDB','Express.js','Tailwind CSS'].map(t => (
            <span key={t} className="stack-tag">{t}</span>
          ))}
        </div>

        <div className="hero-actions reveal" data-delay="400">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowDown size={16} />
          </a>
          <a href="https://drive.google.com/file/d/1xcpP8vF39WPyp9TPBoVDJYs62zq00eQN/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-outline">
            Download Resume <ExternalLink size={14} />
          </a>
        </div>

        <div className="hero-socials reveal" data-delay="500">
          <a href="https://github.com/Yogesh9944" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
            <GitHubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/yogesh-pande-174673267/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <a href="mailto:yogeshpande4421@gmail.com" className="social-link" title="Email">
            <Mail size={20} />
          </a>
          <span className="social-divider" />
          <span className="social-note">yogeshpande4421@gmail.com</span>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
