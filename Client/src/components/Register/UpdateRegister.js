import React, { useState, Fragment, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { BACKEND_BASE_URL } from "../constant/index";
import Axios from "axios";
import NavBar from "./NavBar";

const UpdateRegistration = (props) => {
  const id = location.pathname.substring(8);
  console.log(id);
  const [plateNumber, setplateNumber] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BACKEND_BASE_URL}/registration/get/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setplateNumber(result.plateNumber);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const UpdateData = (e) => {
    e.preventDefault();

    Axios.put(`${BACKEND_BASE_URL}/registration/update/${id}`, {
      plateNumber,
    })
      .then(() => {
        alert("Registration Updated");
        window.location.replace("/list");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Fragment>
      <NavBar />
      <h4>Update Registration</h4>
      <Form>
        <Form.Group className="mb-3" controlId="Registration">
          <Form.Label>Registration</Form.Label>
          <Form.Control
            type="text"
            value={plateNumber}
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

export default UpdateRegistration;
