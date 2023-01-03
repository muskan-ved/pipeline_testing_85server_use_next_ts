import React, { useState } from "react";
import Sidebar from "../../sidebar";
import {
  Divider,
  Layout,
  Menu,
  Modal,
  Popconfirm,
  Popover,
  Table,
  theme,
} from "antd";
import { Button, Form, Input, Select } from "antd";
import type { FormInstance } from "antd/es/form";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";

export interface IAppProps {}

export default function UserListing(props: IAppProps) {
  const { Option } = Select;
  const { Header, Sider, Content } = Layout;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case "Active":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "InActive":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Layout>
      <Sidebar />
      <Content className="contentcss">
        <div className="editusercss">
          <div className="backflex">
            <Link href="/admin/userListing">
              <Button
                type="text"
                className=" backbtnn"
                icon={<ArrowLeftOutlined />}
              >
                Back
              </Button>
            </Link>
            <h2 className="textuser">Edit User Details</h2>
          </div>
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item name="status" label="Status">
              <Select
                placeholder="Select a option and change status"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="active">Active</Option>
                <Option value="inactive">InActive</Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({ getFieldValue }) =>
                getFieldValue("gender") === "other" ? (
                  <Form.Item
                    name="customizeGender"
                    label="Customize Gender"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Form.Item {...tailLayout}>
              <div className="btnsub">
                <Button htmlType="submit" className="btnupdate">
                  Update
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
}
