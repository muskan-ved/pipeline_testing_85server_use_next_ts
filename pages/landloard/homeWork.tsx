import React from "react";
import { Typography, Row, Col, Card, Space } from "antd";
const { Meta } = Card;

const HomeWorkComp = () => {
  const array = [
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "property information",
      description:
        "www.instagram. comwww.instagram .comwww.instagram.comwww.instagram.com",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Valuation",
      description:
        "www.instagram.comwww.instagram .com www.instagram.comwww.instagram.com",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Listing creation and assignment",
      description:
        "www.instagram.comwww .instagram.com www.instagram.comwww.instagram.com",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Monitor",
      description:
        "www.instagram.comwww.instagram.com www.instagram .comwww.instagram.com",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Pay",
      description:
        "www.instagram.comwww.instagram.com www.instagram.comwww .instagram.com",
    },
  ];
  return (
    <div className="landLoardHomeWorks">
      <h2
        style={{
          paddingTop: "10vh",
          fontFamily: "system-ui",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        How it works
      </h2>
      <Typography
        style={{
          textAlign: "center",
          fontFamily: "system-ui",
          fontSize: "1.5rem",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <Row justify="space-around" className="landloardTopContentRow">
        {array.map((e) => {
          return (
            <Card
            className="landloardTopContentCard"
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={e.img} />}
            >
              <Meta className="landloardTopContentMeta" title={e.title} description={e.description} />
            </Card>
          );
        })}
      </Row>
    </div>
  );
};

export default HomeWorkComp;
