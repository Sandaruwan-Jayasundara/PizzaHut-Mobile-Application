import React, { Component } from 'react'
import {  Row, Col } from "react-bootstrap";
import "../../../stylesheets/Orders.css";
import { Link } from "react-router-dom";
import { Avatar, Button, IconButton, Tooltip } from "@material-ui/core";
// import Modal from "./Modal";
import "../../../stylesheets/formTitle.css";
import axios from "axios";
import { Modal, Form, ToggleButton } from "react-bootstrap";
import { Card, Container, Table } from "react-bootstrap";
import {
  FaEdit,
  FaEye,
  FaTrash,
  IoMdAddCircleOutline,
  MdEmail,
} from "react-icons/all";

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';  
import Paper from '@material-ui/core/Paper';  
import logo from './Background.jpg';

class PaymentManagement extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            transaction:[],
            filter:""
         }
         
         this.Filter = this.Filter.bind(this);
         this.Report = this.Report.bind(this);
    }


componentDidMount(){

    axios
        .get("http://localhost:8070/payment/payment-management/display")
        .then((response) => {
        
            this.setState({transaction: response.data})

          console.log(response.data);
        })
        .catch(function (err) {
          console.log(err);
        });


}
componentDidUpdate(){

  if(this.state.filter == "All"){

    axios
        .get("http://localhost:8070/payment/payment-management/display")
        .then((response) => {
        
            this.setState({transaction: response.data})

          console.log(response.data);
        })
        .catch(function (err) {
          console.log(err);
        });


  }else if(this.state.filter == "Refund"){
    
    axios
    .get(`http://localhost:8070/payment/payment-management/filter/${this.state.filter}`)
    .then((response) => {
    
        this.setState({transaction: response.data})

      console.log(response.data);
    })
    .catch(function (err) {
      console.log(err);
    });

  }else if(this.state.filter == "Completed"){
   
    axios
    .get(`http://localhost:8070/payment/payment-management/filter/${this.state.filter}`)
    .then((response) => {
    
        this.setState({transaction: response.data})
    })
    .catch(function (err) {
      console.log(err);
    });
  }


}

Filter=(e)=>{
this.setState({filter:e})
}

Report =()=>{

  const input = document.getElementById('pdfdiv');  
  html2canvas(input)  
    .then((canvas) => {  
      
      var imgWidth = 270;  
      var pageHeight = 290;  
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
      const imgData = canvas.toDataURL('image/png');  
      const pdf = new jsPDF('p', 'mm', 'a4')  
      
      var position = 0;  
      var heightLeft = imgHeight; 
      pdf.addImage(logo,'png', 0, 0, 220, 30); 
      pdf.setFont('Helvertica','bold');
      pdf.setFontSize(14)
      pdf.text(5,53,"Report :");
      pdf.text(5,61,"Division :");
      pdf.setFont('Helvertica','normal');
      pdf.setFontSize(12)
      pdf.text(30,53,"Transaction");
      pdf.text(30,61," Payment Management Division");

      pdf.addImage(imgData, 'JPEG', 0, 70, imgWidth, imgHeight);  
      pdf.save("Transactions.pdf");  
    });  
    
}

    render() { 
        return ( <main >
        
            <div class='body' align='center' style={{ marginTop: "80px", marginLeft:'10px' ,marginRight:'20px'}} >
              <div class='card' style={{ backgroundColor: "white", width: "1250px", height:'auto' }}>
              <h1 className="form-titles ">PAYMENT MANAGEMENT</h1>
                        
                  
               <Form.Label className="filter-by" >Filter By Transactions:</Form.Label>                           


                    <DropdownButton
               
                    className="drop"
                    alignRight
                    title="Filter Transactions"
                    id="dropdown-menu-align-right"
                    variant="danger"
                    onSelect={this.Filter}
                      >
                            <Dropdown.Item eventKey="All">All</Dropdown.Item>
                            <Dropdown.Item eventKey="Completed">Complete</Dropdown.Item>
                            <Dropdown.Item eventKey="Refund">Refund</Dropdown.Item>
                            <Dropdown.Divider />
  
                    </DropdownButton>



                                <br/>
                            
                            
              
          
            <table class='table' id="pdfdiv" component={Paper}>
              <thead class='thead-dark'>
                <tr class='table-dark'>
                  <th scope='col'>Transaction ID</th>
                  <th></th>
                  <th scope='col'>Product Name</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                  this.state.transaction.map((data, key) => (

            
                  <tr>
                    <td>
                    {data.transaction}
                    </td>
                    <td></td>
                    <td>
                    {data.Title}
                    </td>
                    <td >
                    {data.status}
                    </td>
                    <td >
                    {data.fullDate}
                    </td>
                    <td>
                        
                    Rs. {data.Total} .00
                    </td>
                    <td>

                            <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ width:'100px', height:'35px', fontSize:'14px'}}>
                                       option
                                    </Dropdown.Toggle>
          
                                    <Dropdown.Menu>
                                        <Dropdown.Item href={`/admin/payment/filter/${data._id}`}>View</Dropdown.Item>
                                        { data.status != "Refund" &&
                                        <Dropdown.Item href={`/admin/payment/refund/${data._id}`}>Refund</Dropdown.Item>
                                        }
                                        <Dropdown.Item href={`/admin/payment/contact/${data._id}`}>Contact</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                



                            </td>
          
                  </tr>
                  ))}
              </tbody>
            </table>
          
          <button style={{color:'white'}} className="btn-report" onClick={this.Report}>Generate Report</button><br/>
          </div>
          </div>
          
          </main> );
    }
}
 
export default PaymentManagement;
