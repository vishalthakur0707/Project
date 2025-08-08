import React, { useState } from "react";
import './Contact.css';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ sending: false, sent: false, error: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return 'Please fill all fields.';
    // simple email check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Please enter a valid email address.';
    if (form.message.trim().length < 10) return 'Message should be at least 10 characters.';
    return '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) return setStatus({ sending: false, sent: false, error: v });

    setStatus({ sending: true, sent: false, error: '' });

    try {
      // Replace the endpoint below with your own email/send API (or integrate EmailJS, Formspree, Netlify Forms, etc.)
      // Example: const res = await fetch('/api/send', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type':'application/json' }});
      // For demo we'll just wait and show success
      await new Promise(r => setTimeout(r, 900));
      setStatus({ sending: false, sent: true, error: '' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ sending: false, sent: false, error: 'Failed to send. Try again later.' });
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <p className="lead">I build front-end interfaces and love turning ideas into code. Need a website or want to collaborate? Drop a message.</p>

          <ul className="contact-info">
            <li><FaPhone /> <span>+91 98765 43210</span></li>
            <li><FaEnvelope /> <span>your.email@example.com</span></li>
            <li><FaMapMarkerAlt /> <span>Himachal Pradesh, India</span></li>
          </ul>

          <small className="hint">Tip: swap the contact info above with your real phone/email/location.</small>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
          </label>

          <label>
            <span>Email</span>
            <input name="email" value={form.email} onChange={handleChange} placeholder="you@domain.com" />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project" rows={6} />
          </label>

          <div className="form-actions">
            <button type="submit" className="btn-send" disabled={status.sending}>
              {status.sending ? 'Sending...' : (
                <>
                  <FaPaperPlane /> <span>{status.sending ? 'Sending' : 'Send Message'}</span>
                </>
              )}
            </button>

            {status.sent && <div className="msg success">Message sent — thank you! I'll reply soon.</div>}
            {status.error && <div className="msg error">{status.error}</div>}
          </div>

          <div className="small-print">Or email me directly at <a href="mailto:your.email@example.com">your.email@example.com</a></div>
        </form>
      </div>
    </section>
  )
}