import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  GlobeAltIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { images } from '../assets/images';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const scrollToTop = () => {
    console.log('Scroll to top clicked'); // Debug log
    // Try multiple approaches for better compatibility
    try {
      // Method 1: Modern smooth scroll
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    } catch (error) {
      // Method 2: Fallback for older browsers
      window.scrollTo(0, 0);
    }
    
    // Method 3: Alternative approach using document element
    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const footerSections = [
    {
      title: isRTL ? 'روابط سريعة' : 'Quick Links',
      links: [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.services'), href: '#services' },
        { name: t('nav.products'), href: '#products' },
        { name: t('nav.machinery'), href: '#machinery' },
        { name: t('nav.certificates'), href: '#certificates' },
        { name: t('nav.contact'), href: '#contact' }
      ]
    },
    {
      title: isRTL ? 'خدماتنا' : 'Our Services',
      links: [
        { name: isRTL ? 'طباعة الكرتون' : 'Carton Printing', href: '#services' },
        { name: isRTL ? 'التغليف المرن' : 'Flexible Packaging', href: '#services' },
        { name: isRTL ? 'المواد الخام' : 'Raw Materials', href: '#services' },
        { name: isRTL ? 'الحلول المخصصة' : 'Custom Solutions', href: '#services' },
        { name: isRTL ? 'الاستشارات' : 'Consulting', href: '#contact' }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: isRTL ? 'الهاتف' : 'Phone',
      value: '0554413164 / 165 / 166',
      link: 'tel:+20554413164'
    },
    {
      icon: EnvelopeIcon,
      title: isRTL ? 'البريد الإلكتروني' : 'Email',
      value: 'Sales@ipp-egypt.com',
      link: 'mailto:Sales@ipp-egypt.com'
    },
    {
      icon: MapPinIcon,
      title: isRTL ? 'العنوان' : 'Address',
      value: 'Industrial Area A2, 10th Of Ramadan 1060',
      link: 'https://maps.app.goo.gl/G1bbaZhsjTj2p6198'
    },
    // {
    //   icon: ClockIcon,
    //   title: isRTL ? 'ساعات العمل' : 'Working Hours',
    //   value: isRTL ? 'الأحد - الخميس: 8:00 - 17:00' : 'Sun - Thu: 8:00 AM - 5:00 PM',
    //   link: null
    // }
  ];

  // const socialLinks = [
  //   { 
  //     name: 'Facebook', 
  //     href: '#', 
  //     label: 'Facebook', 
  //     color: 'hover:text-blue-500',
  //     symbol: 'f'
  //   },
  //   { 
  //     name: 'Twitter', 
  //     href: '#', 
  //     label: 'Twitter', 
  //     color: 'hover:text-sky-400',
  //     symbol: '𝕏'
  //   },
  //   { 
  //     name: 'LinkedIn', 
  //     href: '#', 
  //     label: 'LinkedIn', 
  //     color: 'hover:text-blue-600',
  //     symbol: 'in'
  //   },
  //   { 
  //     name: 'Instagram', 
  //     href: '#', 
  //     label: 'Instagram', 
  //     color: 'hover:text-pink-500',
  //     symbol: '📷'
  //   },
  //   { 
  //     name: 'WhatsApp', 
  //     href: 'https://wa.me/20554413164', 
  //     label: 'WhatsApp', 
  //     color: 'hover:text-green-500',
  //     symbol: '💬'
  //   }
  // ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 z-20 border-4 border-white"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </motion.button>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <img
                src={images.logo}
                alt="IPP EGYPT"
                className="h-16 w-auto mb-4"
                // className="h-16 w-auto mb-4 filter brightness-0 invert"
              />
              <h3 className="text-xl font-bold mb-3">
                {isRTL ? 'شركة المواد الدولية للطباعة والتغليف' : 'IPP EGYPT'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {isRTL 
                  ? 'نحن رواد في صناعة التغليف والطباعة في مصر، نقدم حلولاً مبتكرة وعالية الجودة لعملائنا.'
                  : 'Leading packaging and printing industry in Egypt, providing innovative and high-quality solutions to our clients.'
                }
              </p>
            </div>

            {/* Social Media Links */}
            {/* <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-all duration-300 text-xl w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center font-bold`}
                  aria-label={social.label}
                >
                  {social.symbol}
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-blue-400">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 rtl:mr-0 rtl:ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              {isRTL ? 'معلومات الاتصال' : 'Contact Info'}
            </h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse group">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300 mb-1">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-2xl p-6 mb-8 backdrop-blur-sm border border-blue-500/20"
        >
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2">
              {isRTL ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
            </h4>
            <p className="text-gray-300 mb-4">
              {isRTL 
                ? 'احصل على آخر الأخبار والعروض والمنتجات الجديدة'
                : 'Get the latest news, offers, and new products'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                {isRTL ? 'اشتراك' : 'Subscribe'}
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4 md:mb-0">
              <GlobeAltIcon className="w-5 h-5 text-blue-400" />
              <p className="text-gray-400 text-sm">
                © 2025 IPP EGYPT. {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
              </p>
            </div>
            {/* <div className="flex space-x-6 rtl:space-x-reverse text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                {isRTL ? 'خريطة الموقع' : 'Sitemap'}
              </button>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
