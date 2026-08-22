import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import type { Product } from "../../Interfaces/products";
import {
  CardStyle,
  CategoryP,
  CountP,
  DetailsDiv,
  PriceP,
  RatingDiv,
} from "./productCard.style";
import { useDeleteProductMutation } from "../../Services/products";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = (id: number) => {
    deleteProduct(id);
  };

  return (
    <CardStyle
      cover={<img draggable={false} alt="example" src={product?.image} />}
      actions={[
        <DeleteOutlined
          key="delete"
          onClick={() => handleDeleteProduct(product?.id)}
        />,
        <Link to={`/product/${product?.id}`} state={{ product: product }}><EyeOutlined key="view" /></Link>,
        <EditOutlined key="edit" />,
      ]}
    >
      <h3>{product?.title?.slice(0, 15)}...</h3>
      <DetailsDiv>
        <CategoryP>{product?.category}</CategoryP>
        <PriceP>{product?.price}$</PriceP>
      </DetailsDiv>
      <RatingDiv>
        <Rate disabled defaultValue={product?.rating?.rate} size="small" />
        <CountP>({product?.rating?.count})</CountP>
      </RatingDiv>
    </CardStyle>
  );
};

export default ProductCard;
