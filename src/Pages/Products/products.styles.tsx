import { Col } from "antd";
import styled from "styled-components";

export const NoProductsH1 = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductsDiv = styled.div`
  padding: 15px;
`;

export const CardCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 30px 0px;

  @media (max-width: 400px) {
    display: block;
  }
`;

export const NewProductH2 = styled.h2`
  font-size: 25px;
`;

export const NewProductButton = styled.button`
  cursor: pointer;
  background: #030852;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 14px;

  @media (max-width: 400px) {
    margin-top: 10px;
  }
`;
