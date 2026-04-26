import { Code2, Heart } from "lucide-react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <Code2 size={18}/>
          <span>Yogesh Pande</span>
        </div>
        <p className="footer-copy">
          Built with <Heart size={13} className="heart"/> using React + Vite · {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
