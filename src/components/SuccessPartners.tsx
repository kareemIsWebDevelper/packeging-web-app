import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { images } from '../assets/images';

interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
  altAr: string;
}

const SuccessPartners: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const partnerLogos: PartnerLogo[] = [
    {
      id: 'evafarma',
      src: images.partners.evafarma,
      alt: 'Eva Pharma',
      altAr: 'إيفا فارما'
    },
    {
      id: 'edita',
      src: images.partners.edita,
      alt: 'Edita Food Industries',
      altAr: 'إديتا للصناعات الغذائية'
    },
    {
      id: 'nestle',
      src: images.partners.nestle,
      alt: 'Nestlé',
      altAr: 'نستلة'
    },
    {
      id: 'heinz',
      src: images.partners.heinz,
      alt: 'H.J. Heinz Company',
      altAr: 'شركة هاينز'
    },
    {
      id: 'gourmet',
      src: images.partners.gourmet,
      alt: 'Gourmet',
      altAr: 'جورميه'
    },
    {
      id: 'mashreq',
      src: images.partners.mashreq,
      alt: 'Mashreq Foods',
      altAr: 'مشرق للأغذية'
    },
    {
      id: 'partner1',
      src: images.partners.partner1,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner2',
      src: images.partners.partner2,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner3',
      src: images.partners.partner3,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner5',
      src: images.partners.partner5,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner6',
      src: images.partners.partner6,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner9',
      src: images.partners.partner9,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner12',
      src: images.partners.partner12,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner13',
      src: images.partners.partner13,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner14',
      src: images.partners.partner14,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner15',
      src: images.partners.partner15,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner16',
      src: images.partners.partner16,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner17',
      src: images.partners.partner17,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner18',
      src: images.partners.partner18,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner19',
      src: images.partners.partner19,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner20',
      src: images.partners.partner20,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner21',
      src: images.partners.partner21,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner22',
      src: images.partners.partner22,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner23',
      src: images.partners.partner23,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner24',
      src: images.partners.partner24,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner25',
      src: images.partners.partner25,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner26',
      src: images.partners.partner26,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner27',
      src: images.partners.partner27,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner28',
      src: images.partners.partner28,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner29',
      src: images.partners.partner29,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner31',
      src: images.partners.partner31,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner32',
      src: images.partners.partner32,
      alt: 'Partner Company',
      altAr: 'شركة شريكة'
    },
    {
      id: 'partner33',
      src: images.partners.partner33,
      alt: 'Dulux Lab',
      altAr: 'دولكس لاب'
    }
  ];

  return (
    <section id="customers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('customers.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('customers.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square p-4 flex items-center justify-center">
                <img
                  src={partner.src}
                  alt={isRTL ? partner.altAr : partner.alt}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 group-hover:from-blue-600/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Animated border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full mx-auto max-w-md"
        />
      </div>
    </section>
  );
};

export default SuccessPartners;
