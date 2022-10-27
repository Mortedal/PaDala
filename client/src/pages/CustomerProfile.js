import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin";
import SidebarRider from "../components/SidebarRider";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function CustomerProfile() {
  const auth = localStorage.getItem("user");

  const [cust, setCust] = useState([]);

  const role = "";

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:5000/api/getUsers", {
        params: {
          role,
        },
        //email
      });
      console.log("customers --- ", data.data);
      setCust(data.data);
    };
    fetchdata().catch(console.error);
  }, [role]);

  return (
    <div className="Dashboard">
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}

      <div className="dashbox">
        <h1>Customer Profiles</h1>
        <div>
          <ul>
            {cust.map((custs, key) => (
              <div>
                <Card key={key} sx={{ maxWidth: 1000 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {custs.role === role ? custs.email : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {custs.role === role
                        ? custs.name === ""
                          ? ""
                          : "Name: " + custs.name
                        : ""}
                      <br />
                      {custs.role === role
                        ? "Cellphone Number: " + custs.cellnum
                        : ""}
                      <br />
                      {custs.role === role
                        ? "Default Address: " + custs.defaultaddress
                        : ""}
                      <br />
                      {custs.role === role
                        ? "Account created at: " + custs.acccreated
                        : ""}
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Edit</Button>
                    <Button size="small">Delete</Button>
                  </CardActions>
                </Card>
                <br />
              </div>
            ))}

            {/* {trans.map((tran) => (
                <div>
                  {tran.email === email ? "Email: " + tran.email : ""}
                  <br />
                  {tran.email === email
                    ? "Type of Errand: " + tran.typeoferrand
                    : ""}
                  <br />
                  {tran.email === email
                    ? tran.storename === ""
                      ? ""
                      : "agoi: " + tran.storename
                    : ""}
                  <br />
                </div>
              ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
