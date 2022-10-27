import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const time = new Date().toLocaleDateString() +" -- " + new Date().toLocaleTimeString();

const PopupForm = ({ open, onClose }) => {
  const [useraddress, setUseraddress] = useState("");
  const [storeaddress, setStoreaddress] = useState("");
  const [pickuptime, setPickuptime] = useState("");
  const [cellnum, setCellnum] = useState("");
  const [storename, setStorename] = useState("");

  const token = localStorage.getItem("user");

  const email = JSON.parse(token).email;

  const typeoferrand = "Food/Grocery";

  const address = JSON.parse(token).defaultaddress;
  const cell = JSON.parse(token).cellnum;

  async function orderErrand(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        typeoferrand,
        storename,
        storeaddress,
        useraddress,
        cellnum,
        pickuptime,
        time,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("order created");
      //  navigate('/dashboard')
    }

    console.log(data);
  }

  if (!open) return null;

  return (
    <div className="modalContainer">
      <div className="modalRight">
        <h3>Food/Grocery</h3>
        <form onSubmit={orderErrand}>
          <TextField
            value={storename}
            onChange={(e) => setStorename(e.target.value)}
            placeholder="Name of Store"
            type="text"
            style={{ width: 300 }}
          />
          <br />
          <br />
          <TextField
            value={storeaddress}
            onChange={(e) => setStoreaddress(e.target.value)}
            placeholder="Store Address"
            type="text"
            style={{ width: 300 }}
          />
          <br />
          <br />
          <TextField
            value={useraddress}
            onChange={(e) => setUseraddress(e.target.value)}
            placeholder="Address to Deliver to"
            type="text"
            style={{ width: 300 }}
          />
          <br />
          <input
            type="radio"
            name="defaultadress"
            value={""}
            onChange={(e) => setUseraddress(e.target.value)}
          />
          New address
          <br />
          <input
            type="radio"
            name="defaultadress"
            value={address}
            onChange={(e) => setUseraddress(e.target.value)}
          />
          Default Address( {address} )
          <br />
          <br />
          <TextField
            value={cellnum}
            onChange={(e) => setCellnum(e.target.value)}
            placeholder="Cellphone Number"
            type="text"
            style={{ width: 300 }}
          />
          <br />
          <input
            type="radio"
            name="Cellphone Number"
            value={""}
            onChange={(e) => setCellnum(e.target.value)}
          />
          New Cellphone Number
          <br />
          <input
            type="radio"
            name="Cellphone Number"
            value={cell}
            onChange={(e) => setCellnum(e.target.value)}
          />
          Cellphone Number( {cell} )
          <br />
          <br />
          <TextField
            value={pickuptime}
            onChange={(e) => setPickuptime(e.target.value)}
            placeholder="Time of Delivery"
            type="text"
            style={{ width: 300 }}
          />
          <br />
          <br />
          <div className="btnContainer">
            <Button variant="contained" type="submit">
              <span className="bold">Place Order</span>
            </Button>
            <Button onClick={onClose}>
              <span className="bold">Cancel Order</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
