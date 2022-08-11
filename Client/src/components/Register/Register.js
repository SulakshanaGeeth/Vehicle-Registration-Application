import React, { useState, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { BACKEND_BASE_URL } from "../constant/index";
import Axios from "axios";
import NavBar from "./NavBar";

const List = (props) => {
  const [plateNumber, setplateNumber] = useState();

  const AddRegistration = (e) => {
    e.preventDefault();

    Axios.post(`${BACKEND_BASE_URL}/registration/create`, {
      plateNumber,
    })
      .then(() => {
        alert("Registration added");
        window.location.replace("/list");
      })
      .catch((err) => {
        alert(err.response.data.error);
        window.location.replace("/");
      });
  };

  return (
    <Fragment>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h4
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Vehicle Registration
        </h4>
        <Form>
          <Form.Group className="mb-3" controlId="registration">
            <Form.Label style={{ marginRight: "10%" }}>
              Registration Number
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter registration no"
              onChange={(e) => {
                setplateNumber(e.target.value);
              }}
              style={{ width: "20%", marginLeft: "40%" }}
            />
          </Form.Group>
          <Button onClick={AddRegistration} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default List;
