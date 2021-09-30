import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../components/Customer/Menu";
import Cart from "../components/Customer/Main Pages/Cart";
import Home from "../components/Customer/Main Pages/Home";
import Profile from "../components/Customer/Profile/Profile";
function UserRoutes() {
  return (
    <>
      <Route path="/home" component={Home} />

      <Route path="/menu" component={Menu} />

      <Route path="/cart" component={Cart} />

      <Route path="/customer/profile" component={Profile} />
    </>
  );
}

export default UserRoutes;
