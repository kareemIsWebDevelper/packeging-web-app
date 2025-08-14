import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDirection } from './hooks/useDirection';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Certificates from './components/Certificates';
import SuccessPartners from './components/SuccessPartners';
import Machinery from './components/Machinery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import i18n
import './i18n';

const MainContent: React.FC = () => {
  const { direction } = useDirection();

  return (
    <div className={`min-h-screen ${direction === 'rtl' ? 'font-arabic' : 'font-english'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <SuccessPartners />
        <Machinery />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to default language */}
        <Route path="/" element={<Navigate to="/en/home" replace />} />
        
        {/* Language-based routes */}
        <Route path="/:lang/home" element={<MainContent />} />
        <Route path="/:lang" element={<Navigate to="home" replace />} />
        
        {/* Fallback for any other route */}
        <Route path="*" element={<Navigate to="/en/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
