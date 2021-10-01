import React, { useEffect, useState } from "react";
import { Card, Container, Form, Row, Col, Dropdown } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router";
import ChangeStatus from "./ChangeStatus";

function ViewOrder(props) {
  const location = useLocation();
  const products = location.state.order.products;
  const [status, setStatus] = useState(location.state.order.status);

  return (
    <div>
      <Container className={"pt-3"}>
        <Card className={"p-5 mb-3"}>
          <h1>Order No:{location.state.order._id}</h1>
          <table class="table">
            <thead class="thead-dark">
              <tr class="table-success">
                <th scope="col">Product ID</th>
                <th scope="col">Title</th>
                <th scope="col">Size</th>
                <th scope="col">Qty</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr>
                    <td>{product.product_id}</td>
                    <td></td>
                    <td>{product.title}</td>
                    <td>{product.size}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ChangeStatus status={status} />
        </Card>
      </Container>
    </div>
  );
}

export default ViewOrder;
