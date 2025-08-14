import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { images } from '../assets/images';
import YouTubeVideo from './YouTubeVideo';

const About: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">
                {t('about.subtitle')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
            </div>
          </motion.div>

          {/* Company Video */}
          <motion.div variants={itemVariants} className="relative">
            <YouTubeVideo 
              videoUrl={images.companyVideo}
              title={t('about.videoTitle', 'IPP EGYPT - Company Overview')}
            />
          </motion.div>
        </motion.div>

        {/* Calibo Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center mt-20"
        >
          {/* Calibo Images */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(images.calippo).map(([key, src], index) => (
                <motion.div
                  key={key}
                  className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={src}
                    alt={t(`about.imageAlt.${key}`, `CALIPO Machine ${index + 1}`)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Calibo Content */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.calipoTitle')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.calipoDescription')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
