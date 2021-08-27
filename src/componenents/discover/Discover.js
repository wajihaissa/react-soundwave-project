import React from "react";
import "./Discover.css";
import { Link } from "react-router-dom";
import test from "./../../microphone.svg";
import test1 from "./../../albums.svg";
import test2 from "./../../more.svg";

const Discover = () => {
  return (
    <div className="discover">
      <div className="disc">
        
      <span className="mm"> Discover new muisc</span>{" "}
        
        <div className="cards">
          <Link to="/Charts">
            <div className="card1" style={{ width: "90px", height: "90px" }}>
              <img
                src={test}
                style={{ width: "30px", height: "30px", marginLeft: "29px" }}
              />
              <p
                style={{
                  fontSize: "22px",
                  marginTop: "10px",
                  marginLeft: "15px",
                }}
              >
                Charts
              </p>
            </div>
          </Link>
          
          
          <Link to="/more">
          <div className="card3" style={{ width: "90px", height: "90px" }}>
            <img
              src={test2}
              style={{ width: "30px", height: "30px", marginLeft: "29px" }}
            />
            <p
              style={{
                fontSize: "22px",
                marginTop: "10px",
                marginLeft: "15px",
              }}
            >
              More
            </p>
          </div>
          </Link>
        </div>
        <div style={{ width: "450px ", marginTop: "50px" }}>
          <p style={{ fontSize: "18px" }}>
            by joining us you can listen to the latest Albumes released with
            only click
          </p>
        </div>
      </div>
      <img
        src="/covers.jpg"
        style={{ width: "400px", aspectRatio: "1:1", height: "500px",marginLeft:"50px" }}
      />
    </div>
  );
};

export default Discover;
