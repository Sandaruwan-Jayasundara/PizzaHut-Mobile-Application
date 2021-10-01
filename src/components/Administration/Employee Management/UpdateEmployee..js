import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";

function UpdateEmployee(props) {
  const { id } = useParams();

  const [FirstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Role, setRole] = useState("");
  const [Branch, setBranch] = useState("");
  const [LastName, setLastName] = useState("");


  /*get all employees*/
  useEffect(() => {
    axios
        .get(`http://localhost:8070/employee-management/getid/${id}`)
        .then((response) => {
          console.log(response.data.UserManagement.FirstName);
          setFirstName(response.data.UserManagement.FirstName);
          setLastName(response.data.UserManagement.LastName);
          setEmail(response.data.UserManagement.Email);
          setContact(response.data.UserManagement.Contact);
          setRole(response.data.UserManagement.Role);
          setBranch(response.data.UserManagement.Branch);
        })
        .catch(function (err) {
          console.log(err); //error message print in console
        });
  }, []);

  function sendData(e) {
    e.preventDefault();

    //Employee data

    const data = {
      FirstName,
      LastName,
      Email,
      Contact,
      Role,
      Branch,
    };

    console.log(data);
    /*update the select employee by id*/
    axios
        .put(`http://localhost:8070/employee-management/updates/${id}`, data)
        .then((response) => {
          window.location.href = "/admin/em/view-employees";
        })
        .catch((err) => {
          alert(err);  //Alert message display
        });
  }

  return (
      <div>
        <Container className={"pt-3"}>
          <Card className={"p-5 mb-3"}>
            <div className="text-center mb-2">
              <h1 className="form-titles ">UPDATE EMPLOYEE</h1>
              <hr className="divide" />
            </div>

            <Form onSubmit={sendData}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Emplyee ID"
                      defaultValue={Email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Branch"
                      defaultValue={Branch}
                      onChange={(e) => {
                        setBranch(e.target.value);
                      }}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="First Name"
                      defaultValue={FirstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Branch"
                      defaultValue={LastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Role</Form.Label>
                  <select
                      class="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                  >
                    <option selected>{Role}</option>
                    <option value="Delivery-Guy">Delivery Guy</option>
                    <option value="Chef">Chef</option>
                  </select>
                </Form.Group>
              </Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    defaultValue={Contact}
                    onChange={(e) => {
                      setContact(e.target.value);
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

export default UpdateEmployee;
