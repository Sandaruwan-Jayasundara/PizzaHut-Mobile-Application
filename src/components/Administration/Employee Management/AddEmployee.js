import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Table, Row } from "react-bootstrap";

function AddEmployee() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");
  const Branch = localStorage.getItem("branch");

  function sendData(e) {
    e.preventDefault();
    //emplyees data
    const data = {
      FirstName,
      LastName,
      Email,
      Contact,
      Password,
      Role,
      Branch,
    };
    /*Add new employees to the system*/
    axios
        .post("http://localhost:8070/employee-management/add", data)
        .then((response) => {
          window.location.href = "/admin/em/view-employees";
        })
        .catch((err) => {
          alert(err); //error message alert
        });
  }

  return (
      <div>
        <Container className={"pt-3"}>
          <Card className={"p-5 mb-3"}>
            <div className="text-center mb-2">
              <h1 className="form-titles ">ADD EMPLOYEE</h1>
              <hr className="divide" />
            </div>
            <Form onSubmit={sendData}>
              <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                  />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Branch"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group controlId="formGridState">
                  <Form.Label>Role</Form.Label>
                  <select
                      class="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                  >
                    <option selected>Select the Role</option>
                    <option value="deliveryBoy">Delivery Boy</option>
                    <option value="Chef">Chef</option>
                  </select>
                </Form.Group>
              </Row>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                />
              </Form.Group>
              <br />

              <Form.Group controlId="formGridEmail">
                <Form.Label>Default Password</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Default Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                />
              </Form.Group>
              <br />

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#d00000", color: "#FFF" }}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
  );
}

export default AddEmployee;
