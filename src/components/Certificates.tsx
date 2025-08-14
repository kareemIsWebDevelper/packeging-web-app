import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { images } from '../assets/images';

interface CertificateItem {
  id: string;
  src: string;
  title: string;
  titleAr: string;
}

const Certificates: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const certificates: CertificateItem[] = [
    {
      id: 'brc',
      src: images.certificates.brc,
      title: 'BRC Global Standard',
      titleAr: 'شهادة BRC العالمية'
    },
    {
      id: 'iso1',
      src: images.certificates.iso1,
      title: 'ISO Certificate 1',
      titleAr: 'شهادة ISO 1'
    },
    {
      id: 'iso2',
      src: images.certificates.iso2,
      title: 'ISO Certificate 2',
      titleAr: 'شهادة ISO 2'
    },
    {
      id: 'iso3',
      src: images.certificates.iso3,
      title: 'ISO Certificate 3',
      titleAr: 'شهادة ISO 3'
    }
  ];

  const openLightbox = (certificate: CertificateItem) => {
    setSelectedCertificate(certificate);
  };

  const closeLightbox = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('certificates.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('certificates.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(certificate)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={certificate.src}
                    alt={isRTL ? certificate.titleAr : certificate.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t('certificates.view')}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 text-center">
                    {isRTL ? certificate.titleAr : certificate.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
                <img
                  src={selectedCertificate.src}
                  alt={isRTL ? selectedCertificate.titleAr : selectedCertificate.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-white">
                    {isRTL ? selectedCertificate.titleAr : selectedCertificate.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
