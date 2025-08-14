import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Service {
  icon: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr?: string;
}

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services: Service[] = [
    {
      icon: 'https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/06/ice-cream-80x80.png',
      title: 'Ice cream cone sleeves',
      titleAr: 'أكمام مخروط الآيس كريم',
      description: ''
    },
    {
      icon: 'https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/06/window-80x80.png',
      title: 'Lamination',
      titleAr: 'التصفيح',
      description: 'Dry Lamination, Wet Lamination, Poly Ethylene Extrusion.',
      descriptionAr: 'التصفيح الجاف، التصفيح الرطب، بثق البولي إيثيلين.'
    },
    {
      icon: 'https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/06/plastic-wrap-80x80.png',
      title: 'PE Blown Film',
      titleAr: 'فيلم البولي إيثيلين المنفوخ',
      description: '25 : 120 micron PE film for Lamination.',
      descriptionAr: 'فيلم البولي إيثيلين 25: 120 ميكرون للتصفيح.'
    },
    {
      icon: 'https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/06/pouch-80x80.png',
      title: 'Bag/Pouch Making',
      titleAr: 'صنع الأكياس/الأكياس',
      description: 'Center Seal Pouches, 4 Sides Seal Pouches and Gusseted pouches.',
      descriptionAr: 'أكياس الختم المركزي، أكياس الختم ذات 4 جوانب والأكياس المطوية.'
    },
    {
      icon: 'https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/06/printer-80x80.png',
      title: 'Printing',
      titleAr: 'الطباعة',
      description: 'Rotogravure up to 10 colors, Reverse printing up to 2 colors Reverse matt varnishing Cild seal.',
      descriptionAr: 'الطباعة الحفرية حتى 10 ألوان، الطباعة العكسية حتى لونين، التلميع المطفي العكسي، الختم البارد.'
    },
    {
      icon: 'https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/06/camera-roll-80x80.png',
      title: 'PVC Shrik sleeves',
      titleAr: 'أكمام PVC المنكمشة',
      description: ''
    },
    {
      icon: 'https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/06/plastic-wrap-1-80x80.png',
      title: 'Stretch Film',
      titleAr: 'فيلم التمدد',
      description: 'Automatic and manual for wrapping products and balettes.',
      descriptionAr: 'أوتوماتيكي ويدوي لتغليف المنتجات والمنصات.'
    },
    {
      icon: 'https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/06/tubes-80x80.png',
      title: 'PE Extrusion',
      titleAr: 'بثق البولي إيثيلين',
      description: 'Laminate/coat films, paper, alufoil, with PE film 10:50 microns.',
      descriptionAr: 'تصفيح/طلاء الأفلام، الورق، رقائق الألومنيوم، بفيلم البولي إيثيلين 10:50 ميكرون.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            {t('services.title')}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-600 rounded-full"></div>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                <img 
                  src={service.icon} 
                  alt={isRTL ? service.titleAr : service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                {isRTL ? service.titleAr : service.title}
              </h3>

              {/* Description */}
              {(isRTL ? service.descriptionAr : service.description) && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isRTL ? service.descriptionAr : service.description}
                </p>
              )}

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quality & Innovation
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with years of expertise to deliver exceptional packaging solutions that meet the highest industry standards.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Services;
