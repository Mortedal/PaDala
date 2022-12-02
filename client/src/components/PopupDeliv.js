import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const time =
  new Date().toLocaleDateString() + " -- " + new Date().toLocaleTimeString();

const ostat = "pending";

const PopupForm = ({ open, onClose }) => {
  const [deliverylocation, setDeliverylocation] = useState("");
  const [useraddress, setUseraddress] = useState("");
  const [pickuptime, setPickuptime] = useState("");
  const [cellnum, setCellnum] = useState("");
  const storename = "";

  const token = localStorage.getItem("user");

  const email = JSON.parse(token).email;

  const role = JSON.parse(token).role;

  const typeoferrand = "Delivery";

  const address = JSON.parse(token).defaultaddress;
  const cell = JSON.parse(token).cellnum;

  async function orderErrand(event) {
    event.preventDefault();

    const response = await fetch("https://padala2001.herokuapp.com/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        typeoferrand,
        deliverylocation,
        storename,
        useraddress,
        cellnum,
        pickuptime,
        time,
        ostat,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("order created");
      onClose();
      //  navigate('/dashboard')
    }

    console.log(data);
  }

  if (!open) return null;

  return (
    <div className="modalContainer">
      <div className="modalRight">
        <h3>Delivery</h3>
        <p>Minimum fee ₱50</p>
        <p>(Extra charges may apply depending on the location of the errand)</p>
        <p>Mode of payment is only Cash on Delivery</p>
        <form onSubmit={orderErrand}>
          <p style={{ color: "gray" }}>
            <TextField
              value={useraddress}
              onChange={(e) => setUseraddress(e.target.value)}
              placeholder="Your Location"
              type="text"
              style={{ width: "100%" }}
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
              value={deliverylocation}
              onChange={(e) => setDeliverylocation(e.target.value)}
              placeholder="Delivery Location"
              type="text"
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <TextField
              value={cellnum}
              onChange={(e) => setCellnum(e.target.value)}
              placeholder="Cellphone Number"
              type="text"
              style={{ width: "100%" }}
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
              placeholder="Time of Pick-Up"
              type="text"
              style={{ width: "100%" }}
            />
          </p>
          <br />
          <br />
          <div className="btnContainer">
            {role === "" ? (
              <Button variant="contained" type="submit">
                <span className="bold">Place Order</span>
              </Button>
            ) : role === "admin" ? (
              <Button variant="contained" type="submit">
                <span className="bold">Place Order</span>
              </Button>
            ) : role === "deactivated" ? (
              <Button variant="contained">
                <span className="bold">Deactivated</span>
              </Button>
            ) : role === "rider" ? (
              <Button variant="contained">
                <span className="bold">Rider cant order</span>
              </Button>
            ) : (
              ""
            )}
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
