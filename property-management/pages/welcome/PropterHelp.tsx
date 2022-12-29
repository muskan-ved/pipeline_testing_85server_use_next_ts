import React from "react";
import { Col, Card, Row, Space } from "antd";
import buyHome from "/public/assets/buyHome.png";
import rentHome from "/public/assets/rentHome.png";
import sellProperty from "/public/assets/sellProperty.png";
import vouchers from "/public/assets/vouchers.png";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Meta } = Card;
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };
const PropterHelp = () => {
  return (
    <div>
      <h1
        style={{
          paddingTop: "10vh",
          fontFamily: "system-ui",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        See How Propter Can Help
      </h1>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          transform: "translate(-50%, 0%)",
          marginLeft: "50%",
          maxWidth: "1088px",
          width: "100%",
        }}
      >
        <Space>
          <Col className="gutter-row" span={32}>
            <Card
              className="mainCardCls"
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  className="homeImgCls"
                  alt="example"
                  src={sellProperty.src}
                />
              }
            >
              <Meta
                title="Sell/Rent your property"
                description="with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only."
              />
              <a className="homeCardLink">For Landloard</a>
              <ArrowRightOutlined
                style={{
                  color: "orangered",
                  marginLeft: "50px",
                  marginTop: "15px",
                }}
              />
            </Card>
          </Col>
        </Space>
        <Space>
          <Col className="gutter-row" span={32}>
            <Card
              className="mainCardCls"
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  className="homeImgCls"
                  alt="example"
                  src={buyHome.src}
                  style={{
                    color: "orangered",
                    marginLeft: "50px",
                    marginTop: "15px",
                  }}
                />
              }
            >
              <Meta
                title="Buy A Home"
                description="with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only."
              />
              <a className="homeCardLink">Find your home</a>
              <ArrowRightOutlined
                style={{
                  color: "orangered",
                  marginLeft: "50px",
                  marginTop: "15px",
                }}
              />
            </Card>
          </Col>
        </Space>
        <Space>
          <Col className="gutter-row" span={32}>
            <Card
              className="mainCardCls"
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  className="homeImgCls"
                  alt="example"
                  src={rentHome.src}
                  style={{
                    color: "orangered",
                    marginLeft: "50px",
                    marginTop: "15px",
                  }}
                />
              }
            >
              <Meta
                title="Rent A Home"
                description="with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only."
              />
              <a className="homeCardLink">Rent a home</a>
              <ArrowRightOutlined
                style={{
                  color: "orangered",
                  marginLeft: "50px",
                  marginTop: "15px",
                }}
              />
            </Card>
          </Col>
        </Space>
        <Space>
          <Col className="gutter-row" span={32}>
            <Card
              className="mainCardCls"
              hoverable
              style={{ width: 240 }}
              cover={
                <img className="homeImgCls" alt="example" src={vouchers.src} />
              }
            >
              <Meta
                title="Vouchers"
                description="with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only."
              />
              <a className="homeCardLink">See list of vouchers</a>
              <ArrowRightOutlined
                style={{ color: "orangered", marginLeft: "50px" }}
              />
            </Card>
          </Col>
        </Space>
      </Row>
    </div>
  );
};

export default PropterHelp;
