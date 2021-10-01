import React, { useState } from "react";
import { Card, Container, Form, Row, Col, Dropdown } from "react-bootstrap";
import "../../../stylesheets/Orders.css";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CSVLink } from "react-csv";
import { Button } from "@material-ui/core";
import { RiDownload2Fill } from "react-icons/all";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const fileHeaders = [
    { label: "OrderID", key: "_id" },
    { label: "UserID", key: "user" },
    { label: "Status", key: "status" },
    { label: "Date", key: "order_date" },
    { label: "Total", key: "total_price" },
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:8070/orders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("err=>" + err);
      });
  }, [3]);

  const viewOrder = (order) => {
    history.push({
      pathname: `/admin/view-order`,
      state: {
        order: order,
      },
    });
  };

  return (
    <Container className={"pt-3"}>
      <Card className={"p-5 mb-3"}>
        <div className="text-center ">
          <h1 className="form-titles ">ORDER MANAGEMENT</h1>
          <hr className="divide" />
        </div>
        <div
          className={
            "d-flex gap-2 justify-content-between p-3 pt-0  align-items-center"
          }
        >
          <div>
            <div className={"d-flex gap-3"}>
              <Form.Label className={"pt-3"}>Filter By Status:</Form.Label>
              <Dropdown>
                <Dropdown.Toggle
                  style={{ width: "100px" }}
                  variant="light"
                  id="dropdown-basic"
                >
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu
                  onClick={(e) => {
                    axios
                      .get(`http://localhost:8070/orders/${e.target.name}`)
                      .then((res) => {
                        setOrders(res.data);
                      })
                      .catch((err) => {
                        console.log("err=>" + err);
                      });
                  }}
                >
                  <Dropdown.Item name="all">All</Dropdown.Item>
                  <Dropdown.Item name="new">New</Dropdown.Item>
                  <Dropdown.Item name="processing">Processing</Dropdown.Item>
                  <Dropdown.Item name="ready">Ready</Dropdown.Item>
                  <Dropdown.Item name="delivered">Delivered</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            {" "}
            <Form.Control
              name="search"
              onChange={(event) => {
                // setDescription(event.target.value);
              }}
              type="text"
              placeholder="Search for customers"
            />
          </div>
        </div>
        <table class="table">
          <thead class="thead-dark">
            <tr class="table-success">
              <th scope="col">Order ID</th>
              <th></th>
              <th scope="col">User ID</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr onClick={viewOrder.bind(this, order)}>
                  <td>{order._id}</td>
                  <td></td>
                  <td>{order.user}</td>
                  <td>{order.status}</td>
                  <td>{order.order_date}</td>
                  <td>RS.{order.total_price}.00</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <CSVLink
          headers={fileHeaders}
          data={orders}
          fileName="Orders.csv"
          target="_blank"
        >
          <Button
            className={"cancel-button"}
            variant={"outlined"}
            style={{ width: "200px", marginLeft: "42%" }}
            startIcon={<RiDownload2Fill />}
          >
            Generate Report
          </Button>
        </CSVLink>
        <br />
      </Card>
    </Container>
  );
}

export default Orders;
