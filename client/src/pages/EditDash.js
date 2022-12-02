import React from "react";
import Sidebar from "../components/Sidebar.js";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SidebarAdmin from "../components/SidebarAdmin";
import SidebarRider from "../components/SidebarRider";

function Dashboard() {
  const [name, setName] = useState("");
  const [defaultaddress, setDefaultaddress] = useState("");
  const [cellnum, setCellnum] = useState("");

  const temp = localStorage.getItem("userInfo");
  const email = JSON.parse(temp).userInfo.email;
  const name2 = JSON.parse(temp).userInfo.name;
  const daddress = JSON.parse(temp).userInfo.defaultaddress;
  const cellnum2 = JSON.parse(temp).userInfo.cellnum;

  const auth = localStorage.getItem("user");

  async function updateUser(event) {
    event.preventDefault();

    const response = await fetch(
      "https://padala2001.herokuapp.com/api/updateuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          defaultaddress,
          cellnum,
        }),
      }
    );

    console.log(response);

    const data = await response.json();
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(data));

    if (data.status === "ok") {
      alert("updated user");
      //  navigate('/dashboard')
    }

    console.log(data);
  }
  return (
    <div className="Dashboard">
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}
      <div className="dashbox">
        <h1>Edit Profile</h1>
        <form onSubmit={updateUser}>
          <p>Username *</p>
          <TextField
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            style={{ width: 500 }}
          />
          <p>Email</p>
          <TextField
            name="email"
            disabled
            value={email}
            onChange={(e) => setDefaultaddress(e.target.value)}
            type="text"
            style={{ width: 500 }}
          />
          <p>Address *</p>
          <TextField
            name="address"
            value={defaultaddress}
            onChange={(e) => setDefaultaddress(e.target.value)}
            type="text"
            style={{ width: 500 }}
          />
          <p>Phone number</p>
          <TextField
            value={cellnum}
            onChange={(e) => setCellnum(e.target.value)}
            type="number"
            style={{ width: 500 }}
          />
          <br />
          <br />
          <div align={"center"}>
            <Button type="submit" className="btnPrimary">
              Save
            </Button>
            <Button>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
