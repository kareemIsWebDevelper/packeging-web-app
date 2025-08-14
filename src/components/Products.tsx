import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../assets/images';

const Products: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(0);
  const isRTL = i18n.language === 'ar';

  const categories = [
    'biscuits',
    'chips',
    'coffee',
    'detergents',
    'dryFood',
    'frozen',
    'ketchup',
    'pharma',
    'tobacco',
    'wipes'
  ];

  // Real product data from images.ts
  const getProductImages = (category: string) => {
    const productData = {
      biscuits: Object.values(images.products.biscuits).map((src, i) => ({
        id: `biscuit-${i + 1}`,
        src,
        alt: `Biscuits & Sweets ${i + 1}`,
        altAr: `البسكويت والحلويات ${i + 1}`
      })),
      chips: Object.values(images.products.chips).map((src, i) => ({
        id: `chip-${i + 1}`,
        src,
        alt: `Chips & Snacks ${i + 1}`,
        altAr: `الشيبس والوجبات الخفيفة ${i + 1}`
      })),
      coffee: Object.values(images.products.coffee).map((src, i) => ({
        id: `coffee-${i + 1}`,
        src,
        alt: `Coffee & Tea ${i + 1}`,
        altAr: `القهوة والشاي ${i + 1}`
      })),
      detergents: Object.values(images.products.detergents).map((src, i) => ({
        id: `detergent-${i + 1}`,
        src,
        alt: `Detergents ${i + 1}`,
        altAr: `المنظفات ${i + 1}`
      })),
      dryFood: Object.values(images.products.dryFood).map((src, i) => ({
        id: `dry-${i + 1}`,
        src,
        alt: `Dry Food ${i + 1}`,
        altAr: `الطعام الجاف ${i + 1}`
      })),
      frozen: Object.values(images.products.frozen).map((src, i) => ({
        id: `frozen-${i + 1}`,
        src,
        alt: `Frozen Products ${i + 1}`,
        altAr: `المجمدات ${i + 1}`
      })),
      ketchup: Object.values(images.products.ketchup).map((src, i) => ({
        id: `ketchup-${i + 1}`,
        src,
        alt: `Ketchup & Tomato Paste ${i + 1}`,
        altAr: `الكاتشب ومعجون الطماطم ${i + 1}`
      })),
      pharma: Object.values(images.products.pharma).map((src, i) => ({
        id: `pharma-${i + 1}`,
        src,
        alt: `Pharmaceutical & Cosmetics ${i + 1}`,
        altAr: `الأدوية ومستحضرات التجميل ${i + 1}`
      })),
      tobacco: Object.values(images.products.tobacco).map((src, i) => ({
        id: `tobacco-${i + 1}`,
        src,
        alt: `Tobacco ${i + 1}`,
        altAr: `التبغ ${i + 1}`
      })),
      wipes: Object.values(images.products.wipes).map((src, i) => ({
        id: `wipe-${i + 1}`,
        src,
        alt: `Wipes ${i + 1}`,
        altAr: `المناديل المبللة ${i + 1}`
      }))
    };
    
    return productData[category as keyof typeof productData] || [];
  };

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
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
            {t('products.title')}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-600 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-primary-600 shadow-md'
                }`}
              >
                {t(`products.categories.${category}`)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {getProductImages(categories[activeCategory]).map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square bg-white flex items-center justify-center relative overflow-hidden">
                  {/* Real product image */}
                  <img
                    src={product.src}
                    alt={isRTL ? product.altAr : product.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Solutions Available
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? We specialize in creating custom packaging solutions tailored to your specific needs.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Request Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
