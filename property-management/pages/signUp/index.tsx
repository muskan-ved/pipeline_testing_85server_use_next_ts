import React, { useState } from "react";
import { Layout, Tabs } from "antd";
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Router, { withRouter } from "next/router";

export interface IAppProps {}

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

export default function App(props: IAppProps) {
  const [activeKey, setActiveKey] = React.useState("1");
  const onKeyChange = (key: React.SetStateAction<string>) => setActiveKey(key);
  const { Title } = Typography;
  const { TabPane } = Tabs;
  const { Header, Footer, Sider, Content } = Layout;
  const MyFormItemContext = React.createContext<(string | number)[]>([]);
  const onFinish = (value: object) => {
    onKeyChange("2");
    console.log(value);
  };
  const handleBack = () => {
    setActiveKey("1");
  };
  const tabhandleBack = () => {
    setActiveKey("2");
  };
  function toArr(
    str: string | number | (string | number)[]
  ): (string | number)[] {
    return Array.isArray(str) ? str : [str];
  }

  const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
      () => [...prefixPath, ...toArr(prefix)],
      [prefixPath, prefix]
    );

    return (
      <MyFormItemContext.Provider value={concatPath}>
        {children}
      </MyFormItemContext.Provider>
    );
  };

  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
  };
  const handlefirst=()=>{
    setActiveKey("1");
  }
  const onCheckBox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleLandlord=()=>{
    Router.push({ pathname: "/login" });
  }
  const handleBrokerage=()=>{
    console.log('handleBrokerage');
  }
  const handleAgent=()=>{
    console.log('handleAgent');
  }
  return (
    <div className="mainlogindiv">
      
      <Tabs defaultActiveKey="1" activeKey={activeKey} onChange={onKeyChange}>
        <TabPane tab="Tab 1" key="1" className="mainnnnn">
          <div className="textCenter">
            <h2 className="h2margin">Welcome to Propter</h2>
            <h3>Create an Account</h3>
          </div>
          <div className="marginleftcss">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <div>
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["data"]}>
                  <div>
                    <MyFormItem name="email" label="Email or Mobile number">
                      <Input  placeholder="Enter Email / Mobile No."/>
                    </MyFormItem>
                    <MyFormItem name="password" label="Password">
                      <Input  placeholder="Create Password"/>
                    </MyFormItem>
                  </div>
                </MyFormItemGroup>
              </MyFormItemGroup>
              <Checkbox onChange={onCheckBox} className="checkboxx">
                I am a landlord or a broker
              </Checkbox>
              <br />
              <br />
              <Button type="primary" htmlType="submit" className="submitbutton">
                Submit
              </Button>
              <p className="pbody">
                By submitting, I accept Propter's term of service
              </p>
            </div>
          </Form>
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss"
              onClick={handleBack}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>
            <Title level={5}>What best describes you?</Title>
            <div className="btncontainer">
              <Button className="btn1" type="text" onClick={handleLandlord}>LandLord</Button>&emsp;&emsp;&emsp;&emsp;
              <Button className="btn1" type="text" onClick={handleBrokerage}>Brokerage</Button>&emsp;&emsp;&emsp;&emsp;
              <Button className="btn1" type="text" onClick={handleAgent}>RE Agent</Button>
            </div>
            <div className="submitdiv2">
            <Button onClick={() => onKeyChange("3")} className="submitbutton2" type="primary">Continue</Button>
            </div>
          </Content>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
        <Content className="mainLayout">
            <Button
              type="text"
              className="btncss"
              onClick={tabhandleBack}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>
            <Title level={5}>How many properties you manage?</Title>
            <div className="btncontainer">
              <Button className="btn1" type="text">1 - 4 properties/units</Button>&emsp;&emsp;&emsp;&emsp;
              <Button className="btn1" type="text">5 - 10 properties/units</Button>&emsp;&emsp;&emsp;&emsp;
              <Button className="btn1" type="text">11+ properties/units</Button>
            </div>
            <div className="submitdiv2">
            <Button className="submitbutton2" type="primary" onClick={handlefirst}>Continue</Button>
            </div>
          </Content>
          {/* <button onClick={() => onKeyChange("1")}>okkk</button> */}
        </TabPane>
      </Tabs>
    </div>
  );
}
