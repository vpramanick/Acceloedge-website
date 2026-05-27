# AcceloEdge - AI Automation Agency Website

A modern, responsive React website for an AI automation agency built with Vite, React Router, and React Helmet Async.

## 🚀 Features

- **Modern Design**: Clean, professional design based on the AcceloEdge template
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: React Helmet Async for dynamic meta tags and titles
- **Fast Navigation**: React Router for smooth page transitions
- **Contact Form**: Built-in contact form with client-side submission and success/error states
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

### Google Analytics
1. Open `index.html`
2. Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 Measurement ID
3. Uncomment the Google Analytics script if needed

### Contact Form
The contact form is wired for client-side submission only (no external services). It displays a loading state and then a success or error message. Replace the submit logic in `src/pages/Contact.jsx` with your preferred backend call if needed.

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
 4. Deploy. No environment variables are required for the default setup.

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments
 4. Deploy. No environment variables are required for the default setup.

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

## 📄 License

This project is created for AcceloEdge AI Automation Agency. All rights reserved.

---

Built with ❤️ using React and Vite

