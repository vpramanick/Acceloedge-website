import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/Products.css';
import '../styles/AIChatBot.css';

const AIChatBot = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null); // All FAQs start collapsed

  const chatMessages = [
    { type: 'bot', text: "Hi! 👋 How can I help?", delay: 1000 },
    { type: 'user', text: "I need to cancel my booking due to an emergency", delay: 2500 },
    { type: 'bot', text: "I understand this is urgent. Let me connect you with a human agent who can help with cancellations.", delay: 4000 },
    { type: 'system', text: "Transferring to human agent...", delay: 5500 },
    { type: 'human', text: "Hi! I'm Sarah from customer service. I'll help you with your cancellation right away.", delay: 7000 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessageIndex < chatMessages.length) {
        setIsTyping(true);
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
          setIsTyping(false);
        }, 800);
      } else {
        // Reset animation after a pause
        setTimeout(() => {
          setCurrentMessageIndex(0);
        }, 3000);
      }
    }, chatMessages[currentMessageIndex]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, chatMessages]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>dAIlogue | AcceloEdge — Intelligent Conversational AI</title>
        <meta name="description" content="Transform customer interactions with AcceloEdge dAIlogue - intelligent, 24/7 conversational AI that delivers instant support and drives engagement." />
        <meta name="keywords" content="AI chatbot, conversational AI, customer support, automation, live chat, AcceloEdge, dAIlogue" />
        <meta property="og:title" content="AcceloEdge dAIlogue" />
        <meta property="og:description" content="Intelligent conversational AI that transforms customer interactions and automates support." />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="chatbot-page">
        {/* Hero Section */}
        <section className="chatbot-hero section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title fade-in">
                  Meet Your New AI-Powered
                  <span className="text-primary"> Customer Support Assistant</span>
                </h1>
                <p className="hero-subtitle slide-up">
                  Transform customer interactions with intelligent conversational AI that provides instant,
                  accurate responses 24/7. Reduce support costs while delivering exceptional customer experiences.
                </p>
                <div className="hero-cta slide-up">
                  <Link to="/contact" className="btn btn-primary">
                    Get Started Today
                  </Link>
                  <Link to="/contact" className="btn btn-secondary">
                    Schedule Demo
                  </Link>
                </div>
              </div>
              <div className="hero-demo">
                <div className="chat-demo-container">
                  <div className="chat-window">
                    <div className="chat-header">
                      <div className="chat-header-info">
                        <div className="chat-avatar">
                          <div className="avatar-icon">🤖</div>
                        </div>
                        <div className="chat-title">
                          <h4>Mr Helpful</h4>
                          <span className="status online">Online</span>
                        </div>
                      </div>
                    </div>
                    <div className="chat-messages">
                      {chatMessages.slice(0, currentMessageIndex).map((message, index) => (
                        <div key={index} className={`message ${message.type}`}>
                          {(message.type === 'bot' || message.type === 'human') && (
                            <div className="message-avatar">
                              {message.type === 'bot' ? '🤖' : '👩‍💼'}
                            </div>
                          )}
                          {message.type === 'system' && (
                            <div className="system-message">
                              {message.text}
                            </div>
                          )}
                          {message.type !== 'system' && (
                            <div className="message-bubble">
                              {message.text}
                            </div>
                          )}
                          {message.type === 'user' && (
                            <div className="message-avatar user-avatar">🇺🇸</div>
                          )}
                        </div>
                      ))}
                      {isTyping && (
                        <div className="message bot">
                          <div className="message-avatar">🤖</div>
                          <div className="message-bubble typing">
                            <div className="typing-indicator">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Social Media Widgets */}
                  <div className="social-widget whatsapp-widget">
                    <div className="widget-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  <div className="social-widget facebook-widget">
                    <div className="widget-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  <div className="social-widget instagram-widget">
                    <div className="widget-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Chat Widget positioned outside bottom-right of chat window */}
                  <div className="chat-widget">
                    <div className="widget-icon">
                      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.85.846 5.506 2.3 7.724L2 30l6.276-2.3C10.494 29.154 13.15 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="white" />
                        <path d="M16 6c-5.523 0-10 4.477-10 10 0 1.821.487 3.53 1.338 5L6 24l3-1.338C10.47 23.513 12.179 24 14 24h2c5.523 0 10-4.477 10-10S21.523 6 16 6z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="notification-badge">1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Intelligent Features That Drive Results</h2>
              <p className="section-subtitle">
                dAIlogue combines advanced natural language processing with deep learning
                to deliver human-like conversations that convert visitors into customers.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🌙</div>
                <h3>24x7 Support</h3>
                <p>Never miss another customer inquiry with round-the-clock availability across all time zones and holidays.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>Knowledge-Based Responses</h3>
                <p>Accurately answers customer questions based on your knowledge base and documents, with seamless human handoff when complex issues require personal attention.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>Multi-Channel Support</h3>
                <p>Engage customers across multiple platforms with customizable widgets for websites, WhatsApp, Instagram, Facebook, and more. Includes multi-language support for global customer reach.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h3>Seamless Integration</h3>
                <p>Integrates with your existing CRM, helpdesk, and business tools for unified customer management.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Advanced Analytics</h3>
                <p>Track conversation metrics, customer satisfaction, and identify improvement opportunities.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Enterprise Security</h3>
                <p>Full compliance with GDPR, HIPAA, and other security standards to protect customer data and privacy.</p>
              </div>
            </div>
          </div>
        </section>



        {/* Use Cases Section */}
        <section className="use-cases-section section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Perfect for Every Industry</h2>
              <p className="section-subtitle">
                We customize dAIlogue to adapt to your domain-specific needs, industry terminology, and unique business processes for maximum effectiveness.
              </p>
            </div>
            <div className="use-cases-grid">
              <div className="use-case-card">
                <div className="use-case-icon">🛒</div>
                <h3>E-commerce</h3>
                <p>Guide customers through product selection, handle order inquiries, and provide shipping updates.</p>
              </div>
              <div className="use-case-card">
                <div className="use-case-icon">🏥</div>
                <h3>Healthcare</h3>
                <p>Schedule appointments, answer common medical questions, and provide patient support services.</p>
              </div>
              <div className="use-case-card">
                <div className="use-case-icon">🏦</div>
                <h3>Financial Services</h3>
                <p>Assist with account inquiries, loan applications, and provide financial guidance securely.</p>
              </div>
              <div className="use-case-card">
                <div className="use-case-icon">🎓</div>
                <h3>Education</h3>
                <p>Support student inquiries, course information, and administrative processes efficiently.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Frequently asked questions</h2>
            </div>
            <div className="faq-container">
              <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(0)}>
                  <span>How does the AI answer customer questions?</span>
                  <span className="faq-icon">{activeFaq === 0 ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>dAIlogue uses advanced natural language processing and machine learning to understand customer inquiries and provide accurate responses based on LLM models, and your knowledge base, documents, website and database.</p>
                </div>
              </div>

              <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(1)}>
                  <span>How can I have confidence in the AI's accuracy?</span>
                  <span className="faq-icon">{activeFaq === 1 ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>AI achieves high accuracy through multiple validation layers, real-time fact-checking against your knowledge base, and continuous learning from customer interactions.</p>
                  <p>While no AI system is perfect, our chatbot includes built-in safeguards such as seamless human handoff for complex queries. We continuously monitor performance metrics and refine the system based on real-world usage data.</p>
                </div>
              </div>

              <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(2)}>
                  <span>What platforms does dAIlogue support?</span>
                  <span className="faq-icon">{activeFaq === 2 ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>dAIlogue supports multiple platforms including website widgets, WhatsApp, Facebook Messenger, Instagram, and other popular messaging platforms. We can customize integrations based on your specific needs.</p>
                </div>
              </div>

              <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(3)}>
                  <span>Can dAIlogue handle complex customer issues?</span>
                  <span className="faq-icon">{activeFaq === 3 ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>Yes, dAIlogue can handle many complex inquiries. For issues that require human expertise, it seamlessly transfers the conversation to a human agent while maintaining full context of the conversation.</p>
                </div>
              </div>

              <div className={`faq-item ${activeFaq === 4 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(4)}>
                  <span>How long does it take to set up dAIlogue?</span>
                  <span className="faq-icon">{activeFaq === 4 ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>We help you set up your dAIlogue account in one day, to get you started with your AI-based customer support assistant journey.</p>
                </div>
              </div>

              <div className={`faq-item ${activeFaq === 5 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(5)}>
                  <span>Is my customer data secure with dAIlogue?</span>
                  <span className="faq-icon">{activeFaq === 5 ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>Absolutely. We maintain full compliance with GDPR, HIPAA, and other security standards to protect customer data and privacy. All conversations are encrypted and stored securely.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section section">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to Transform Your Customer Experience?</h2>
              <p>Join thousands of businesses already using AcceloEdge dAIlogue to deliver exceptional customer support.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Start Free Trial
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-large">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AIChatBot;