import React from "react";

function OrderItem(props){
  return (
    <div>
      <div className={"list-order-item  d-flex justify-content-between"}>
        <div>
          <div>
            <span className={"order-title"}>ORDER ID:{props.orders._id}</span>
          </div>
          <div>
            <span className={"order-desc"}>2021-02-21 </span>
          </div>
        </div>{" "}
        <div className={" d-grid "}>
          <div>
            <span className={"status-title "}>New</span>
          </div>
          <div>
            <span className={"status"}>Status</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
