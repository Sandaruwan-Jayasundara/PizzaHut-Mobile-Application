import React, { useState } from "react";
import "../../../../stylesheets/Profile.css";
import { Dropdown, Form } from "react-bootstrap";
import { IoList } from "react-icons/all";
import { Select, Typography } from "@material-ui/core";
import OrderItem from "./OrderItem";
function CurrentOrders(props) {
  const [orderStatus, setOrderStatus] = useState("All");
  function openOrdersList(value) {
    setOrderStatus(value);
  }
  return (
    <div>
      <div>
        <h6 className="profile-divider">
          <span>Current Orders</span>
        </h6>{" "}
      </div>
      <div className="d-flex justify-content-between align-self-center">
        <div>
          {/*Kethaka manage order status here on the drop down*/}
          <Select
            native
            variant={"outlined"}
            // value={selectedOption}
            className={"dropdown-lister"}
            onChange={""} //Refer Single product.js Modal tag
          >
            {" "}
            {/*<option aria-label="None" value="" />*/}
            {/*loop order statuses below*/}
            <option onClick={() => openOrdersList("All")}>All</option>
            <option onClick={() => openOrdersList("New")}>New</option>
            <option onClick={() => openOrdersList("Processing")}>
              Processing
            </option>
            <option onChange={() => openOrdersList("Prepared")}>
              Prepared
            </option>
            <option onChange={() => openOrdersList("Incoming")}>
              On the way
            </option>
          </Select>
        </div>{" "}
        <div>
          <IoList style={{ fontSize: 30, cursor: "pointer" }} />
        </div>
      </div>

      {/*menu eke items gaththu widihata*/}

      <div>
        <div className={` ${orderStatus === "All" ? "" : "d-none"}`}>
          {" "}
          <OrderItem />
        </div>{" "}
        <div className={` ${orderStatus === "New" ? "" : "d-none"}`}>
          <OrderItem />
        </div>{" "}
        <div className={` ${orderStatus === "Processing" ? "" : "d-none"}`}>
          <OrderItem />
        </div>{" "}
        <div className={` ${orderStatus === "Prepared" ? "" : "d-none"}`}>
          <OrderItem />
        </div>{" "}
        <div className={` ${orderStatus === "Incoming" ? "" : "d-none"}`}>
          <OrderItem />
        </div>
      </div>
    </div>
  );
}

export default CurrentOrders;
