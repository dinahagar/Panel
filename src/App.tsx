import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Header from "./components/Header/header";
import Home from "./Pages/Home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import { Layout } from "antd";
import Products from "./Pages/Products/products";
import ProductDetails from "./Pages/ProductDetails/productDetails";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
