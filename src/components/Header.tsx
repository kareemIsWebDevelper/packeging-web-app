import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '../hooks/useDirection';
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { images } from '../assets/images';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL, toggleLanguage } = useDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = useMemo(() => [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'products', href: '#products' },
    { key: 'customers', href: '#customers' },
    { key: 'machinery', href: '#machinery' },
    { key: 'certificates', href: '#certificates' },
    { key: 'contact', href: '#contact' },
  ], []);

  // Effect to handle scroll detection and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.key);
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                <span>📞</span>
                <span>0554413164 / 165 / 166</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-md bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors"
              >
                <LanguageIcon className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {isRTL ? 'English' : 'العربية'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={images.logo}
              alt="IPP EGYPT"
              className="h-12 md:h-16 w-auto"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors relative group ${
                  activeSection === item.key
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {t(`nav.${item.key}`)}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${
                    activeSection === item.key
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md bg-primary-100 text-primary-700"
            >
              <LanguageIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-gray-100 text-gray-700"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                  activeSection === item.key
                    ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
