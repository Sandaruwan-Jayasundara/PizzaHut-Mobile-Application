import React, { useState,useEffect } from "react";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Table } from "react-bootstrap";
import { GiRollingEnergy, ImExit } from "react-icons/all";
import "../../../stylesheets/formTitle.css";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

function UpdateUser(props) {

  const [imgPreview, setimgPreview] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Role, setRole] = useState("");
  const [Branch, setBranch] = useState("");
  const [Profile, setProfile] = useState("");

  useEffect(() => {
    axios
        .get(`http://localhost:8070/user-management/display/${id}`)
        .then((response) => {
          setFirstName(response.data.UserManagement.FirstName)
          setLastName(response.data.UserManagement.LastName)
          setEmail(response.data.UserManagement.Email)
          setContact(response.data.UserManagement.Contact)
          setRole(response.data.UserManagement.Role)
          setBranch(response.data.UserManagement.Branch)
          setProfile(response.data.UserManagement.Profile)
        })
        .catch(function (err) {
          console.log(err);
        });
  },[]);


//Profile imgae handle function
  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setimgPreview(reader.result);
      };
      setProfile(e.target.files[0]);
      reader.readAsDataURL(selected);
    } else {
      setError(true);
      alert("file not supported");
    }
  };

  //send data to the backend using Api
  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("FirstName", FirstName);
    formData.append("LastName", LastName);
    formData.append("Email", Email);
    formData.append("Contact", Contact);
    formData.append("Role", Role);
    formData.append("Profile", Profile);

    axios
        .put(`http://localhost:8070/user-management/updates/${id}`, formData)
        .then((response) => {
          window.location.href="/admin/em/view-users"
        })
        .catch((err) => {
          alert(err);
        });
  }

  return (
      <div>
        <Container className={"pt-3"}>
          <Card className={"p-5 "}>
            <div className={"go-back-icon"}>
              <Link to={"/admin/um/view-users"}>
                <ImExit color={"black"} />
              </Link>
            </div>
            <div className="text-center mb-2">
              <h1 className="form-titles ">UPDATE USER</h1>
              <hr className="divide" />
            </div>

            <Form onSubmit={sendData}>
              <Form.Group className="mb-3" controlId="FirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    name="First Name"
                    defaultValue={FirstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    type="text"
                    placeholder="First Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    name="Last Name"
                    defaultValue={LastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    type="text"
                    placeholder="Last Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    name="Email"
                    defaultValue={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Email"
                />
              </Form.Group>

              {/*<Form.Group className="mb-3" controlId="Role">*/}
              {/*  <Form.Label>Role </Form.Label>*/}
              {/*  <Form.Select*/}
              {/*    name="Contact"*/}
              {/*    onChange={(event) => {*/}
              {/*      // setResearcherFee(event.target.value);*/}
              {/*    }}*/}
              {/*    type="number"*/}
              {/*    placeholder="Contact Number"*/}
              {/*    defaultValue="Manager"*/}
              {/*  >*/}
              {/*    <option>Admin</option>*/}
              {/*    <option>Manager</option>*/}
              {/*    <option>Product Manager</option>*/}
              {/*  </Form.Select>*/}
              {/*</Form.Group>*/}
              <div className="form-group">
                <Form.Label>Role</Form.Label>
                <select
                    className="form-select form-select-lg mb-3 dropdown"
                    aria-label=".form-select-lg example"
                    value={Role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                >
                  <option selected>Select</option>
                  <option value="Admin">Admin</option>
                  <option value="BranchManager">Branch Manager</option>
                </select>
              </div>

              {Role !="Admin" &&
              <div className="form-group">
                <Form.Label>Branch</Form.Label>
                <select
                    className="form-select form-select-lg mb-3 dropdown"
                    aria-label=".form-select-lg example"
                    value={Branch}
                    onChange={(e) => {
                      setBranch(e.target.value);
                    }}
                >
                  <option selected>Select</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Galle">Galle</option>
                  <option value="Kurunegala">Kurunegala</option>
                </select>
              </div>

              }
              <Form.Group className="mb-3" controlId="Contact">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                    name="Contact"
                    defaultValue={Contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    type="string"
                    placeholder="Contact Number"
                />
              </Form.Group>

              {error && <p className="errorMsg">File not supported</p>}
              <div
                  className="imgPreview "
                  style={{
                    background: imgPreview
                        ? `url("${imgPreview}") no-repeat center/cover`
                        : "#131313",
                    height: 300,
                    width: 300,
                  }}
              >
                {!imgPreview && (
                    <>
                      <p>Add an image</p>
                      <label htmlFor="fileUpload" className="customeFileUplad ">
                        Choose File
                      </label>
                      <input
                          type="file"
                          id="fileUpload"
                          onChange={handleImageChange}
                      />
                      <span>(jpg, jpeg 0r png)</span>
                    </>
                )}

              </div>

              {imgPreview && (

                  <Button onClick={() => setimgPreview(null)}>Remove Image</Button>
              )}
              <br />

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#d00000", color: "#FFF" }}
              >
                Update User
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
  );
}

export default UpdateUser;
