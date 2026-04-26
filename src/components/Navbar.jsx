import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-logo" href="#hero">
          <Code2 size={20} />
          <span>YP<span className="dot">.</span></span>
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className="nav-link">{l}</button>
            </li>
          ))}
          <li>
            <a href="https://drive.google.com/file/d/1xcpP8vF39WPyp9TPBoVDJYs62zq00eQN/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary nav-cta">
              Resume
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="mobile-link">{l}</button>
          ))}
          <a href="https://drive.google.com/file/d/1xcpP8vF39WPyp9TPBoVDJYs62zq00eQN/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary" style={{marginTop:'8px'}}>
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
