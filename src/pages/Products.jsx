import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

// Product data with image arrays (first product has multiple screenshots)
const products = [
  {
    id: 1,
    title: 'dAIlogue',
    link: '/ai-chatbot',
    images: [
      '/AI chatbot.png',
      '/Chatbot main.jpeg',
      '/Admin%20Dashbord%20(Main)%2013.15.26.png',
      '/Chatbot%20performance%2013.15.26.png',
      '/Knowledge-base%20management%2013.15.26.png'
    ],
    description: 'Intelligent conversational AI that provides 24/7 customer support, answers questions instantly, and seamlessly hands off complex issues to human agents when needed.'
  },
  {
    id: 2,
    title: 'AI Scheduler',
    link: '/ai-scheduler',
    images: [
      '/WhatsApp.jpeg',
      '/Schedular calendar.jpeg',
      '/Connect calendar.png',
      '/Admin overview.png'
    ],
    description: '24/7 conversational assistant that triages, resolves FAQs, and escalates complex issues with full context retention.'
  },
  {
    id: 3,
    title: 'Lead Qualification Bot',
    images: ['/homepage.avif'],
    description: 'Automates inbound lead capture, qualification, scoring, and CRM enrichment so your sales team focuses on the highest intent prospects.'
  },
  {
    id: 4,
    title: 'Document Processing Engine',
    images: ['/homepage.avif'],
    description: 'Ingests invoices, contracts, and structured forms extracting key fields with validation and audit logging.'
  },
  {
    id: 5,
    title: 'Analytics Insight Generator',
    images: ['/homepage.avif'],
    description: 'Turns raw operational data into proactive alerts and plain‑language summaries for decision makers.'
  },
  {
    id: 6,
    title: 'Marketing Content Assistant',
    images: ['/homepage.avif'],
    description: 'Generates on-brand copy variants, repurposes long-form material, and tags assets for reuse with governance controls.'
  }
];

const Products = () => {
  // Multi-slider support: attach arrow handlers for each slider instance
  useEffect(() => {
    const sliders = Array.from(document.querySelectorAll('.image-slider'));
    const cleanups = [];
    
    sliders.forEach(slider => {
      const track = slider.querySelector('.image-slider-track');
      const slides = Array.from(slider.querySelectorAll('.slide'));
      const prev = slider.querySelector('.slider-arrow.prev');
      const next = slider.querySelector('.slider-arrow.next');
      
      if (!track || slides.length === 0) return;
      
      let currentIndex = 0;
      
      const updateArrows = () => {
        if (prev) {
          prev.classList.toggle('disabled', currentIndex === 0);
          prev.setAttribute('aria-disabled', currentIndex === 0 ? 'true' : 'false');
        }
        if (next) {
          next.classList.toggle('disabled', currentIndex >= slides.length - 1);
          next.setAttribute('aria-disabled', currentIndex >= slides.length - 1 ? 'true' : 'false');
        }
      };
      
      const scrollToIndex = (index) => {
        const newIndex = Math.max(0, Math.min(slides.length - 1, index));
        currentIndex = newIndex;
        const slideWidth = track.offsetWidth;
        track.scrollTo({ 
          left: slideWidth * newIndex, 
          behavior: 'smooth' 
        });
        updateArrows();
      };
      
      const onPrev = (e) => {
        e.preventDefault();
        if (currentIndex > 0) {
          scrollToIndex(currentIndex - 1);
        }
      };
      
      const onNext = (e) => {
        e.preventDefault();
        if (currentIndex < slides.length - 1) {
          scrollToIndex(currentIndex + 1);
        }
      };
      
      if (prev) prev.addEventListener('click', onPrev);
      if (next) next.addEventListener('click', onNext);
      
      // Initialize arrows state
      updateArrows();
      
      // Mark arrows disabled if only one slide
      if (slides.length < 2) {
        if (prev) { prev.classList.add('disabled'); prev.setAttribute('aria-disabled', 'true'); }
        if (next) { next.classList.add('disabled'); next.setAttribute('aria-disabled', 'true'); }
      }
      
      cleanups.push(() => {
        if (prev) prev.removeEventListener('click', onPrev);
        if (next) next.removeEventListener('click', onNext);
      });
    });
    
    return () => { cleanups.forEach(fn => fn()); };
  }, []);
  return (
    <>
      <Helmet>
        <title>Products | AcceloEdge — AI-Powered Solutions</title>
        <meta name="description" content="Explore AcceloEdge AI products: workflow automation, customer support, analytics, and more." />
        <meta name="keywords" content="AI products, automation tools, customer support AI, workflow orchestration" />
        <meta property="og:title" content="AcceloEdge AI Products" />
        <meta property="og:description" content="Explore our suite of intelligent automation products for growing businesses." />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="products">
        {/* Hero */}
        <section className="products-hero section">
          <div className="container">
            <div className="products-hero-content text-center fade-in">
              <h1 className="products-title">Our Products</h1>
              <p className="products-subtitle slide-up">Modular AI solutions that accelerate operations, enhance customer experience, and unlock insight.</p>
            </div>
          </div>
        </section>

        {/* Product Grid (alternating layout similar to About/Mission style) */}
        <section className="products-list section-sm">
          <div className="container">
            <div className="products-grid">
              {products.map((p, idx) => (
                <div key={p.id} className={`product-row ${idx % 2 === 1 ? 'reverse' : ''}`}>
                  <div className="product-image-wrapper">
                    <div className="product-image-card">
                      <div className="image-slider" aria-label={`${p.title} screenshots`}>
                        <button className="slider-arrow prev" aria-label="Previous screenshot" data-dir="-1">‹</button>
                        <div className="image-slider-track">
                          {p.images.map((src, i) => (
                            <div className="slide" key={i}><img src={src} alt={`${p.title} screenshot ${i + 1}`} loading="lazy" /></div>
                          ))}
                        </div>
                        <button className="slider-arrow next" aria-label="Next screenshot" data-dir="1">›</button>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    {p.link ? (
                      <Link to={p.link} className="product-name-link">
                        <h2 className="product-name">{p.title}</h2>
                      </Link>
                    ) : (
                      <h2 className="product-name">{p.title}</h2>
                    )}
                    <p className="product-description">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Products;
