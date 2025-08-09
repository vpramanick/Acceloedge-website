import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/About.css';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const teamMembers = [
    {
      name: "Vivek Pramanick",
      role: "Product and Growth",
      bio: "With over 14 years in tech, product management & enterprise automation, Vivek leads our strategic vision and client partnerships. He holds an MBA and an engineering degree, passionate about leveraging AI to drive business transformation. He has previously worked with top companies like Scania, Electrolux, Marks and Spencer and Tata Consultancy Services.",
      linkedin: "https://linkedin.com/in/vivek-pramanick-24a4a822",
      image: "/vivek-pic.jpg"
    },
    {
      name: "Soma Saha",
      role: "Tech",
      bio: "Soma brings 12 years of experience in software architecture. Formerly worked at Telia Finance, IBM, Dell and Accenture, she specializes in building scalable systems that integrate seamlessly with existing business workflows.",
      linkedin: "https://www.linkedin.com/in/soma-saha-9b25b527",
      image: "/picsoma.jpeg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About | AcceloEdge — AI Automation for Small Business</title>
        <meta name="description" content="Learn about AcceloEdge, our mission, and how we help small businesses harness AI automation." />
        <meta name="keywords" content="About AcceloEdge, AI automation, small business mission, AI consulting" />
        <meta property="og:title" content="About AcceloEdge — AI Automation Experts" />
        <meta property="og:description" content="Discover our vision and team dedicated to empowering small businesses with AI automation solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="about">
        {/* Hero Section */}
        <section className="about-hero section">
          <div className="container">
            <div className="about-hero-content text-center">
              <h1 className="about-title fade-in">About AcceloEdge</h1>
              <p className="about-subtitle slide-up">
                Transforming Small Businesses Through Intelligent Automation
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission section">
          <div className="container">
            <div className="mission-content">
              <div className="mission-text">
                <h2 className="section-title">Our Mission</h2>
                <div className="mission-description">
                  <p>
                    At AcceloEdge, we believe that every small business deserves access to the same powerful 
                    automation tools that enterprise companies use to scale and compete. Our mission is to 
                    democratize AI technology by making it accessible, affordable, and actionable for 
                    businesses of all sizes.
                  </p>
                  <p>
                    We don't just build AI agents—we craft intelligent solutions that understand your unique 
                    business challenges and integrate seamlessly into your existing workflows. Our approach 
                    is consultative, collaborative, and results-driven, ensuring that every automation we 
                    implement delivers measurable value from day one.
                  </p>
                  <p>
                    Founded on the principle that technology should empower people, not replace them, we 
                    focus on automating repetitive tasks so your team can concentrate on what they do 
                    best—building relationships, solving complex problems, and driving innovation.
                  </p>
                </div>
              </div>
              <div className="mission-image">
                <div className="mission-image-placeholder">
                  {/* Using /public/mission.jpg */}
                  <img src="/mission.jpg" alt="Our mission" className="mission-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-description">
                The principles that guide everything we do
              </p>
            </div>
            <div className="values-grid">
              <div className="value-card card hover-lift">
                <div className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <h3 className="value-title">Customer Success</h3>
                <p className="value-description">
                  Your success is our success. We're committed to delivering solutions that not only meet 
                  your immediate needs but also scale with your business as it grows.
                </p>
              </div>
              <div className="value-card card hover-lift">
                <div className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  We stay at the forefront of AI technology, continuously learning and adapting to bring 
                  you the most effective and cutting-edge automation solutions.
                </p>
              </div>
              <div className="value-card card hover-lift">
                <div className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="value-title">Security First</h3>
                <p className="value-description">
                  Your data security is our top priority. We implement robust security measures 
                  and ensure full compliance with industry standards and regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-description">
                The experts behind your AI automation success
              </p>
            </div>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card card hover-lift">
                  <div className="team-image">
                    <div className={`team-photo ${member.image}`}>
                      <div className="photo-placeholder">
                        <img src={member.image} alt={member.name} className="team-photo" />
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="approach section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="section-description">
                How we ensure your AI automation project succeeds
              </p>
            </div>
            <div className="approach-steps">
              <div className="step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3 className="step-title">Discovery & Analysis</h3>
                  <p className="step-description">
                    We start by deeply understanding your business processes, pain points, and goals. 
                    Through detailed workshops and analysis, we identify the highest-impact automation opportunities.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3 className="step-title">Custom Solution Design</h3>
                  <p className="step-description">
                    Based on our findings, we design AI agents tailored to your specific needs. 
                    Every solution is custom-built to integrate seamlessly with your existing tools and workflows.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3 className="step-title">Development & Testing</h3>
                  <p className="step-description">
                    Our expert team builds and rigorously tests your AI agents in a controlled environment, 
                    ensuring they meet your requirements and perform reliably under real-world conditions.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3 className="step-title">Deployment & Training</h3>
                  <p className="step-description">
                    We handle the complete deployment process and provide comprehensive training to your team, 
                    ensuring smooth adoption and maximum value from your new AI automation.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">05</div>
                <div className="step-content">
                  <h3 className="step-title">Ongoing Optimization</h3>
                  <p className="step-description">
                    Our partnership doesn't end at deployment. We continuously monitor performance, 
                    gather feedback, and optimize your AI agents to adapt to changing business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta section">
          <div className="container">
            <div className="cta-content text-center">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-description">
                Let's discuss how AI automation can transform your business operations and drive sustainable growth.
              </p>
              <Link to="/contact" className="btn btn-accent btn-large">
                Schedule Your Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};



export default About;

