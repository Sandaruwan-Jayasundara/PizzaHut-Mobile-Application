import React from "react";
import { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  FaUserCircle,
  IoLocationSharp,
  IoSearchOutline,
} from "react-icons/all";
import "../../../../stylesheets/CustomerNav.css";
import {
  Badge,
  Button,
  Fade,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from 'react-router-dom';


function CustomerNavbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    axios.get("http://localhost:8070/carts").then((res) => {

        localStorage.setItem("count", res.data.length);

    }).catch((err) => {
        console.log("err=>" + err);
    });
}, [6]);
  function Logout() {
    axios
    .get("http://localhost:8070/auth/logout")
    .then((response) => {
      localStorage.removeItem("user");
      localStorage.removeItem("userid");
      localStorage.removeItem("icon_id");

      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });
  } 




  const role = localStorage.getItem("user");

  if (role) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        className={"customer-nav "}
        expand={"lg"}
        variant={"dark"}
        bg={"dark"}
      >
        <Container fluid={"lg"}>
          <Navbar.Brand href="/">
            <img src={"Pizza.png"} height={30} width={110} alt={""} />{" "}
          </Navbar.Brand>
          <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Button
              className="deliver-button m-0"
              startIcon={<IoLocationSharp className={"deliver-icon"} />}
            >
              <div>
                <span
                  className={"d-block  text-deliver "}
                  style={{
                    fontSize: 13,
                    fontWeight: "lighter",
                    color: "#dedede",
                  }}
                >
                  {" "}
                  Deliver to
                </span>
                <span className={"d-block text-deliver p-0 m-0"}> My Home</span>
              </div>
            </Button>
          </Nav>

          <Form className="d-flex me-auto ">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              className={"bar"}
            />

            <Button
              className={"search-button"}
              startIcon={<IoSearchOutline style={{ color: "white" }} />}
            />
          </Form>

          <div>
            <Badge badgeContent={localStorage.getItem("count")} color="secondary">
              <ShoppingCart
                style={{
                  color: "white",
                }}
                onClick={() => (window.location.href = "/cart")}
                className={"menu-icons"}
                fontSize={"large"}
              />
            </Badge>

            <AccountCircleIcon
              style={{
                color: "white",
                marginLeft: 10,
              }}
              fontSize={"large"}
              className={"menu-icons"}
              onClick={handleClick}
            />
            <Menu
              className={"p-2 "}
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Submissions</MenuItem>
              <MenuItem onClick={handleClose}>Inbox</MenuItem>
              <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}else{


  return (
    <div>
      <Navbar
        collapseOnSelect
        className={"customer-nav "}
        expand={"lg"}
        variant={"dark"}
        bg={"dark"}
      >
        <Container fluid={"lg"}>
          <Navbar.Brand href="/">
            <img src={"Pizza.png"} height={30} width={110} alt={""} />{" "}
          </Navbar.Brand>
          <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Button
              className="deliver-button m-0"
              startIcon={<IoLocationSharp className={"deliver-icon"} />}
            >
              <div>
                <span
                  className={"d-block  text-deliver "}
                  style={{
                    fontSize: 13,
                    fontWeight: "lighter",
                    color: "#dedede",
                  }}
                >
                  {" "}
                  Deliver to
                </span>
                <span className={"d-block text-deliver p-0 m-0"}> My Home</span>
              </div>
            </Button>
          </Nav>

          <Form className="d-flex me-auto ">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              className={"bar"}
            />

            <Button
              className={"search-button"}
              startIcon={<IoSearchOutline style={{ color: "white" }} />}
            />
          </Form>

          <div>

          <Link to="/login">
              <div>
                <span
                  className={"d-block  text-deliver "}
                  style={{
                    fontSize: 13,
                    fontWeight: "lighter",
                    color: "#dedede",
                  }}
                >
                  {" "}
                  Login
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );




  
}
}

export default CustomerNavbar;
