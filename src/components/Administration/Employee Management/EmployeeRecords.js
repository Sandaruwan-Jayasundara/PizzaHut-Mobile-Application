import axios from "axios";
import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

class EmployeeRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {

      FirstName: "",
      LastName: "",
      Email: "",
      Role: "",
      Branch:""
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:8070/employee-management/getid/${id}`)
      .then((response) => {
        console.log(response.data.UserManagement.Profile);
        this.setState({
          FirstName: response.data.UserManagement.FirstName,
          LastName: response.data.UserManagement.LastName,
          Email: response.data.UserManagement.Email,
          Role: response.data.UserManagement.Role,
          Branch: response.data.UserManagement.Branch,
        
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Paper elevation={"9"}>
          <Card className='text-center'>
            <Card.Header>
              {" "}
              <h1 className={"text-center sub-titles mt-2"}>Employee Details</h1>
            </Card.Header>
                    <Card.Body>
                      
              <Card.Text>
                <div align='center' style={{ marginTop: "60px", marginLeft:'100px' }}>
                  <div>
                    <form class='form1'>
         
                    <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              First Name
                              <span style={{ color: "red" }}>&#42; :</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.FirstName}</p>
                      </div>


                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Last Name
                              <span style={{ color: "red" }}>&#42;:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.LastName}</p>
                      </div>

                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Email<span style={{ color: "red" }}>&#42;:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.Email}</p>
                      </div>
            
                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Role<span style={{ color: "red" }}>&#42;:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.Role}</p>
                      </div>
                      { this.state.Role != "Admin" &&
                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Branch<span style={{ color: "red" }}>&#42;:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.Branch}</p>
                      </div>
                      }


         

                    </form>
                  </div>
                </div>
              </Card.Text><br/><br/>


            </Card.Body>
          </Card>
        </Paper>
      </Container>
    );
  }
}

export default EmployeeRecords;
