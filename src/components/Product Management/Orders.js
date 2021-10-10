import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Badge,
  Form,
  Dropdown,
} from "react-bootstrap";
import "../../stylesheets/ViewProduct.css";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { MdAddShoppingCart } from "react-icons/all";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/all";
function Orders(props) {
  const [products, setProducts] = useState([]);
  const [view, viewState] = useState(false);
  const [vdelete, viewDelete] = useState(false);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:8070/orders/all")
      .then((res) => {
        setProducts(res.data);

        console.log(res.data);
      })
      .catch((err) => {
        console.log("error=>", err);
      });
  }, [view]);



  const removeProduct = (id) => {
    axios
      .delete(`http://localhost:8070/products//remove/${id}`)
      .then((res) => {
        window.location = "/View-Product";
        alert("Product Deleted Successfuly");
        if (!viewDelete) {
          viewDelete(true);
        } else {
          viewDelete(false);
        }
      })
      .catch((err) => {
        console.log("error=>", err);
      });
  };

  const viewAll = () => {
    axios
      .get("http://localhost:8070/orders/all")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("error=>", err);
      });
  };


    return (
      <div>
        <Container className="pt-3">
          <Card className={"p-5 mb-3"}>
          <div className={"go-back-icon"}>
            <Link to={"/View-Product"}>
              <ImExit color={"black"} />
            </Link>
          </div>
            <div className="text-center mb-2">
              <h1 className="form-titles m-0">NEW ORDERS</h1>
              <hr className="divide" />
            </div>
            <Grid container spacing={3}>
              
         
    
   


                  {products.map((orders)=>(
                  <Grid item xs={4}>
                    <Paper>
                      <div>
                        <Card onClick={(e)=>{
                          history.push({ 
                            pathname:'/view-more-order',
                            state:{
                              products: orders.cartItems,
                              Address: orders.order
                            }
                          })
                        }}>
                        <Typography gutterBottom component="h2">
                       NEW ORDER
                            </Typography>
                       





                          <CardContent>



                          <Typography
                              style={{ fontSize: "16px", textAlign: "start" }}
                              component="div"
                              color="textSecondary"
                            >
                              Name :{" "}
                              <Typography color="textPrimary" component="span" style={{marginLeft:25}}>
                              {orders.order.BuyerName}
                              </Typography>
                            </Typography>



                            <Typography
                              style={{ fontSize: "16px", textAlign: "start" }}
                              component="div"
                              color="textSecondary"
                            >
                              Number :{" "}
                              <Typography color="textPrimary" component="span" style={{marginLeft:10}}>
                              {orders.order.phone}
                              </Typography>
                            </Typography>

                            <Typography
                              style={{ fontSize: "16px", textAlign: "start" }}
                              component="div"
                              color="textSecondary"
                            >
                              Street :{" "}
                              <Typography color="textPrimary" component="span" style={{marginLeft:25}}>
                              {orders.order.BuyerName}
                              </Typography>
                            </Typography>


                            <Typography
                              style={{ fontSize: "16px", textAlign: "start" }}
                              component="div"
                              color="textSecondary"
                            >
                              City :{" "}
                              <Typography color="textPrimary" component="span" style={{marginLeft:40}}>
                              {orders.order.BuyerName}
                              </Typography>
                            </Typography>


                            <Typography
                              style={{ fontSize: "16px", textAlign: "start" }}
                              component="div"
                              color="textSecondary"
                            >
                              Province :{" "}
                              <Typography color="textPrimary" component="span" style={{marginLeft:5}}>
                              {orders.order.BuyerName}
                              </Typography>
                            </Typography>

                            <Typography
                              style={{ fontSize: "11px", textAlign: "end",  marginTop:40 }}
                              component="div"
                              color="textSecondary"
                            
                            >
                              TIME :{" "}
                              <Typography color="textPrimary" component="span" >
                              {orders.Date}
                              </Typography>
                            </Typography>
                          </CardContent>
                          <div className="d-flex justify-content-around ">
                          </div>
                        </Card>
                      </div>
                    </Paper>
                  </Grid>

        ))}















          
            </Grid>
          </Card>
        </Container>
      </div>
    );
 
}

export default Orders;
