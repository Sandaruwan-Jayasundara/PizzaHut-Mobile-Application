import React from "react";
import "../../../stylesheets/paymentManagement.css"

//Payment filter method
function Filter(props) {
  return (
    <div class="area">
    <ul class="price">
    <li class="header">Basic</li>
    <li class="grey">$ 9.99 / year</li>
    <li>10GB Storage</li>
    <li>10 Emails</li>
    <li>10 Domains</li>
    <li>1GB Bandwidth</li>
    <li class="grey"><a href="#" class="Viewbutton">Sign Up</a></li>
  </ul>
</div>
  );
}

export default Filter;
