import axios from "axios";
import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { GiRollingEnergy, ImExit } from "react-icons/all";

class ViewRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Management: [],
      transaction:"",
      Title: "",
      Image: "",
      Qty: "",
      Total: "",
      time:"",
      fullDate: "",
      Email: "",
      UserName:"",
      refund:"",
      refundDate:"",
      status:"",
      RefundTransaction:""
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:8070/payment/payment-management/transaction/${id}`)
      .then((response) => {
        this.setState({
          transaction: response.data.transactions.transaction,
          Title: response.data.transactions.Title,
          Email: response.data.transactions.Email,
          Image: response.data.transactions.Image,
          Qty: response.data.transactions.Qty,
          Total: response.data.transactions.Total,
          time: response.data.transactions.time,
          fullDate: response.data.transactions.fullDate,
          UserName: response.data.transactions.UserName,
          refund: response.data.transactions.refund,
          refundDate: response.data.transactions.refundDate,
          RefundTransaction: response.data.transactions.RefundTransaction,
          status: response.data.transactions.status,
          RefundStatus: "Completed"
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
          <div className={"go-back-icon"}>
            <Link to={"/admin/payment/management"}>
              <ImExit color={"black"} />
            </Link>
          </div>
            <Card.Header>
              {" "}
              <h1 className={"text-center sub-titles mt-2"}>Transactions</h1>
            </Card.Header>
                    <Card.Body>
                        
       
              <Card.Text>
                <div align='center' style={{ marginTop: "60px", marginLeft:'100px' }}>
                  <div >
                    <form style={{backgroundColor:'white'}} class='form1'>

                    <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <h3 style={{ float: "left", marginLeft: "80px",color:'black' }}>
                             Transaction
                              <span style={{ color: "red" }}> </span>
                            </h3>
                          </span>
                        </div>
                      </div>


         
                    <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Transaction
                              <span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.transaction}</p>
                      </div>


                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Date
                              <span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.fullDate}</p>
                      </div>

                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Time<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.time}</p>
                      </div>
            
          
                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Amount<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>Rs. {this.state.Total}. 00</p>
                      </div>
                      { this.state.status == "Refund" &&
                      <div>
                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <h3 style={{ float: "left", marginLeft: "80px", color:'black', marginTop:'20px' }}>
                              Refund
                            </h3>
                          </span>
                        </div>
                      </div>
      
                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Refund Transaction<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.RefundTransaction}</p>
                      </div>

                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Refund Amount<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>Rs. - {this.state.refund}. 00</p>
                      </div>

                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Refund Date<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p> {this.state.refundDate}</p>
                      </div>


                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Refund Status<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.RefundStatus}</p>
                      </div>
</div>
                    }


                    <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <h3 style={{ float: "left", marginLeft: "80px", color:'black', marginTop:'20px' }}>
                              Product
                            </h3>
                          </span>
                        </div>
                      </div>

                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Buyer Name<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>  {this.state.UserName}  </p>
                      </div>

                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Buyer Email<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>  {this.state.Email}  </p>
                      </div>

                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Product Name<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>  {this.state.Title}  </p>
                      </div>
                  


                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Product<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        
                        <p>
                        <img
                        alt='Avatar'
                        center
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                        src={`http://localhost:3000/Profile/${this.state.Image}`}
                      />
                        
                        </p>
                      </div>
                  

                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Quantity<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p>[  {this.state.Qty}  ]</p>
                      </div>
                  
                  
                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Price<span style={{ color: "red" }}>:</span>
                            </p>
                          </span>
                        </div>
                        <p> Rs. {this.state.Total} .00 </p>
                      </div>
                  


                    </form>
                  </div>
                </div>
              </Card.Text><br/><br/>
              <Link to={"/admin/payment/management"}>
                        Back to Home
            </Link>

            </Card.Body>
          </Card>
        </Paper>
      </Container>
    );
  }
}

export default ViewRecords;
