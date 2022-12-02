import React, { useState } from "react";
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin.js";
import SidebarRider from "../components/SidebarRider.js";
import "../styles/Dashboard.css";
import Button from "@mui/material/Button";
import ReorderIcon from "@mui/icons-material/Reorder";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const temp = localStorage.getItem("user");
  const email = JSON.parse(temp).email;
  const name = JSON.parse(temp).name;
  const daddress = JSON.parse(temp).defaultaddress;
  const cellnum = JSON.parse(temp).cellnum;

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const auth = localStorage.getItem("user");

  async function getUser(event) {
    event.preventDefault();

    const response = await fetch(
      "https://padala2001.herokuapp.com/api/getUserinfo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    const data = await response.json();

    localStorage.setItem("userInfo", JSON.stringify(data));

    navigate("/editprofile");
  }

  return (
    <div className="Dashboard">
      <div></div>
      {/* <div className="hiddenlinks" id={openLinks ? "open" : "close"}> */}
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}
      {/* </div> */}

      <div className="dashbox">
        <h1>Your Profile</h1>
        <p>Username</p>
        <TextField
          disabled
          value={name}
          placeholder="Your Username"
          type="text"
          style={{ width: 500 }}
        />

        <p>Email</p>
        <TextField
          disabled
          value={email}
          placeholder="Email Address"
          type="text"
          style={{ width: 500 }}
        />

        <p>Address</p>
        <TextField
          disabled
          value={daddress}
          placeholder="Please add your address"
          type="text"
          style={{ width: 500 }}
        />

        <p>Phone number</p>
        <TextField
          disabled
          value={cellnum}
          // onChange={(e) => setCellnum(e.target.value)}
          placeholder="Please add your phone number"
          type="text"
          style={{ width: 500 }}
        />

        <div align={"center"}>
          <br />
          <Button onClick={getUser}>Edit Profile</Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
