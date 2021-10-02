import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, IconButton, Tooltip } from "@material-ui/core";
// import Modal from "./Modal";
import "../../../stylesheets/formTitle.css";
import axios from "axios";
import { Modal, Form, ToggleButton, Dropdown } from "react-bootstrap";
import { Card, Container, Table } from "react-bootstrap";
import {
  FaEdit,
  FaEye,
  FaTrash,
  IoMdAddCircleOutline,
  MdEmail,
} from "react-icons/all";
import ReactNotifications from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class MoreDetails extends Component {
  constructor(props){
    super(props);
    this.state ={
        promo:[]
    }


 }

componentDidMount(){
  console.log('asas')
    const id = this.props.match.params.id;
 axios.get(`http://localhost:8070/promo/get-promo/${id}`).then(res=>{
   this.setState({promo:res.data});
   console.log(promo[0].promoTitle)
 }).catch(err=>{
   console.log(err)
 })

}


  
  render() { 

    return (
      <div>
      
      </div>
      );
                    }
}

export default MoreDetails;