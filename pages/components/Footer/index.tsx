import React from "react";
import { Layout } from "antd";
import {
  Col,
  Divider,
  Row,
  List,
  Typography,
  Space,
  Button,
  Image,
  Input,
} from "antd";
import logo from "../../../public/assets/logo.png";
const { Header, Footer, Sider, Content } = Layout;
const style: React.CSSProperties = {
  background: "cyan",
  padding: "5px 0",
  color: "white",
};
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const FooterComp = () => {
  return (
    <>
      <Layout>
        <Header style={{ height: "auto" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <List header={<h4>About Us.</h4>} style={{ color: "white" }}>
                <Typography style={{ color: "white" }}>
                  With the online text generator you can process your personal
                  Lorem Ipsum enriching it with html elements that define its
                  structure, with the possibility to insert external links, but
                  not only.
                </Typography>
                <Space wrap>
                  <Button shape="circle">?</Button>
                  <Button
                    shape="circle"
                    style={{ backgroundColor: "orangered", color: "white" }}
                  >
                    ?
                  </Button>
                  <Button shape="circle">?</Button>
                  <Button shape="circle">?</Button>
                </Space>
              </List>
            </Col>

            <Col className="gutter-row" span={6}>
              <List header={<h4>Company</h4>} style={{ color: "white" }}>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>About us</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>Leadership</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>Careers</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>Blog</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>
                  Propter Partners
                </List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>Contact Us</List.Item>
              </List>
            </Col>

            <Col className="gutter-row" span={6}>
              <List header={<h4>Help?</h4>} style={{ color: "white" }}>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>FAQ</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>
                  Tearm And Condition
                </List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>Reporting</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>Documentation</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>Support Policy</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px'}}>Privacy</List.Item>
              </List>
            </Col>
            <Col className="gutter-row" span={6}>
              <List
                header={
                  <>
                    <Image src={logo.src} alt="imagee" />
                    <h4 style={{ marginTop: "-30px", marginLeft: "65px" }}>
                      Propter
                    </h4>
                  </>
                }
                style={{ color: "white" }}
              >
                <Typography style={{ color: "white" }}>
                  Read Estate transaction made simple,efficent and quicker.
                </Typography>
                <Row style={{backgroundColor:'white',marginTop:'15px'}}>
                  <Col span={12}>
                    <Input placeholder="Basic usage" />
                  </Col>
                  <Col span={12} >
                    <Button style={{ backgroundColor: "orangered", color: "white" ,}}>Subscribe</Button>
                  </Col>
                </Row>
              </List>
            </Col>
          </Row>
        </Header>

        {/* <Header style={{ height: "auto" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Space size={[8,6]} wrap>
            <Col className="gutter-row" span={4}>
              <div style={style}>col-4</div>
            </Col>
            </Space>
         
           
            <Space size={[8,4]} wrap>
            <Col className="gutter-row" span={4}>
              <div style={style}>col-4</div>
            </Col>
            </Space>
         
            <Space size={[8,4]} wrap>
            <Col className="gutter-row" span={4}>
              <div style={style}>col-4</div>
            </Col>
            </Space>
         
            <Space size={[8,4]} wrap>
            <Col className="gutter-row" span={4}>
              <div style={style}>col-4</div>
            </Col>
            </Space>
         
            <Space size={[8,4]} wrap>
            <Col className="gutter-row" span={4}>
              <div style={style}>col-4</div>
            </Col>
            </Space>
         
            <Space size={[8,4]} wrap>
            <Col className="gutter-row" span={4}>
              <div style={style}>col-4</div>
            </Col>
            </Space>
         
          </Row>
        </Header> */}
      </Layout>
    </>
  );
};

export default FooterComp;
