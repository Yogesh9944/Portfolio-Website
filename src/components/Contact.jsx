import { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:yogeshpande4421@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="reveal" style={{textAlign:'center'}}>
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub" style={{margin:'0 auto 56px'}}>
            Open to full-time roles, freelance projects & collaborations. I reply within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal-l">
            <h3 className="contact-info-title">Get in touch</h3>
            <p className="contact-info-sub">
              Whether you have a role, a project idea, or just want to say hi — my inbox is always open.
            </p>

            <div className="contact-links">
              <a href="mailto:yogeshpande4421@gmail.com" className="contact-link-item">
                <div className="cli-icon"><Mail size={20}/></div>
                <div>
                  <div className="cli-label">Email</div>
                  <div className="cli-value">yogeshpande4421@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/yogesh-pande-174673267/" target="_blank" rel="noreferrer" className="contact-link-item">
                <div className="cli-icon" style={{color:'#0a66c2',background:'rgba(10,102,194,0.12)'}}><LinkedInIcon size={20}/></div>
                <div>
                  <div className="cli-label">LinkedIn</div>
                  <div className="cli-value">linkedin.com/in/yogeshpande</div>
                </div>
              </a>
              <a href="https://github.com/Yogesh9944" target="_blank" rel="noreferrer" className="contact-link-item">
                <div className="cli-icon" style={{color:'#e2e8f0',background:'rgba(226,232,240,0.08)'}}><GitHubIcon size={20}/></div>
                <div>
                  <div className="cli-label">GitHub</div>
                  <div className="cli-value">github.com/yogeshpande</div>
                </div>
              </a>
              <div className="contact-link-item" style={{cursor:'default'}}>
                <div className="cli-icon" style={{color:'#f59e0b',background:'rgba(245,158,11,0.1)'}}><MapPin size={20}/></div>
                <div>
                  <div className="cli-label">Location</div>
                  <div className="cli-value">Amravati, Maharashtra — Open to remote</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal-r">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-header">
                <span className="form-title">Send a message</span>
                <span className="form-note">Replies via email</span>
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="Rahul Sharma" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input id="email" name="email" type="email" placeholder="rahul@company.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Hi Yogesh, I'd like to discuss a frontend role at our company..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className={`btn btn-primary form-submit ${sent ? 'sent' : ''}`}>
                {sent ? <><CheckCircle size={16}/> Message Sent!</> : <><Send size={16}/> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
