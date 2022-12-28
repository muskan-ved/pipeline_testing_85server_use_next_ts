import React, { useState } from "react";
import { Button, Divider, Layout, Typography } from "antd";
import { Input, Space } from 'antd';


export interface IAppProps {}

export default function App(props: IAppProps) {
  const [buyData, setBuyData] = useState("Find your dream home");
  const { Search } = Input;
  const handleBuy = () => {
    setBuyData("Find your dream home");
  };
  const handleRent = () => {
    setBuyData("Explore Local Rentals");
  };
  return (
    <Layout>
      <div className="contentdata">
        <div>
          <h1 className="showData">{buyData && buyData}</h1>
        </div>
        <br />
        <Button onClick={handleBuy} className="buycss">
          Buy
        </Button>
        &emsp; &emsp;
        <Button onClick={handleRent} className="rentcss">
          Rent
        </Button>
        <br/>
        <br/>
        <br/>
      </div>
      <div className="searchcss">
      <Search placeholder="City,Address,Community or Building" enterButton className="searchbarr"/>
      </div>
    </Layout>
  );
}
