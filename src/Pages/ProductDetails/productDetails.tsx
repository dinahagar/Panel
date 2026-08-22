import { Modal, Rate } from "antd";
import { useLocation } from "react-router-dom";
import {
  CategoryDiv,
  CategoryP,
  CountP,
  DescP,
  ImgDiv,
  ImgModal,
  ImgModalDiv,
  PriceP,
  ProductDetailsDiv,
  ProductSpan,
  ProductTitle,
  RatingDiv,
} from "./productDetails.style";
import { useState } from "react";

const ProductDetails = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ProductDetailsDiv>
        <ImgDiv>
          <img src={location.state.product.image} title="zoom" onClick={showModal} />
        </ImgDiv>
        <ProductTitle>{location.state.product.title}</ProductTitle>
        <CategoryDiv>
          <CategoryP>
            <ProductSpan>Category: </ProductSpan>
            {location.state.product.category}
          </CategoryP>
          <RatingDiv>
            <Rate
              disabled
              defaultValue={location.state.product.rating.rate}
              size="small"
            />
            <CountP>({location.state.product.rating.count})</CountP>
          </RatingDiv>
        </CategoryDiv>
        <PriceP>
          <ProductSpan>Price: </ProductSpan>
          {location.state.product.price}$
        </PriceP>
        <div>
          <ProductSpan>About Product: </ProductSpan>
          <DescP>{location.state.product.description}</DescP>
        </div>
      </ProductDetailsDiv>

      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <ImgModalDiv>
            <ImgModal src={location.state.product.image} />
        </ImgModalDiv>
      </Modal>
    </>
  );
};

export default ProductDetails;
