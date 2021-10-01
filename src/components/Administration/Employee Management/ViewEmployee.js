import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Table } from "react-bootstrap";
import { Avatar, IconButton, Tooltip } from "@material-ui/core";
import axios from "axios";
import {
  FaEdit,
  FaEye,
  FaTrash,
  IoMdAddCircleOutline,
  MdEmail,
} from "react-icons/all";

function ViewEmployee(props) {
  const Branch = localStorage.getItem("branch");
  const [Employee, setEmployee] = useState([]);
  const [showPop, setShowPop] = useState(false);
  const openPop = () => {
    setShowPop((prev) => !prev);
  };
  //display all eployees
  useEffect(() => {
    axios
      .get(`http://localhost:8070/employee-management/display/${Branch}`)
      .then((response) => {
        setEmployee(response.data);

        console.log(response.data); //data will display in the console
      })
      .catch(function (err) {
        console.log(err); //Error message display
      });
  }, []);

  //Delete selected employee by id
  function onDeleteEm(id) {
    axios
      .delete(`http://localhost:8070/employee-management/delete/${id}`)
      .then((response) => {
        window.location.href = "/admin/em/view-employees";
      })
      .catch(function (err) {
        console.log(err); //Error message will display
      });
  }

  return (
    <div>
      <Container className={"pt-3"}>
        <Card className={"p-5 mb-3"}>
          <div className="text-center mb-2">
            <h1 className="form-titles ">EMPLOYEE MANAGEMENT</h1>
            <hr className="divide" />
          </div>

          <div>
            <Table
              striped
              bordered
              hover
              variant="dark"
             
              className={'text-center'}
            >
              <thead class="thead-light">
                <tr>
                  <th className={"table-data"}>Email</th>
                  <th className={"table-data"}>Full Name</th>
                  <th className={"table-data"}>Role</th>
                  <th className={"table-data"}>Branch</th>
                  <th>
                    <Tooltip title="Add" placement="top">
                      <IconButton
                        aria-label="delete"
                        href={"/admin/em/add-employee"}
                      >
                        <IoMdAddCircleOutline color={"white"} />
                      </IconButton>
                    </Tooltip>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Employee.map((data, key) => (
                  <tr>
                    <td className={"table-data"}>{data.Email}</td>
                    <td className={"table-data"}>{data.FirstName}</td>
                    <td className={"table-data"}>{data.Role}</td>
                    <td className={"table-data"}>{data.Branch}</td>
                    <td>
                      {" "}
                      <Tooltip
                        title="Edit"
                        className="table-icon"
                        style={{
                          color: "red",
                        }}
                      >
                        <Link to={`/admin/em/update-employee/${data._id}`}>
                          <FaEdit color={"white"} />
                        </Link>
                      </Tooltip>

                      <Tooltip
                      title="View"
                      className="table-icon"
                      style={{
                        color: "red",
                      }}
                    >
                      <Link to={`/admin/um/view-employee-details/${data._id}`}>
                        <FaEye color={"white"} />
                      </Link>
                    </Tooltip>


                      <Tooltip
                        title="Delete"
                        className="table-icon"
                        style={{
                          color: "red",
                        }}
                      >
                        <Link
                          type="submit"
                          onClick={() => onDeleteEm(data._id)}
                        >
                          <FaTrash color={"white"} />
                        </Link>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default ViewEmployee;
