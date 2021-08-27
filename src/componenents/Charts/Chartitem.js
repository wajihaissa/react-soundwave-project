import React from "react";
import { Card } from "react-bootstrap";
import "./Chartitem.css"
const Chartitem = ({ movie }) => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={movie.posterurl} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text className="wajih">{movie.description}</Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Chartitem;
