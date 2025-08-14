import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: t('contact.phone'),
      value: '0554413164 / 165 / 166',
      link: 'tel:+20554413164',
      description: 'Call us for immediate assistance'
    },
    {
      icon: EnvelopeIcon,
      title: t('contact.email'),
      value: 'Sales@ipp-egypt.com',
      link: 'mailto:Sales@ipp-egypt.com',
      description: 'Send us your inquiries'
    },
    {
      icon: MapPinIcon,
      title: t('contact.address'),
      value: 'Industrial Area A2, 10th Of Ramadan 1060',
      link: 'https://maps.app.goo.gl/G1bbaZhsjTj2p6198',
      description: 'Visit our facility'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Here you would normally handle form submission
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('contact.getInTouch')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-5 h-fit"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {isRTL ? 'أرسل لنا رسالة إلكترونية' : 'Send Us an Email'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  {isRTL ? 'اسمك' : 'Your Name'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={isRTL ? 'اسمك' : 'Your name'}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {isRTL ? 'عنوان البريد الإلكتروني' : 'Email Address'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={isRTL ? 'your@email.com' : 'your@email.com'}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={isRTL ? '+20 123 456 7890' : '+20 123 456 7890'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {isRTL ? 'الرسالة' : 'Message'}
                </label>
                <div className="text-xs text-gray-500 mb-1">
                  {isRTL ? '0 / 180 حرف' : '0 / 180 characters'}
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={180}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 mt-3 ${
                  formSubmitted 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                disabled={formSubmitted}
              >
                {formSubmitted 
                  ? (isRTL ? 'تم الإرسال!' : 'Submitted!') 
                  : (isRTL ? 'إرسال' : 'Submit')
                }
              </motion.button>
            </form>

            {/* Project CTA - Moved under form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-3 border-t-2 pt-2"
            >
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-4 text-white">
                <h3 className="text-lg font-bold mb-2">
                  {isRTL ? 'هل لديك مشروع في الذهن؟' : 'Have a Project in Mind?'}
                </h3>
                <p className="text-blue-100 mb-3 text-sm">
                  {isRTL 
                    ? 'نحن هنا لمساعدتك في تحقيق أهدافك في التعبئة والتغليف. اتصل بنا اليوم لمناقشة مشروعك.'
                    : 'We\'re here to help you achieve your packaging goals. Contact us today to discuss your project requirements.'
                  }
                </p>
                <motion.a
                  href="tel:+20554413164"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 text-sm"
                >
                  <PhoneIcon className="w-4 h-4 me-2" />
                  {isRTL ? 'اتصل بنا الآن' : 'Call Us Now'}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information & Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {isRTL ? 'اتصل بنا' : 'Contact Us'}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 rtl:space-x-reverse group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
                      >
                        {item.value}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-4 pb-0">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {isRTL ? 'موقعنا' : 'Our Location'}
                </h3>
              </div>
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.5768132801977!2d31.7816428!3d30.277636700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fd00659330fb%3A0x38e60d9ca069618b!2z2KfZhNi52KfZhNmF2YrYqSDZhNmE2LfYqNin2LnYqdmI2KfZhNiq2LrZhNmK2YE!5e0!3m2!1sen!2seg!4v1753144775767!5m2!1sen!2seg"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-2xl"
                  title="IPP EGYPT Location - Industrial Area A2, 10th Of Ramadan 1060"
                ></iframe>
                {/* Map overlay for better interaction */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
