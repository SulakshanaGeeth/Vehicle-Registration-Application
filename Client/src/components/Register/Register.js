import React, { useState, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { BACKEND_BASE_URL } from "../constant/index";
import Axios from "axios";
import NavBar from "./NavBar";

const List = (props) => {
  const [plateNumber, setplateNumber] = useState();

  const UpdateData = (e) => {
    e.preventDefault();

    Axios.post(`${BACKEND_BASE_URL}/registration/create`, {
      plateNumber,
    })
      .then(() => {
        alert("registration added");
        window.location.replace("/list");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Fragment>
      <NavBar />
      <h4>Vehicle Registration</h4>
      <Form>
        <Form.Group className="mb-3" controlId="registration">
          <Form.Label>Registration No.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter registration no"
            onChange={(e) => {
              setplateNumber(e.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={UpdateData} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default List;
