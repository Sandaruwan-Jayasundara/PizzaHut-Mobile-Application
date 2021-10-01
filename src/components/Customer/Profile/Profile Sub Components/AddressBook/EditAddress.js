import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Button, Typography } from "@material-ui/core";
import Select from "react-select";

function EditAddress(props) {
  const options = [
    { value: "Colombo", label: "Colombo" },
    { value: "Galle", label: "Galle" },
    { value: "Kaluthara", label: "Kaluthara" },
    { value: "Kurunegala", label: "Kurunegala" },
  ];

  return (
    <div>
      <Card className={"p-5 mb-3"}>
        {" "}
        <div className="text-center mb-2">
          <h1 className="form-titles ">Edit Address</h1>
          <hr className="divide" />
        </div>
        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={props.address}
            // onChange={(e) => {
            //     setAddress(e.target.value);
            // }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label>No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex:102/3"
            // onChange={(e) => {
            //     setAddress(e.target.value);
            // }}
          />
        </Form.Group>
        <div className={"mb-4"}>
          <Form.Group className={"mb-4"}>
            <Form.Label>City</Form.Label>
            <Select
              maxMenuHeight={125}
              // value={selectedOption}
              // onChange={selectSize}
              options={options}
            />
          </Form.Group>
        </div>
        <div className="d-flex  gap-2">
          <Button
            className={"save-button"}
            variant="outlined"
            onClick={() => {
              props.close("edit");
            }}
          >
            Cancel
          </Button>
          <Button
            className={"cancel-button"}
            variant="outlined"
            // onClick={() => {
            //   props.fun("address");
            // }}
          >
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default EditAddress;
