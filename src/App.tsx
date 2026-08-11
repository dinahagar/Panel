import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Header from "./components/Header/header";
import { AppDiv } from "./App.styles";

function App() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div>
      <Header />
      <h1>{t("welcome")}</h1>
    </AppDiv>
  );
}

export default App;
