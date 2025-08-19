import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { images } from '../data/images';

interface CertificateItem {
  id: string;
  src: string;
  title: string;
}

const Certificates: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const certificates: CertificateItem[] = [
    {
      id: '1',
      src: images.certificates.iso14001,
      title: 'iso14001',
    },
    {
      id: '2',
      src: images.certificates.iso9001,
      title: 'iso9001',
    },
    {
      id: '3',
      src: images.certificates.iso45001,
      title: 'iso45001',
    },
    {
      id: '4',
      src: images.certificates.fssc22000,
      title: 'fssc22000',
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
                    alt={certificate.title}
                    className={`
                      w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 rotate-360
                      ${index !== 0 ? '-rotate-90' : ''}
                    `}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t('certificates.view')}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 text-center uppercase">
                    {certificate.title}
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
                  alt={selectedCertificate.title}
                  className={`
                    max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl
                    ${selectedCertificate.id !== '1' ? '-rotate-90' : ''}
                  `}
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-white uppercase">
                    {selectedCertificate.title}
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
