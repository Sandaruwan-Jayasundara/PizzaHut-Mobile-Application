import React, { useState } from "react";
import { Select } from "@material-ui/core";
import { IoList } from "react-icons/all";
import OrderItem from "./OrderItem";

function OrderHistory(props) {
  const [orderStatus, setOrderStatus] = useState("completed");
  function openOrdersList(value) {
    setOrderStatus(value);
  }
  return (
    <div>
      <div>
        <h6 className="profile-divider">
          <span>Order History</span>
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
            <option onClick={() => openOrdersList("completed")}>
              Completed
            </option>
            <option onClick={() => openOrdersList("cancelled")}>
              Cancelled
            </option>
          </Select>
        </div>{" "}
        <div>
          <IoList style={{ fontSize: 30, cursor: "pointer" }} />
        </div>
      </div>

      {/*menu eke items gaththu widihata*/}

      <div>
        <div className={` ${orderStatus === "completed" ? "" : "d-none"}`}>
          {" "}
          <OrderItem />
        </div>{" "}
        <div className={` ${orderStatus === "cancelled" ? "" : "d-none"}`}>
          <OrderItem />
        </div>{" "}
      </div>
    </div>
  );
}

export default OrderHistory;
