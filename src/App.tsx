import { useTranslation } from 'react-i18next';
import './App.css'
import { useEffect } from 'react';

function App() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  
  return (
    <>
    <h1>{t("welcome")}</h1>
    <div>
      <button onClick={() => i18n.changeLanguage("en")}>
        English
      </button>

      <button onClick={() => i18n.changeLanguage("ar")}>
        العربية
      </button>
    </div>
    </>
  )
}

export default App
