import React from 'react'
import { Typography,Button } from "antd";

const BrokerTopContent = () => {
  return (
    <div className="brokerMainContent">
    <h2
      style={{
        paddingTop: "10vh",
        fontFamily: "system-ui",
        fontSize: "2.5rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
    Leads delivered to your doorstep
    </h2>
    <Typography
      style={{
        textAlign: "center",
        paddingTop: "3vh",
        fontFamily: "system-ui",
        fontSize: "1rem",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br/> Aliquam ut ullamcorper lorem. Etiam massa urna,
      <br/> condimentum at nunc ut, vehicula
      vulputate mi. 
      
    </Typography>
    <Button type="primary" className="brokermainContentBtn">Become A partner</Button>
  </div>
  )
}

export default BrokerTopContent