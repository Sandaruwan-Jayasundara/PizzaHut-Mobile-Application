import React, { useEffect, useState } from "react";
import { Button, Dialog, Slide } from "@material-ui/core";
import { FaRegAddressBook, MdDelete, MdModeEdit } from "react-icons/all";
import DeliveryPop from "../../Main Pages/Supportive Files/Delivery/DeliveryPop";
import EditAddress from "./AddressBook/EditAddress";
import axios from "axios";

function AddressItem(props) {
  const [openEditAddress, setEdit] = useState(false);
  const [openDeleteAddress, setDelete] = useState(false);
  const [addresses,setAddresses]=useState([]);

useEffect(()=>{
axios.get(`http://localhost:8070/deliveries/addresses/${localStorage.getItem('Email')}`).then(res=>{
setAddresses(res.data);
}).catch(err=>{
  console.log("err=>"+err);
})


},[])


  const handleClickOpenPop = (value) => {
    if (value === "edit") {
      setEdit(true);
    } else {
      setDelete(true);
    }
  };

  const handleClosePop = (value) => {
    if (value === "edit") {
      setEdit(false);
    } else {
      setDelete(false);
    }
  };
  return (
   <div>
   {addresses.map((add,index)=>{
     return(
      <div>
      <div>
        {" "}
        <div className={"list-address-item d-flex justify-content-between "}>
          <div>
            <div>
              <span className={"address-item-title"}>{add.fullname}</span>
            </div>
            <div>
              <span className={"address"}>
               {add.address},{add.city} {add.state},{add.zipcode}
              </span>
            </div>
          </div>{" "}
          <div className={" d-flex gap-1 align-self-center "}>
            <div>
              <Button
                className={"address-edit-button"}
                startIcon={<MdModeEdit />}
                onClick={() => handleClickOpenPop("edit")}
              >
                Edit
              </Button>{" "}
            </div>
            <div>
              <Button
                className={"address-delete-button"}
                startIcon={<MdDelete />}
                onClick={() => handleClickOpenPop("delete")}
              >
                Delete
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          style={{ zIndex: 9999 }}
          open={openEditAddress}
          fullWidth={true}
          TransitionComponent={Slide}
          onClose={() => handleClosePop("edit")}
        >
          <EditAddress address={add} close={handleClosePop} />
        </Dialog>
      </div>
    </div>


     );
   })}
   
   
   </div>
  );
}

export default AddressItem;
