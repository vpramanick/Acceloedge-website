import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const useCases = [
    {
      title: "Retail & Small Shops",
      description: "AI cash register assistants, inventory alerts, and personalized product recommendations.",
      outcome: "Faster checkouts, lower stockouts, and increased sales through smart upselling."
    },
    
    {
      title: "Human Resources",
      description: "AI agents for candidate screening, interview scheduling, onboarding workflows, and employee FAQs.",
      outcome: "Shorter hiring cycles, consistent onboarding, and better employee experience with minimal HR overhead."
    },
    {
      title: "Social Media & Content Strategy",
      description: "AI agents to generate content ideas, write and schedule posts, analyze engagement, and reply to comments/messages.",
      outcome: "Stronger brand presence with consistent output and real-time audience interaction—without hiring a full-time marketer."
    },
    
    {
      title: "Real Estate",
      description: "Virtual property tour schedulers and lead qualification bots on your website or WhatsApp.",
      outcome: "More engaged leads, fewer missed opportunities, and agents spend more time closing deals."
    },
    {
      title: "Healthcare & Wellness Clinics",
      description: "Appointment management bots, post-visit follow-ups, and AI-based symptom checkers.",
      outcome: "Improved patient retention and operational efficiency with fewer front-desk calls."
    },
    {
      title: "Education & Coaching",
      description: "Virtual teaching assistants that handle student FAQs, progress tracking, and personalized content delivery.",
      outcome: "Higher engagement and retention with scalable, customized support."
    }
  ];

  const benefits = [
    {
      title: "Reduces Repetitive Workload",
      description: "AI agents automate routine tasks—saving time and reducing burnout."
    },
    {
      title: "Boosts Speed & Accuracy",
      description: "AI delivers real-time responses, accurate data handling, and faster decision-making."
    },
    {
      title: "Improves Customer Experience",
      description: "Deliver consistent, 24/7 engagement across channels like chat, email, and social media."
    },
    {
      title: "Increases Profitability",
      description: "Lower operational costs and streamline processes to reinvest in growth."
    },
    {
      title: "Scales Easily",
      description: "AI adapts to handle peak demands without hiring additional staff."
    },
    {
      title: "Supports Remote & Flexible Operations",
      description: "AI-powered self-service tools allow businesses to offer 24/7 support, regardless of physical location."
    },
  ];

  const partnershipBenefits = [
    {
      title: "Consultative, Problem-First Approach",
      description: "We don't sell off-the-shelf bots. We start by understanding your unique workflows, pain points, and business goals—then design AI solutions that solve real problems and unlock measurable value."
    },
    {
      title: "Domain-Focused Expertise",
      description: "From retail to logistics, we bring deep knowledge of your industry to ensure relevant and effective automation."
    },
    {
      title: "Seamless Tech Integration",
      description: "We integrate AI agents directly into your tools—whether it's your CRM, POS, WhatsApp, website, or ERP—so you don't have to change how you work."
    },
    {
      title: "Results You Can Measure",
      description: "We define clear KPIs from the start and track impact so you see ROI in cost savings, time saved, or increased conversions."
    },
    {
      title: "Continuous Optimization",
      description: "AI agents are not 'set and forget.' We continuously monitor and refine them to adapt as your business grows or changes."
    },
    {
      title: "End-to-End Partnership",
      description: "From idea to deployment to ongoing support, we're with you at every step—ensuring your automation journey is smooth, secure, and scalable."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Home | AcceloEdge — AI Automation for Small Business</title>
        <meta name="description" content="Empowering small businesses to work smarter through tailored AI workflows." />
        <meta name="keywords" content="AI automation, small business, workflow optimization, AcceloEdge" />
        <meta property="og:title" content="AcceloEdge: AI for Small Business" />
        <meta property="og:description" content="Transform your business with intelligent AI agents and automation." />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title fade-in">
                  Transform Your Business
                </h1>
                <p className="hero-subtitle slide-up">
                  Empowering Small Businesses Through AI Automation
                </p>
                <p className="hero-description slide-up">
                  Unlock Efficiency, Scale Smartly, and Stay Ahead with Tailored AI Solutions. 
                  In today's digital-first economy, small businesses must do more with less—without 
                  compromising quality, speed, or customer experience.
                </p>
                <div className="hero-cta slide-up">
                  <Link to="/contact" className="btn btn-primary btn-large">
                    Get Free Consultation
                  </Link>
                  <Link to="/about" className="btn btn-secondary btn-large">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="hero-image">
                <div className="hero-image-placeholder">
                  <img src="/AI-agents.jpg" alt="Business strategy" className="hero-photo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">How AI Automation Adds Value to Small Businesses</h2>
              <p className="section-description">
                We specialize in building intelligent, secure AI agents that automate everyday workflows, 
                giving small businesses the power to compete at enterprise scale.
              </p>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card card hover-lift">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="use-cases section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Industry Use Cases</h2>
              <p className="section-description">
                Discover how AI automation transforms operations across different industries. These are just some of the possibilities out of many:
              </p>
            </div>
            <div className="use-cases-grid">
              {useCases.map((useCase, index) => (
                <div key={index} className="use-case-card card hover-lift">
                  <h3 className="use-case-title">{useCase.title}</h3>
                  <p className="use-case-description">{useCase.description}</p>
                  <div className="use-case-outcome">
                    <strong>Outcome:</strong> {useCase.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Partnership Section */}
        <section className="partnership section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Why Partner With Us</h2>
              <p className="section-description">
                Experience the difference of working with AI automation experts who truly understand your business
              </p>
            </div>
            <div className="partnership-grid">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="partnership-card card hover-lift">
                  <h3 className="partnership-title">{benefit.title}</h3>
                  <p className="partnership-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section section">
          <div className="container">
            <div className="cta-content text-center">
              <h2 className="cta-title">Ready to Transform Your Business?</h2>
              <p className="cta-description">
                Get started with a free consultation and discover how AI automation can revolutionize your operations.
              </p>
              <Link to="/contact" className="btn btn-accent btn-large">
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

