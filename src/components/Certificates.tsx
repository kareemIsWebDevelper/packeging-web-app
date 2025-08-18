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
  isPdf?: boolean;
}

const Certificates: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const certificates: CertificateItem[] = [
    {
      id: 'fssc22000',
      src: images.certificates.fssc22000,
      title: 'FSSC 22000 Certificate',
      titleAr: 'شهادة FSSC 22000',
      isPdf: true
    },
    {
      id: 'iso14001',
      src: images.certificates.iso14001,
      title: 'ISO 14001 Certificate',
      titleAr: 'شهادة ISO 14001',
      isPdf: true
    },
    {
      id: 'iso45001',
      src: images.certificates.iso45001,
      title: 'ISO 45001 Certificate',
      titleAr: 'شهادة ISO 45001',
      isPdf: true
    },
    {
      id: 'iso9001',
      src: images.certificates.iso9001,
      title: 'ISO 9001 Certificate',
      titleAr: 'شهادة ISO 9001',
      isPdf: true
    }
  ];

  const openCertificate = (certificate: CertificateItem) => {
    if (certificate.isPdf) {
      // Open PDF in new tab
      window.open(certificate.src, '_blank');
    } else {
      // Open image in lightbox
      setSelectedCertificate(certificate);
    }
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
              onClick={() => openCertificate(certificate)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  {certificate.isPdf ? (
                    <div className="w-full h-64 bg-gradient-to-br from-red-50 to-red-100 flex flex-col items-center justify-center">
                      <svg 
                        className="w-16 h-16 text-red-600 mb-4 transition-transform duration-300 group-hover:scale-110" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-600 font-semibold text-lg">PDF</span>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                        <div className="text-red-600 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {t('certificates.view')}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
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
                    </>
                  )}
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

        {/* Lightbox Modal - Only for non-PDF certificates */}
        <AnimatePresence>
          {selectedCertificate && !selectedCertificate.isPdf && (
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
