# IPP EGYPT React App

A modern, responsive React application for IPP EGYPT (International Printing & Packaging Materials Company) with RTL/LTR support and enhanced UI.

## Features

- 🌐 **Internationalization (i18n)**: Full support for English and Arabic languages
- 🔄 **RTL/LTR Support**: Automatic layout direction switching
- 🎨 **Modern UI**: Built with Tailwind CSS and Framer Motion animations
- 📱 **Responsive Design**: Mobile-first approach with responsive layouts
- ⚡ **Performance Optimized**: Fast loading with optimized images and code splitting
- 🎭 **Smooth Animations**: Engaging user experience with Framer Motion
- 🧩 **Component-Based**: Modular and reusable React components
- 🔧 **TypeScript**: Type-safe development

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: react-i18next
- **Icons**: Heroicons
- **Build Tool**: Create React App

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   └── Products.tsx    # Products section
├── hooks/              # Custom React hooks
│   └── useDirection.ts # RTL/LTR direction hook
├── i18n/               # Internationalization
│   ├── index.ts        # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── ar.json     # Arabic translations
├── types/              # TypeScript type definitions
├── data/               # Static data and constants
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd packeging-web-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Adding New Languages

1. Create a new translation file in `src/i18n/locales/` (e.g., `fr.json`)
2. Add the language to the resources in `src/i18n/index.ts`
3. Update the language switcher in the Header component

### Modifying Styles

The app uses Tailwind CSS for styling. You can:

- Modify the Tailwind configuration in `tailwind.config.js`
- Add custom CSS classes in `src/index.css`
- Use Tailwind utility classes directly in components

### Adding New Sections

1. Create a new component in `src/components/`
2. Add translations to the locale files
3. Import and use the component in `App.tsx`

## Components Overview

### Header
- Responsive navigation with mobile menu
- Language switcher (EN/AR)
- Smooth scroll to sections
- Contact information display

### Hero
- Eye-catching landing section
- Animated text and buttons
- Call-to-action buttons
- Background animations

### About
- Company introduction
- calippo production line showcase
- Video placeholder
- Image gallery

### Services
- Grid layout of services
- Icon-based service cards
- Hover animations
- Detailed descriptions

### Products
- Tabbed product categories
- Product image galleries
- Category switching
- Custom solution CTA

## RTL/LTR Support

The application automatically switches between RTL (Arabic) and LTR (English) layouts:

- Text direction changes
- Layout mirroring
- Font switching (Cairo for Arabic, Inter for English)
- Icon and spacing adjustments

## Performance Optimizations

- Lazy loading of components
- Optimized images with responsive sizes
- CSS purging in production
- Code splitting with React.lazy()
- Minimal bundle size

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE 11+ (with polyfills)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

**IPP EGYPT** - International Printing & Packaging Materials Company

- 📞 Phone: 0554413164 / 165 / 166
- 🌐 Website: [ippegypt.com](https://ippegypt.com)
- 📧 Email: info@ippegypt.com

---

Built with ❤️ for IPP EGYPT
