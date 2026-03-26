import { useLanguage, type Language } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher(){
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className={styles.languageSwitcher}>
      <div className={styles.switcherContainer} title={t.languageSwitcher.tooltip}>
        <button
          className={`${styles.languageButton} ${language === 'pt-BR' ? styles.active : ''}`}
          onClick={() => handleLanguageChange('pt-BR')}
          aria-label={t.languageSwitcher.portuguese}
        >
          🇧🇷 PT
        </button>
        <button
          className={`${styles.languageButton} ${language === 'en-US' ? styles.active : ''}`}
          onClick={() => handleLanguageChange('en-US')}
          aria-label={t.languageSwitcher.english}
        >
          🇺🇸 EN
        </button>
      </div>
    </div>
  );
};

