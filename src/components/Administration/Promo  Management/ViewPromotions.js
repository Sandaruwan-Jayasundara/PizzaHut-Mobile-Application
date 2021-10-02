import React, {useState,useEffect } from "react";
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

function ViewPromotions(props) {

  const [model, setModelView] = useState(false);
  const [Users, setUsers] = useState([]);
  const [showPop, setShowPop] = useState(false);
  const [Notification, setNotification] = useState("");
  // const openPop = () => {
  //   setShowPop((prev) => !prev);
  // };

  //   const handleClose = () => setModelView(false);
  // const handleShow = () => setModelView(true);

useEffect(() => {
  axios
  .get("http://localhost:8070/promo/display-promo")
  .then((response) => {
    setUsers( response.data );

    console.log(response.data);
  })
  .catch(function (err) {
    console.log(err);
  });
},[]);
  
function onDelete(id){

  axios.delete(`http://localhost:8070/promo/delete-promo/${id}`).then(response =>{
          window.location.href="/admin/view-promos"
  })
  .catch(function(err){
      console.log(err);
  })
 
}


  return (
    <div>
      <Container className={"pt-3"}>
      <NotificationContainer />
        <Card className={"p-5 mb-3"}>
          <div className="text-center mb-2">
            <h1 className="form-titles ">USER MANAGEMENT</h1>
            <hr className="divide" />
          </div>
          <div>
            <Table
              striped
              bordered
              hover
              variant="dark"
              className={"text-center"}
            >
              <thead>
                <tr>
                  <th className={"table-data"}>Promotion Name</th>
                  <th className={"table-data"}>Promotion Title</th>
                  <th className={"table-data"}>Amount</th>
                  <th className={"table-data"}>Time Period</th>
                  <th>
                    <Tooltip title="Add" placement="top">
                      <IconButton aria-label="delete" href={"/admin/add-promo"}>
                        <IoMdAddCircleOutline color={"white"} />
                      </IconButton>
                    </Tooltip>
                  </th>
                </tr>
              </thead>
              {
                Users.map((data, key) => (
              
              <tbody>
                <tr>
                

                  <td className={"table-data"}>
                  {data.promoName}
                  </td>
                  <td className={"table-data"}>{data.promoTitle}</td>
                  <td className={"table-data"}>{data.totalCost}</td>
                  <td className={"table-data"}>{data.timePeriod}</td>
                  <td>
                    {" "}
                    <Tooltip
                      title="Edit"
                      className="table-icon"
                      style={{
                        color: "red",
                      }}
                    >
                      <Link to={`${data._id}`}>
                        <FaEdit color={"white"} />
                      </Link>
                    </Tooltip>

                    <Tooltip
                      title="Delete"
                      className="table-icon"
                      style={{
                        color: "red",
                      }}
                    >
                      <Link type="submit" onClick={() => onDelete(data._id)} >
                 
                        <FaTrash color={"white"} />
                      </Link>
                    </Tooltip>


                    <Tooltip
                      title="View"
                      className="table-icon"
                      style={{
                        color: "red",
                      }}
                    >
                      <Link to={`/admin/more-promo/${data._id}`}>
                        <FaEye color={"white"} />
                      </Link>
                    </Tooltip>

                  </td>
                </tr>
              </tbody>
            ))}
            </Table>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default ViewPromotions;
