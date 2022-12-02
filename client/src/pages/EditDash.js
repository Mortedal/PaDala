import React from "react";
import Sidebar from "../components/Sidebar.js";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SidebarAdmin from "../components/SidebarAdmin";
import SidebarRider from "../components/SidebarRider";
import { InputAdornment } from "@material-ui/core";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [defaultaddress, setDefaultaddress] = useState("");
  const [cellnum, setCellnum] = useState("");
  const [isError, setIsError] = useState(true);
  const [isError2, setIsError2] = useState(true);
  const [isError3, setIsError3] = useState(true);

  const temp = localStorage.getItem("userInfo");
  const email = JSON.parse(temp).userInfo.email;
  const name2 = JSON.parse(temp).userInfo.name;
  const daddress = JSON.parse(temp).userInfo.defaultaddress;
  const cellnum2 = JSON.parse(temp).userInfo.cellnum;

  const auth = localStorage.getItem("user");

  function cancel(event) {
    navigate("/profile");
  }

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
      navigate("/profile");
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
            error={isError}
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.length === 0) {
                setIsError(true);
              } else {
                setIsError(false);
              }
            }}
            type="text"
            style={{ width: "100%" }}
          />
          <p>Email</p>
          <TextField
            name="email"
            disabled
            value={email}
            type="text"
            style={{ width: "100%" }}
          />
          <p>Address *</p>
          <TextField
            name="address"
            error={isError2}
            value={defaultaddress}
            onChange={(e) => {
              setDefaultaddress(e.target.value);
              if (e.target.value.length === 0) {
                setIsError2(true);
              } else {
                setIsError2(false);
              }
            }}
            type="text"
            style={{ width: "100%" }}
          />
          <p>Phone number *</p>
          <TextField
            value={cellnum}
            error={isError3}
            onChange={(e) => {
              setCellnum(e.target.value);
              if (e.target.value.length === 10) {
                setIsError3(false);
              } else {
                setIsError3(true);
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+63</InputAdornment>
              ),
            }}
            type="number"
            style={{ width: "100%" }}
          />
          <br />
          <br />
          <div align={"center"}>
            <Button type="submit" className="btnPrimary">
              Save
            </Button>
            <Button onClick={cancel}>Cancel</Button>
            <br />
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
