import styled from "styled-components";

export const ProductDetailsDiv = styled.div`
  margin: 20px 30px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 30px;
  direction: ltr;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 250px;
    cursor: pointer;

    @media (max-width: 430px) {
      width: stretch;
    }
  }
`;

export const ProductTitle = styled.h1`
  line-height: 1.2;
  font-size: 28px;
  text-transform: capitalize;

  @media (max-width: 460px) {
    font-size: 25px;
  }
  @media (max-width: 390px) {
    font-size: 22px;
  }
`;

export const ProductSpan = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #000;
`;

export const CategoryP = styled.p`
  color: darkblue;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 18px;
`;

export const DescP = styled.p`
  color: darkblue;
  font-weight: 500;
  font-size: 18px;
  padding: 5px 10px;

  @media (max-width: 460px) {
    padding: 0px;
  }
`;

export const PriceP = styled.p`
  color: red;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CategoryDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const CountP = styled.p`
  color: darkblue;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const ImgModalDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgModal = styled.img`
  width: 350px;

  @media (max-width: 400px) {
    width: stretch;
  }
`;
