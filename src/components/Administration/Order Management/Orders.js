import React, { useState } from 'react'
import { Card, Container, Form, Row, Col,Dropdown } from "react-bootstrap";
import "../../../stylesheets/Orders.css";

function Orders(props) {
  return <main >
        
  <div class='body' align='center' style={{ marginTop: "80px" }} >
    <div class='card' style={{ backgroundColor: "white", width: "1250px", height:'auto' }}>
    <h1 className="form-titles ">ORDER MANAGEMENT</h1>
              
                      
                      <Form.Control
                          className="search"
                          name="search"
                          onChange={(event) => {
                              // setDescription(event.target.value);
                          }}
                          type="text"
                          placeholder="Search for customers"
                      />
                      <Form.Label className="filter-by" >Filter By Status:</Form.Label>                           
                  
                      <Dropdown  className="drop" >
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                              Drop Down
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                      
                      <br/>
                  
                  
    

  <table class='table'>
    <thead class='thead-dark'>
      <tr class='table-success'>
        <th scope='col'>Order ID</th>
        <th></th>
        <th scope='col'>Customer Name</th>
        <th scope='col'>Branch</th>
        <th scope='col'>Status</th>
        <th scope='col'>Date</th>
        <th scope='col'>Amount</th>
      </tr>
    </thead>
    <tbody>
      
        <tr>
          <td>
          
          </td>
          <td></td>
          <td style={{ paddingTop: "30px" }}>
          
          </td>
          <td >
          
          </td>
          <td >
          
          </td>
          <td>
              
          
          </td>
          <td>
          
          </td>

        </tr>
     
    </tbody>
  </table>

<button className="btn-report">Generate Report</button><br/>
</div>
</div>

</main>;
}

export default Orders;
