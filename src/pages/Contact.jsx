import React, { useState } from 'react';

import '../styles/Contact.css';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const getWebhookUrl = () => import.meta.env.VITE_N8N_WEBHOOK_PATH;
  const webhookConfigured = Boolean(getWebhookUrl());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use env-configured absolute URL (http/https). Set VITE_N8N_WEBHOOK_PATH accordingly.
      const webhookUrl = getWebhookUrl();
      if (!webhookUrl) throw new Error('Missing VITE_N8N_WEBHOOK_PATH');
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // dev-only test webhook logic removed

  return (
    <>
      <Helmet>
        <title>Contact | AcceloEdge — AI Automation for Small Business</title>
        <meta name="description" content="Get in touch with AcceloEdge to start your AI automation journey for small business." />
        <meta name="keywords" content="Contact AcceloEdge, AI automation inquiry, small business support" />
        <meta property="og:title" content="Contact AcceloEdge — AI Automation for Small Business" />
        <meta property="og:description" content="Reach out to discuss how AI can transform your small business operations." />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="contact">
        {/* Hero Section */}
        <section className="contact-hero section">
          <div className="container">
            <div className="contact-hero-content text-center">
              <h1 className="contact-title fade-in">Get In Touch</h1>
              <p className="contact-subtitle slide-up">
                Ready to transform your business with AI automation? Let's start the conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <h2 className="contact-info-title">Let's Discuss Your Project</h2>
                <p className="contact-info-description">
                  We'd love to learn about your business challenges and explore how AI automation 
                  can help you achieve your goals. Fill out the form and we'll get back to you 
                  within 24 hours.
                </p>

                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="contact-detail-content">
                      <h3 className="contact-detail-title">Email</h3>
                      <p className="contact-detail-text">business@acceloedge.com</p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className="contact-detail-content">
                      <h3 className="contact-detail-title">Phone</h3>
                      <p className="contact-detail-text">+46 765069770</p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    <div className="contact-detail-content">
                      <h3 className="contact-detail-title">Response Time</h3>
                      <p className="contact-detail-text">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="consultation-note">
                  <div className="note-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h9l4 4V12z"/>
                    </svg>
                  </div>
                  <p className="note-text">
                    <strong>Free Consultation:</strong> Our initial consultation is completely free. 
                    We'll assess your needs and provide actionable insights, even if you decide not to work with us.
                  </p>
                </div>
              </div>

              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  {submitStatus === 'success' && (
                    <div className="message message-success">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                      Thank you for your message! We'll get back to you within 24 hours.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="message message-error">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                      </svg>
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      required
                      placeholder="Tell us about your business and how we can help you with AI automation..."
                      rows="6"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary btn-large form-submit ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting || !webhookConfigured}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="loading-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 11-6.219-8.56"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      webhookConfigured ? 'Send Message' : 'Send Message (disabled)'
                    )}
                  </button>

                  <p className="form-note">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                  {!webhookConfigured && (
                    <p className="form-note" style={{ color: '#a00' }}>
                      Submissions disabled locally. Set VITE_N8N_WEBHOOK_PATH in production to enable.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="faq section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-description">
                Common questions about our AI automation services
              </p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">How long does it take to implement AI automation?</h3>
                <p className="faq-answer">
                  Implementation timelines vary based on complexity, but most projects are completed within 4-8 weeks. 
                  We'll provide a detailed timeline during your free consultation.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Do I need technical expertise to use AI agents?</h3>
                <p className="faq-answer">
                  Not at all! We design our AI agents to be user-friendly and integrate seamlessly with your existing tools. 
                  We also provide comprehensive training to ensure your team is comfortable using the new automation.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">What if my business processes change?</h3>
                <p className="faq-answer">
                  Our AI agents are designed to be flexible and adaptable. We provide ongoing optimization services 
                  to ensure your automation evolves with your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;

