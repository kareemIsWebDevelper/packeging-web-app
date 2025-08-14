import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface MachineryItem {
  id: string;
  src: string;
  // title: string;
  // titleAr: string;
  description: string;
  descriptionAr: string;
}

const Machinery: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedMachine, setSelectedMachine] = useState<MachineryItem | null>(null);

  const machineryItems: MachineryItem[] = [
    {
      id: 'machine1',
      src: require('../assets/images/machinery1.jpeg'),
      // title: 'Bag Cutting Machine',
      // titleAr: 'ماكينة تفصيل اكياس',
      description: 'Bag Cutting Machine',
      descriptionAr: 'ماكينة تفصيل اكياس'
    },
    {
      id: 'machine2',
      src: require('../assets/images/machinery2.jpeg'),
      // title: 'Paper machine1',
      // titleAr: 'ماكينة  القرطاس',
      description: 'Paper machine1',
      descriptionAr: 'ماكينة  القرطاس'
    },
    {
      id: 'machine3',
      src: require('../assets/images/machinery3.jpeg'),
      // title: 'Paper machine2',
      // titleAr: 'ماكينة القرطاس',
      description: 'Paper machine2',
      descriptionAr: 'ماكينة القرطاس'
    },
    {
      id: 'machine4',
      src: require('../assets/images/machinery4.jpeg'),
      // title: 'Bimk scissors',
      // titleAr: 'مقص بيمك',
      description: 'Bimk scissors',
      descriptionAr: 'مقص بيمك'
    },
    {
      id: 'machine5',
      src: require('../assets/images/machinery5.jpeg'),
      // title: 'Bimk scissors',
      // titleAr: 'مقصات بيمك',
      description: 'Bimk scissors',
      descriptionAr: 'مقصات بيمك'
    },
    {
      id: 'machine6',
      src: require('../assets/images/machinery6.jpeg'),
      // title: 'Bimk scissors',
      // titleAr: 'مقصات بيمك',
      description: 'Bimk scissors',
      descriptionAr: 'مقصات بيمك'
    },
    {
      id: 'machine7',
      src: require('../assets/images/machinery7.jpeg'),
      // title: 'SUPER COMBI 5000 Lining Machine',
      // titleAr: 'ماكينة التبطين SUPER COMBI 5000',
      description: 'SUPER COMBI 5000 Lining Machine',
      descriptionAr: 'ماكينة التبطين'
    },
    {
      id: 'machine8',
      src: require('../assets/images/machinery8.jpeg'),
      // title: 'Schiavi Printing Machine',
      // titleAr: 'ماكينة الطباعة سكيافى',
      description: 'Schiavi Printing Machine',
      descriptionAr: 'ماكينة الطباعة سكيافى'
    },
    {
      id: 'machine9',
      src: require('../assets/images/machinery9.jpeg'),
      // title: 'Extrusion Machine',
      // titleAr: 'ماكينةالاكستروجن',
      description: 'Extrusion Machine',
      descriptionAr: 'ماكينةالاكستروجن'
    },
    {
      id: 'machine10',
      src: require('../assets/images/machinery10.jpeg'),
      // title: 'Punch Machine',
      // titleAr: 'ماكينة البانش',
      description: 'Punch Machine',
      descriptionAr: 'ماكينة البانش'
    },
    {
      id: 'machine11',
      src: require('../assets/images/machinery11.jpeg'),
      // title: 'FKI Polyethylene Machine',
      // titleAr: 'ماكينة البولي ايثلين FKI',
      description: 'FKI Polyethylene Machine',
      descriptionAr: 'ماكينة البولي ايثلين FKI'
    },
    {
      id: 'machine12',
      src: require('../assets/images/machinery12.jpeg'),
      // title: 'KS Polyethylene Machine',
      // titleAr: 'ماكينة البولي ايثلين KS',
      description: 'KS Polyethylene Machine',
      descriptionAr: 'ماكينة البولي ايثلين KS'
    },
    {
      id: 'machine13',
      src: require('../assets/images/machinery13.jpeg'),
      // title: 'COMBI -1200 Lining Machine',
      // titleAr: 'ماكينة التبطين COMBI -1200',
      description: 'COMBI -1200 Lining Machine',
      descriptionAr: 'ماكينة التبطين'
    },
    {
      id: 'machine14',
      src: require('../assets/images/machinery14.jpeg'),
      // title: 'Dick Wang Polyethylene Lining Machine',
      // titleAr: 'ماكينة التبطين ديك وانج تبطين بالبولي ايثلين',
      description: 'Dick Wang Polyethylene Lining Machine',
      descriptionAr: 'ماكينة التبطين ديك وانج تبطين بالبولي ايثلين'
    },
    {
      id: 'machine15',
      src: require('../assets/images/machinery15.jpeg'),
      // title: 'BOBST 10-color printing machine',
      // titleAr: 'ماكينة الطباعة BOBST 10 لون',
      description: 'BOBST 10-color printing machine',
      descriptionAr: 'ماكينة الطباعة BOBST 10 لون'
    }
  ];

  const openLightbox = (machine: MachineryItem) => {
    setSelectedMachine(machine);
  };

  const closeLightbox = () => {
    setSelectedMachine(null);
  };

  return (
    <section id="machinery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('machinery.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('machinery.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineryItems.map((machine, index) => (
            <motion.div
              key={machine.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(machine)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={machine.src}
                    alt={isRTL ? machine.descriptionAr : machine.description}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="text-sm font-medium">
                      {t('machinery.view')}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {/* <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {isRTL ? machine.titleAr : machine.title}
                  </h3> */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {isRTL ? machine.descriptionAr : machine.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMachine && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full bg-white rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors duration-200"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                <div className="md:flex">
                  <div className="md:w-2/3">
                    <img
                      src={selectedMachine.src}
                      alt={isRTL ? selectedMachine.descriptionAr : selectedMachine.description}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                  </div>
                  <div className="md:w-1/3 p-6">
                    {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {isRTL ? selectedMachine.titleAr : selectedMachine.title}
                    </h3> */}
                    <p className="text-gray-600 leading-relaxed">
                      {isRTL ? selectedMachine.descriptionAr : selectedMachine.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Machinery;
