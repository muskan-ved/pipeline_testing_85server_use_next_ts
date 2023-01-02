import React from "react";
import { Typography, Row, Col, Card, Space } from "antd";
import Image from "next/image";
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
        {array.map((e,i) => {
          return (
            <div key={i}>
            <Card
            className="landloardTopContentCard"
            hoverable
            // style={{ width: 240 }}
            cover={<Image alt="example" src={e.img} width={240} height={100} />}
            >
              <Meta className="landloardTopContentMeta" title={e.title} description={e.description} />
            </Card>
              </div>
          );
        })}
      </Row>
    </div>
  );
};

export default HomeWorkComp;
