import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Products.css';

const AIScheduler = () => {
  return (
    <>
      <Helmet>
        <title>AI Scheduler | AcceloEdge — Smart Scheduling Solution</title>
        <meta name="description" content="Discover AcceloEdge AI Scheduler - Intelligent scheduling automation that optimizes appointments and manages calendars efficiently." />
        <meta name="keywords" content="AI scheduler, appointment scheduling, calendar automation, smart scheduling, AcceloEdge" />
        <meta property="og:title" content="AcceloEdge AI Scheduler" />
        <meta property="og:description" content="Smart scheduling solution that automates appointments and optimizes time management." />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="products">
        {/* Hero */}
        <section className="products-hero section">
          <div className="container">
            <div className="products-hero-content text-center fade-in">
              <h1 className="products-title">AI Scheduler</h1>
              <p className="products-subtitle slide-up">
                Smart scheduling solution that automates appointment booking, 
                optimizes calendar management, and streamlines time coordination.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-sm">
          <div className="container">
            <div className="text-center">
              <h2>Coming Soon</h2>
              <p>We're developing an intelligent scheduling system that will revolutionize how you manage appointments. Stay tuned!</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AIScheduler;