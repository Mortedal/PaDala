import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const time = new Date().toLocaleDateString() +" -- " + new Date().toLocaleTimeString();


const PopupForm = ({ open, onClose }) => {
  // const navigate = useNavigate();
  const [useraddress, setUseraddress] = useState("");
  const [cellnum, setCellnum] = useState("");
  const [request, setRequest] = useState("");

  const token = localStorage.getItem("user");
  const email = JSON.parse(token).email;

  const typeoferrand = "Custom";

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
        useraddress,
        cellnum,
        request,
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
        <h3>Custom Errand</h3>
        <form onSubmit={orderErrand}>
          <TextField
            value={useraddress}
            onChange={(e) => setUseraddress(e.target.value)}
            placeholder="Address"
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
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            placeholder="Request"
            type="text"
            style={{ width: 500 }}
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
