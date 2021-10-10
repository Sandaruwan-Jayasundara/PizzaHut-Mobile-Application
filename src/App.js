import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Login from "./components/Authentications/Login"
import AddProduct from "./components/Product Management/AddProduct"
import ViewProducts from "./components/Product Management/ViewProducts"
import UpdateProduct from "./components/Product Management/UpdateProduct"
import Orders from "./components/Product Management/Orders"
import ViewOrders from "./components/Product Management/ViewOrders"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
axios.defaults.withCredentials = true;
//Main function
function App() {
  // Sprinner
  const [isLoading, setLoading] = useState(true);
  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 800));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Router>
       <Switch>
           <Route exact path='/' component={Login}/>
           <Route  path='/Add-Product' component={AddProduct}/>
           <Route  path='/View-Product' component={ViewProducts}/>
           <Route  path='/update-Product/:id' component={UpdateProduct}/>
           <Route  path='/view-Orders' component={Orders}/>
           <Route  path='/view-more-order' component={ViewOrders}/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
