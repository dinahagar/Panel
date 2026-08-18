import { Card } from "antd";
import styled from "styled-components";

export const CardStyle = styled(Card)`
    width: 220px;
    margin-bottom: 15px;

    img {
        max-width: 120px;
        height: 160px;
    }

    .ant-card-cover {
        padding-top: 10px;
        display: flex;
        justify-content: center;
    }

    .ant-card-body {
        padding: 15px;

        h3 {
            margin: 0;
        }
    }
`

export const RatingDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const DetailsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 6px 0px 8px 0px;
`

export const CategoryP = styled.p`
    color: darkblue;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
`

export const PriceP = styled.p`
    color: red;
    font-size: 14px;
    font-weight: 500;
    margin-top: 3px;
`

export const CountP = styled.p`
    color: darkblue;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 2px;
`