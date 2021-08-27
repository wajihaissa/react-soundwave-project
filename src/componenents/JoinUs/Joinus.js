import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Joinus.css";
const Joinus = () => {
  return (
    <div className="join">
      <p className="yassmine">
        Fun Starts <p className="fun">Now</p>
      </p>
      <div className="frm">
        <Form>
          <Form.Label>Name: </Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Button
              style={{ marginTop: "20px" }}
              variant="success"
              onClick={() => alert("welcome to sound wave")}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Joinus;
