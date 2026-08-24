import { Button, Col, Form, InputNumber, Upload } from "antd";
import styled from "styled-components";

export const FormDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100%;
    padding: 30px;
`

export const FormStyle = styled(Form)`
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;

    .ant-form-item {
        .ant-row {
            .ant-form-item-label {
                text-align: start;
                font-weight: 600;

                label {
                    font-size: 17px;
                }
            }
            .ant-form-item-control {
                margin: 0;
            }
        }
    }
`

export const ResetCol = styled(Col)`
    .ant-form-item {
        .ant-form-item-row {
            justify-content: end;
        }
    }
`

export const ResetButton = styled(Button)`
    width: 100%;

    &&.ant-btn:hover {
        background-color: red;
        color: #fff;
        border-color: red;
    }
`

export const AddButton = styled(Button)`
    width: 100%;
`

export const UploadButton = styled(Button)`
    width: 100%;
    background-color: #f5f5f5;
`

export const UploadField = styled(Upload)`
    .ant-upload-select {
        width: 100%;
    }
`

export const InputNumberField = styled(InputNumber)`
    width: 100%;
`

export const ResetModalP = styled.p`
    font-size: 20px;
    font-weight: 600;
`