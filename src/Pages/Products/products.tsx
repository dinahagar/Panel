import { useGetAllProductsQuery } from "../../Services/products";
import type { Product } from "../../Interfaces/products";
import { useTranslation } from "react-i18next";
import { NoProductsH1, ProductsDiv } from "./products.styles";
import ProductCard from "../../components/ProductCard/productCard";
import { Col, Row, Skeleton } from "antd";

const Products = () => {
  const { t } = useTranslation();
  const { data: products, error, isLoading } = useGetAllProductsQuery({});

  return (
    <ProductsDiv>
      <h2>Products</h2>
      {error ? (
        <NoProductsH1>{t("products_error")}</NoProductsH1>
      ) : isLoading ? (
        <Skeleton />
      ) : products ? (
        <Row>
          {products?.map((product: Product) => (
            <Col xs={24} sm={12} md={12} lg={8} xl={6} key={product?.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ) : null}
    </ProductsDiv>
  );
};

export default Products;
