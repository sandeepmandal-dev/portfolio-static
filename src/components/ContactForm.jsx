import { useState, useRef } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const RATE_LIMIT_MS = 60_000 // 1 submission per 60 seconds per browser
const RATE_LIMIT_KEY = 'portfolio_last_submit'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error | blocked
  const [error, setError] = useState('')
  const formRef = useRef(null)

  const isRateLimited = () => {
    const last = localStorage.getItem(RATE_LIMIT_KEY)
    if (!last) return false
    return Date.now() - Number(last) < RATE_LIMIT_MS
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const form = formRef.current
    const formData = new FormData(form)

    // --- Spam guard 1: honeypot field ---
    // Real users never see/fill this (hidden via CSS). Bots that auto-fill every
    // field will populate it, so we silently drop the submission.
    if (formData.get('company_website')) {
      setStatus('success') // pretend it worked so the bot doesn't retry differently
      form.reset()
      return
    }

    // --- Spam guard 2: client-side rate limit ---
    if (isRateLimited()) {
      setStatus('blocked')
      setError('You already sent a message recently. Please wait a minute before sending another.')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await res.json()

      if (result.success) {
        localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()))
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(result.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setError('Network error — please try again in a moment.')
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner contact-layout">
        <div className="contact-copy">
          <p className="contact-eyebrow">Get in touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-intro">
            Have a project in mind? Want to collaborate, or just want to say hello?
            I’d love to hear from you.
          </p>

          <div className="contact-details">
            <a className="contact-detail" href="mailto:sandeepmandal1779@gmail.com">
              <span className="contact-detail-icon"><FaEnvelope /></span>
              <span>
                <span className="contact-detail-label">Email</span>
                <span className="contact-detail-value">sandeepmandal1779@gmail.com</span>
              </span>
            </a>
          </div>

          <div className="contact-socials">
            <p>Follow me</p>
            <div className="contact-social-links">
              <a href="https://github.com/sandeepmandal-dev" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sandeep-mandal10/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          {/* Required by Web3Forms to route the email */}
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New message from portfolio site" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />

          {/* Honeypot: real visitors never see this field */}
          <div className="honeypot-field" aria-hidden="true">
            <label htmlFor="company_website">Company Website</label>
            <input
              type="text"
              id="company_website"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="contact-fields-row">
            <div className="contact-field">
              <label className="field-label" htmlFor="name">Your Name</label>
              <input id="name" name="name" className="text-input" type="text" placeholder="Full Name" required maxLength={100} />
            </div>
            <div className="contact-field">
              <label className="field-label" htmlFor="email">Email Address</label>
              <input id="email" name="email" className="text-input" type="email" placeholder="abc@gmail.com" required maxLength={150} />
            </div>
          </div>

          <div className="contact-field">
            <label className="field-label" htmlFor="message-subject">Subject</label>
            <input id="message-subject" name="project_subject" className="text-input" type="text" placeholder="Project inquiry" required maxLength={150} />
          </div>

          <div className="contact-field">
            <label className="field-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="text-input textarea"
              rows={5}
              required
              maxLength={2000}
              placeholder="Tell me about your project or idea..."
            />
          </div>

          {(status === 'error' || status === 'blocked') && <p className="form-error">{error}</p>}
          {status === 'success' && (
            <p className="form-success">Message sent — thanks for reaching out! I'll get back to you soon.</p>
          )}

          <button className="btn btn-primary btn-full" type="submit" disabled={status === 'sending'}>
            <FaPaperPlane />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
