# AcceloEdge - AI Automation Agency Website

A modern, responsive React website for an AI automation agency built with Vite, React Router, and React Helmet Async.

## 🚀 Features

- **Modern Design**: Clean, professional design based on the AcceloEdge template
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: React Helmet Async for dynamic meta tags and titles
- **Fast Navigation**: React Router for smooth page transitions
- **Contact Form**: Integrated contact form with n8n webhook support
- **Google Analytics**: GA4 integration ready
- **Accessibility**: WCAG compliant with proper semantic HTML

## 📁 Project Structure

```
acceloedge-website/
├── public/
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── About.css
│   │   └── Contact.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone or download the project**
   ```bash
   cd acceloedge-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## ⚙️ Configuration

### Environment variables
- VITE_N8N_WEBHOOK_PATH
   - What: Absolute URL to your n8n Webhook (Production URL, e.g., https://n8n.yourdomain.com/webhook/contact-form)
   - When required: At production build/deploy time
   - Behavior if missing: Contact form submit is disabled (intended for local dev)


### Google Analytics
1. Open `index.html`
2. Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 Measurement ID
3. Uncomment the Google Analytics script if needed

### Contact Form (n8n Webhook)
1. Open `src/pages/Contact.jsx`
2. Production-only configuration: Set an absolute URL in your deployment environment so the site can submit directly to n8n.

   VITE_N8N_WEBHOOK_PATH=https://n8n.yourdomain.com/webhook/contact-form

   Notes:
   - Use the Webhook node’s Production URL (workflow activated), which uses `/webhook/...` (not `/webhook-test/...`).
   - If this variable isn’t set at build time, the Contact form submit button will be disabled (intended for local dev).
   - No dev proxy is used; browser calls go directly to your n8n endpoint in production.

3. Local development: Submissions are disabled by design. This keeps local dev simple and avoids CORS. If you must test locally, set `VITE_N8N_WEBHOOK_PATH` to a local n8n absolute URL and restart the dev server.

### Favicon
- Replace `public/favicon.svg` with your custom favicon
- Update favicon references in `index.html` if using different formats

## 🎨 Customization

### Colors
The color palette is defined in `src/styles/global.css` using CSS custom properties:
```css
:root {
  --primary-color: #2d5a4f;
  --primary-light: #3d6b5f;
  --primary-dark: #1d4a3f;
  --accent-color: #4ade80;
  /* ... more colors */
}
```

### Typography
The website uses Inter font from Google Fonts. You can change this in `index.html` and update the font-family in `global.css`.

### Content
- **Home Page**: Edit `src/pages/Home.jsx` to update hero content, use cases, and benefits
- **About Page**: Edit `src/pages/About.jsx` to update mission, team members, and company info
- **Contact Page**: Edit `src/pages/Contact.jsx` to update contact information and FAQ

## 🚀 Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
 4. Add environment variable in Vercel Project Settings → Environment Variables:
    - KEY: `VITE_N8N_WEBHOOK_PATH`
    - VALUE: `https://n8n.yourdomain.com/webhook/contact-form`
    - Scope: Production (and Preview if needed)
 5. Redeploy for changes to take effect

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments
 4. In Netlify Site Settings → Environment variables, add:
    - KEY: `VITE_N8N_WEBHOOK_PATH`
    - VALUE: `https://n8n.yourdomain.com/webhook/contact-form`
 5. Trigger a new deploy

### Other Platforms
The built files are in the `dist` folder after running `npm run build`. Upload these files to any static hosting service.

## 📱 Pages

### Home Page
- Hero section with value proposition
- Benefits of AI automation
- Industry use cases (8 different sectors)
- Data security features
- Partnership benefits
- Call-to-action section

### About Page
- Company mission and values
- Team member profiles with LinkedIn links
- 5-step approach methodology
- Core values with icons

### Contact Page
- Contact form with validation
- Company contact information
- FAQ section
- Success/error message handling

## 🔧 Technical Details

- **React**: 18.3.1
- **Vite**: 7.1.1
- **React Router DOM**: 6.30.1
- **React Helmet Async**: 2.0.5
- **CSS**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Inline SVG icons
- **Responsive**: Mobile-first approach with CSS media queries

## 📞 Support

For questions about this website template or customization needs, please contact:
- Email: business@acceloedge.com
- Phone: +46 765069770

## 📄 License

This project is created for AcceloEdge AI Automation Agency. All rights reserved.

---

Built with ❤️ using React and Vite

