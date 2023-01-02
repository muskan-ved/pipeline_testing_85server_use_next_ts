import React from "react";
import { Col, Card, Row, Space } from "antd";
import buyHome from "/public/assets/buyHome.png";
import rentHome from "/public/assets/rentHome.png";
import sellProperty from "/public/assets/sellProperty.png";
import vouchers from "/public/assets/rentHome.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
const { Meta } = Card;
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const rowArray = [
  {
    Img: buyHome,
    title: "Sell/Rent your property",
    link: "for landloard",
    description:
      "with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
  },
  {
    Img: rentHome,
    title: "Sell/Rent your property",
    link: "for landloard",
    description:
      "with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
  },
  {
    Img: sellProperty,
    title: "Sell/Rent your property",
    link: "for landloard",
    description:
      "with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
  },
  {
    Img: vouchers,
    title: "Sell/Rent your property",
    link: "for landloard",
    description:
      "with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
  },
];

const PropterHelp = () => {
  return (
    <div className="propterHelpCls">
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

      {/* <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          transform: "translate(-50%, 0%)",
          marginLeft: "50%",
          maxWidth: "1088px",
          width: "100%",
        }}
        className="propterRowCls"
      >
        {rowArray.map((e, i) => {
          return (
            <div key={i}>
              <Space>
                <Col className="gutter-row propertyColCls" span={32}>
                  <Card
                    className="mainCardCls"
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <Image
                        className="homeImgCls"
                        alt="example"
                        src={e.Img.src}
                        width={240}
                        height={100}
                      />
                    }
                  >
                    <Meta title={e.title} description={e.description} />
                    <a className="homeCardLink">{e.link}</a>
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
            </div>
          );
        })}
      </Row> */}

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          transform: "translate(-50%, 0%)",
          marginLeft: "50%",
          maxWidth: "1088px",
          width: "100%",
        }}
        className="propterRowCls"
      >
        {rowArray.map((e, i) => {
          return (
            <div key={i}>
              <Space>
                <Col className="gutter-row propertyColCls" span={32}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    
                  >
                     <Image
                     className="propertyImgCls"
                        alt="example"
                        src={e.Img.src}
                        width={100}
                        height={90}
                        
                      />
                    
                    <Meta
                     title={e.title} description={e.description}
                    />
                    <a className="homeCardLink">{e.link}</a>
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
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default PropterHelp;
