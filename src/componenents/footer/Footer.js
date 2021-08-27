import React from "react";
import "./Footer.css";
import test from "./../../twitter.svg";
import test2 from "./../../facebook.svg";

const Footer = () => {
  return (
    <div className="ftr">
      <div className="first">
        <h5>About Us</h5>
        <h5 style={{ marginLeft: "35px" }}>Contact</h5>
      </div>
      <div className="second">
        <div className="gg">
       <a href='https://twitter.com/Spotify?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank"> <img width="30px"height="30px" style={{width:"30px" ,height:"30px" }} src={test} />
          </a>
          <h5>Twitter</h5>
        </div>
        <div className="ff">
       <a href='https://www.facebook.com/SpotifyNAF/?brand_redir=6243987495' target="_blank" > <img  style={{width:"30px" ,height:"30px", marginBottom:"2px"}} src={test2} />
          </a>
          <h5>facebook</h5>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
