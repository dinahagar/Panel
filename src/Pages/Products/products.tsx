import { useGetAllProductsQuery } from "../../Services/products";
import type { Product } from "../../Interfaces/products";
import { useTranslation } from "react-i18next";
import {
  CardCol,
  NewProductButton,
  NewProductH2,
  NoProductsH1,
  ProductsDiv,
  ProductsHeader,
} from "./products.styles";
import ProductCard from "../../components/ProductCard/productCard";
import { Row, Skeleton } from "antd";
import { Link } from "react-router-dom";

const Products = () => {
  const { t } = useTranslation();
  const { data: products, error, isLoading } = useGetAllProductsQuery({});

  return (
    <>
      <ProductsDiv>
        <ProductsHeader>
          <NewProductH2>{t("Products")}</NewProductH2>
          <Link to="/form"><NewProductButton>Add New Product</NewProductButton></Link>
        </ProductsHeader>
        {error ? (
          <NoProductsH1>{t("products_error")}</NoProductsH1>
        ) : isLoading ? (
          <Skeleton />
        ) : products ? (
          <Row>
            {products?.map((product: Product) => (
              <CardCol xs={24} sm={12} md={12} lg={8} xl={6} key={product?.id}>
                <ProductCard product={product} />
              </CardCol>
            ))}
          </Row>
        ) : null}
      </ProductsDiv>
    </>
  );
};

export default Products;
