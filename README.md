# Automata.ai Marketing Site

This is a production-ready marketing site for Automata.ai, built with React, Vite, TypeScript, and TailwindCSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
/src
  /components    # Reusable UI components (Navbar, Cards, Modals)
  /sections      # Page sections (Hero, Features, Pricing, etc.)
  /pages         # Route pages (Home, NotFound)
  /lib           # Utilities and helpers
  App.tsx        # Main application entry
  main.tsx       # DOM mounting
/assets          # Static assets and generated images
```

## 🎨 Design System

- **Font**: Inter (Google Fonts)
- **Accent Color**: Cyan (`#00D1FF`)
- **Background**: Light Neutral (`#FAFBFC`) / Dark (`#0F172A`)
- **Corner Radius**: `10px` (`0.625rem`)

## 🚢 Deployment

To build for production:

```bash
npm run build
```

The output will be in the `dist` directory, ready to be deployed to Vercel, Netlify, or any static host.

## 📝 Form Handling

The contact and internship forms are currently wired to mock endpoints. To connect them to a real backend:

1.  **Contact Form**: Update `client/src/components/ContactForm.tsx` to send a POST request to your API or Formspree endpoint.
2.  **Internship Form**: Update `client/src/components/InternshipForm.tsx` to handle file uploads (currently mocks the delay).

## 🔍 SEO

Meta tags are configured in `client/index.html`. Ensure you update the `og:image` content attribute with a real URL when deploying.

---

*Built for Automata.ai*
---
