import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Col, Row } from "react-bootstrap";
import ReactNotifications from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

//Login function
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Notification, setNotification] = useState("");

  function Authentication(e) {
    e.preventDefault();

    const data = {
      Email,
      Password,
    };

    axios
        .post("http://localhost:8070/auth/login", data)
        .then((response) => {
          //Check user types and display notifications
          if (response.data.users.Role === "Admin") {
            localStorage.setItem("user", "Admin");
            NotificationManager.success("Success", "Login Success");
            setTimeout(
                function () {
                  window.location.href = "/admin/view-employees";
                }.bind(this),
                1000
            );
          } else if (response.data.users.Role === "User") {
            localStorage.setItem("user", "User");

            localStorage.setItem("userName", response.data.users.FirstName);
            NotificationManager.success("Success", "Login Success");
            setTimeout(
                function () {
                  window.location.href = "/";
                }.bind(this),
                1000
            );
          } else if (response.data.users.Role === "BranchManager") {
            localStorage.setItem("user", response.data.users.Role);
            localStorage.setItem("branch", response.data.users.Branch);
            NotificationManager.success("Success", "Login Success");
            setTimeout(
                function () {
                  window.location.href = "/admin/em/view-employees";
                }.bind(this),
                1000
            );
          } else if (response.data.users.Role === "DeliveryManager") {
            localStorage.setItem("user", response.data.users.Role);
            localStorage.setItem("branch", response.data.users.Branch);
            NotificationManager.success("Success", "Login Success");
            setTimeout(
                function () {
                  window.location.href = "/admin/delivery";
                }.bind(this),
                1000
            );
          } else {
            NotificationManager.info("Invalid Login");
            setTimeout(
                function () {
                  window.location.href = "/";
                }.bind(this),
                1000
            );
          }
        })
        .catch((err) => {
          NotificationManager.warning("Warning", "Invalid Credentials ", 3000);
        });
  }
  return (
      <div>
        <Container className={"pt-3"}>
          <NotificationContainer />
          <Card className={"p-5 mb-3"}>
            <div className="text-center mb-2">
              <h1 className="form-titles ">Login</h1>
              <hr className="divide" />
            </div>
            <Form onSubmit={Authentication}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                />
              </Form.Group>
              <br />

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
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
              <br />
              <br />

              <a href="/signUp">Create account here?</a>
            </Form>
          </Card>
        </Container>
      </div>
  );
}

export default Login;
