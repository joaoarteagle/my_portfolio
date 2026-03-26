import { useLanguage } from '../context/LanguageContext';
import { translations, type Translations } from '../utils/translations';

export const useTranslation = (): Translations => {
  const { language } = useLanguage();
  return translations[language];
};