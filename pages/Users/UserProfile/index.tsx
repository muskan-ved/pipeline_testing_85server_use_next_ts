import React, { useEffect, useState } from "react";
import { Col, Row, Button, Avatar, Form, Input,Spin} from "antd";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";

import { userType } from "../../../types/userTypes";

import userService from "../../../services/userService";
type LayoutType = Parameters<typeof Form>[0]["layout"];

const UserProfile = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const [firstName, setFirstName] = useState<userType | any>("");
  const [lastName, setLastName] = useState<userType | String>("");
  const [phone, setPhone] = useState<userType | any>();
  const [gender, setGender] = useState<userType | String>("");
  const [reraNumber, setReraNumber] = useState<userType | any>();
  const [email, setEmail] = useState<userType | String>();
  const [dataObj, setDataObj] = useState<userType | any>({});
  const[isShow,setIsShow] = useState(false)
  useEffect(() => {
    getUserProfile();
  }, []);
 
  const getUserProfile = async () => {
    const id: number = 1;
    await userService.getUserProfile(id).then((data) => {
      setIsShow(true)
      setDataObj(data?.data);
      
      setFirstName(data?.data?.firstName);
      setLastName(data?.data?.lastName);
      setPhone(data?.data?.phone);
      setGender(data?.data?.gender);
      setReraNumber(data?.data?.reraNumber);
      setEmail(data?.data);
      setIsShow(false)
    });
  };

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;
  
  return (

  
    
    <div className="userProfile">
      {isShow?<Spin size='large'/>:
      <>
      <div className="backBtnCls">
        <Row>
          <Col span={18} push={6}>
            <Button
              type="text"
              className="btncss backbtnn"
              //   onClick={handleBack}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>
          </Col>
        </Row>
      </div>
      <div className="userProHeadingCls">
        <Row>
          <Col span={18} push={6}>
            <h1>Your Details</h1>
          </Col>
        </Row>
      </div>
      <div className="userProfilImg">
        <Avatar size={250} icon={<UserOutlined />} />
        <div style={{ color: "gray", marginLeft: "40px", marginTop: "15px" }}>
          upload a profile picture
        </div>
      </div>
      <div className="userProFormCls">
        <Row>
          <Col span={12} offset={6}>
            <Row>
              <Col span={8}>
                <Form
                  {...formItemLayout}
                  layout={formLayout}
                  form={form}
                  initialValues={{ layout: formLayout }}
                  onValuesChange={onFormLayoutChange}
                >
                  <Form.Item label="First Name" className="userFormLableCls">
                    <Input
                      placeholder="input placeholder"
                      defaultValue={firstName&&firstName }
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </Form.Item>
                  <Form.Item label="Mobile" className="userFormLableCls">
                    <Input
                      placeholder="input placeholder"
                      defaultValue={dataObj?.phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Rera Number"
                    className="userFormLableCls"
                    rules={[{ required: true }]}
                  >
                    <Input
                      placeholder="input placeholder"
                      defaultValue={dataObj.reraNumber}
                      onChange={(e) => {
                        setReraNumber(e.target.value);
                      }}
                    />
                  </Form.Item>
                </Form>
              </Col>
              <Col span={8} offset={8}>
                <Form
                  {...formItemLayout}
                  layout={formLayout}
                  form={form}
                  initialValues={{ layout: formLayout }}
                  onValuesChange={onFormLayoutChange}
                >
                  <Form.Item label="Last Name" className="userFormLableCls">
                    <Input
                      placeholder="input placeholder"
                      defaultValue={dataObj?.lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Form.Item>
                  <Form.Item label="Email" className="userFormLableCls">
                    <Input
                      placeholder="input placeholder"
                      defaultValue={dataObj?.email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Gender"
                    className="userFormLableCls"
                    rules={[{ required: true }]}
                  >
                    <Input
                      placeholder="input placeholder"
                      defaultValue={dataObj?.gender}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    />
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: "25px", marginBottom: "25px" }}>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <Button
              type="primary"
              style={{ backgroundColor: "gray", width: "60%" }}
            >
              Confirm
            </Button>
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
        </Row>
      </div>
      </>
      }
      
    </div>
  );
};

export default UserProfile;
