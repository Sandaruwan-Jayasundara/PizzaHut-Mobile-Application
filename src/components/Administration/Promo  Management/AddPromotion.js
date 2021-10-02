import React, { Component } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Table } from "react-bootstrap";
import "../../../stylesheets/formTitle.css";
import "../../../stylesheets/AddUser.css";
import {  ImExit } from "react-icons/all";
import { Link } from "react-router-dom";
import Select from "react-select"


class addPromotion extends Component {
  constructor(props){
    super(props);
    this.state ={
    category: [],
    selectCategory: [],
    options:"",

    PromotionName:"",
    PromotionTitle:"",
    TimePeriod:"",
    Amount:"",
   


    }
    this.oncategory = this.oncategory.bind(this);
 }


  componentDidMount(){
    axios
    .get("http://localhost:8070/products")
    .then((res) => {


      this.setState({ category: res.data }, () => {
        let data = [];
        this.state.category.map((item) => {
            let cat = {
                value:item._id,
                label: item.title
            }
            data.push(cat);
        });
        this.setState({ options: data });

      })
    })
    .catch((err) => {
      console.log("error=>", err);
    });
  }

   sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8070/user-management/add", )
      .then((response) => {
        window.location.href="/admin/um/view-users"
        
      })
      .catch((err) => {
        alert(err);
      });
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;
    this.setState({
      ...this.state, [name]:value
    })

    console.log(this.state.code);
  }


oncategory(e) {
    this.setState({ selectCategory: e ? e.map(item => item.value) : [] })

}


addPromos= () =>{
  const {PromotionName, PromotionTitle, TimePeriod,Amount,selectCategory} =this.state;
  const data = {
    PromotionName,
    PromotionTitle,
    TimePeriod,
    Amount,
    selectCategory
  }

  axios.post("http://localhost:8070/promo/add-promo", data).then((response) =>{  
      window.location.href="/admin/view-promos"
 
  }).catch((err) => {
      alert(err);
   })
}
  



  render() { 
  return (
    <div>
      <Container className={"pt-3"}>
        <Card className={"p-5 mb-3"}>
        <div className={"go-back-icon"}>
            <Link to={"/admin/view-promos"}>
              <ImExit color={"black"} />
            </Link>
          </div>
          <div className="text-center mb-2">
            <h1 className="form-titles ">CREATE PROMOTION</h1>
            <hr className="divide" />
          </div>
          <Form onSubmit={this.addPromos}>
            <Form.Group className="mb-3" controlId="FirstName">
              <Form.Label>Promotion Name</Form.Label>
              <Form.Control
                name="PromotionName"
                onChange ={this.handleInputChange}
                type="text"
                placeholder="Promo Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="FirstName">
              <Form.Label>Promotion Title</Form.Label>
              <Form.Control
                name="PromotionTitle"
                onChange ={this.handleInputChange}
                type="text"
                placeholder="Promo Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="LastName">
              <Form.Label>Time Period</Form.Label>
              <Form.Control
                name="TimePeriod"
                onChange ={this.handleInputChange}
                type="text"
                placeholder="Time Period"
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Amount</Form.Label>
              <Form.Control
                name="Amount"
                onChange ={this.handleInputChange}
                type="number"
                placeholder="Amount"
              />
            </Form.Group>
            <div className="form-group">
              <Form.Label>Products</Form.Label>  
              <Select
                    isMulti
                    options={this.state.options}
                    onChange={this.oncategory}
                    className="basic-multi-select">
                </Select>
        
            </div>
            
        

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#d00000", color: "#FFF" }}
            >
              Create Promotion
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
                    }
}

export default addPromotion;