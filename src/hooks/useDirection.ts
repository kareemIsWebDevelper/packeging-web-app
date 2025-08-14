import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useDirection = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  
  const isRTL = i18n.language === 'ar';
  const direction = isRTL ? 'rtl' : 'ltr';
  
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [direction, i18n.language]);

  // Initialize language from URL parameter
  useEffect(() => {
    if (lang && ['en', 'ar'].includes(lang) && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  
  return {
    isRTL,
    direction,
    currentLang: lang || 'en',
    toggleLanguage: () => {
      const newLang = i18n.language === 'en' ? 'ar' : 'en';
      const currentPath = window.location.pathname;
      const pathWithoutLang = currentPath.replace(/^\/(en|ar)/, '');
      navigate(`/${newLang}${pathWithoutLang || '/home'}`);
    }
  };
};
