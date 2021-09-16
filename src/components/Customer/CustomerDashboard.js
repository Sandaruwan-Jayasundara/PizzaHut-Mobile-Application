import React from "react";
import { Switch } from "react-router-dom";
import UserRoutes from "../../routes/UserRoutes";
import CustomerNavbar from "./Main Pages/Supportive Files/CustomerNavbar";
import BottomBar from "./Main Pages/Supportive Files/CustomerBottomBar";

function CustomerDashboard(props) {
  return (
    <div className={"dash"}>
      <CustomerNavbar />
      <BottomBar />

      <div className={"customer-container"}>
        <Switch>
          <UserRoutes />
        </Switch>
      </div>
    </div>
  );
}

export default CustomerDashboard;
