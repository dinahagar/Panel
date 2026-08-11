import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
