import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing">
      <img src="/landing-page-girl.png" />
      <div>
        <div className="part">
          <h1>
            Feel The <p>Muisc</p>
          </h1>
          <h6>stream over all the muisc you want with only one click </h6>
          <h6>so what are you waiting for !!</h6>
          <Link to="/JoinUS">
            <Button className="btn" variant="outline-primary">
              Join us
            </Button>
          </Link>
          <div className="circles">
            <div className="home-page-circle-1"></div>
            <div className="home-page-circle-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;