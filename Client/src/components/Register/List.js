import React, { Fragment, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import NavBar from "./NavBar";
import { BACKEND_BASE_URL } from "../constant/index";
import Axios from "axios";

function List() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_BASE_URL}/registration/getAll`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const RemeoveData = (id) => {
    Axios.delete(`${BACKEND_BASE_URL}/registration/delete/${id}`)
      .then(() => {
        alert("registration Deleted");
        window.location.replace("/list");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Fragment>
      <NavBar />
      <h4
        style={{ textAlign: "center", marginTop: "10px", marginBottom: "20px" }}
      >
        Registration List
      </h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Registration Number</th>
            <th>Type</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td key={item._id}>{item._id}</td>
              <td>{item.plateNumber}</td>
              <td>{item.type}</td>
              <td>
                <Button
                  onClick={() => window.location.replace("/update/" + item._id)}
                  variant="primary"
                  type="submit"
                >
                  Update
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => RemeoveData(item._id)}
                  variant="danger"
                  type="submit"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default List;
