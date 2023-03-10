import React, { Fragment } from "react";
import ReactLoading from "react-loading";

const Loader = ({ type, color }:any) => (
  <Fragment>
    <div style={{ display: "flex" }}>
      <ReactLoading
        type={"spin"}
        color={"#ff4500"}
        height={100}
        width={100}
        className="loader loadingcss"
      />
      {/* <div
        style={{
          margin: "0 auto",
          marginTop: "2.2em",
        }}
      >
        <p style={{ fontSize: "larger", color: "#ff4500" }}>
          please wait...
        </p>
      </div> */}
    </div>
  </Fragment>
);
export default Loader;