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
import { useHistory,useLocation } from "react-router-dom";
import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/all";

function ViewOrders(props) {



  const location = useLocation();
  const products = location.state.products



    return (
      <div>
        <Container className="pt-3">
          <Card className={"p-5 mb-3"}>
          <div className={"go-back-icon"}>
            <Link to={"/view-Orders"}>
              <ImExit color={"black"} />
            </Link>
          </div>
            <div className="text-center mb-2">
              <h1 className="form-titles m-0">ORDER MANAGEMENT</h1>

              <hr className="divide" />
            </div>
            <Grid container spacing={3}>
              {products.map((product, index) => {
                return (
                  <Grid item xs={4}>
                    <Paper>
                      <div key={index}>
                        <Card>
                          <CardMedia
                            style={{ borderStyle: "none" }}
                            component="img"
                            height="190"
                            image=""
                            src={`http://localhost:3000/${product.itemImage}`}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom component="h2">
                              {product.menuId}
                            </Typography>
                            <Typography
                              style={{ fontSize: "12px" }}
                              color="textSecondary"
                              component="p"
                            >
                              {product.itemTitle}
                            </Typography>
                            <Typography
                              style={{ fontSize: "11px", textAlign: "end" }}
                              component="div"
                              color="textSecondary"
                            >
                              Total:{" "}
                              <Typography color="textPrimary" component="span">
                                Rs.{product.price}.00
                              </Typography>

                     
                            </Typography>
                            Quantity:{" "}
                              <Typography color="textPrimary" component="span">
                                {product.qty}
                              </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </Paper>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Card>
        </Container>
      </div>
    );

}

export default ViewOrders;
