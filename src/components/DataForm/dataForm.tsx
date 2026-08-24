import { UploadOutlined } from "@ant-design/icons";
import { Col, Form, Input, Modal, Rate, Row, Select } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import {
  AddButton,
  FormDiv,
  FormStyle,
  InputNumberField,
  ResetButton,
  ResetCol,
  ResetModalP,
  UploadButton,
  UploadField,
} from "./dataForm.style";
import { useState } from "react";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const DataForm = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const normFile = (e: UploadChangeParam) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onReset = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FormDiv>
        <FormStyle
          {...formItemLayout}
          form={form}
          variant={variant || "filled"}
          initialValues={{ variant: "filled" }}
        >
          <Form.Item
            label="Name"
            name="Name"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Category"
            name="Category"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select
              onChange={handleChange}
              placeholder="Category"
              size="large"
              options={[
                { value: "Electronics", label: "Electronics" },
                { value: "Jewelery", label: "Jewelery" },
                { value: "Men's Clothing", label: "Men's Clothing" },
                { value: "Women's Clothing", label: "Women's Clothing" },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="upload"
            label="Upload Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: "Please input!" }]}
          >
            <UploadField
              name="logo"
              beforeUpload={() => false}
              listType="picture"
            >
              <UploadButton icon={<UploadOutlined />} size="large">
                Click to upload
              </UploadButton>
            </UploadField>
          </Form.Item>

          <Form.Item
            label="Price"
            name="Price"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumberField size="large" />
          </Form.Item>

          <Form.Item
            name="rate"
            label="Rate"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Rate size="large" />
          </Form.Item>

          <Form.Item
            label="Count"
            name="Count"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumberField size="large" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="Description"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Form.Item label={null}>
                <AddButton type="primary" htmlType="submit" size="large">
                  Add Product
                </AddButton>
              </Form.Item>
            </Col>
            <ResetCol xs={24} sm={12} md={12} lg={12} xl={12}>
              <Form.Item label={null}>
                <ResetButton htmlType="button" onClick={showModal} size="large">
                  Reset
                </ResetButton>
              </Form.Item>
            </ResetCol>
          </Row>
        </FormStyle>
      </FormDiv>

      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={onReset}
        onCancel={handleCancel}
        okText="Confirm"
        cancelText="Discard"
      >
        <ResetModalP>All data will be deleted... Are you sure?</ResetModalP>
      </Modal>
    </>
  );
};

export default DataForm;
