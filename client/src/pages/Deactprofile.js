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
import { Navigate, useNavigate } from "react-router-dom";

function Deactprofile() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const [cust, setCust] = useState([]);

  const [email, setEmail] = useState();

  const [crole, setCrole] = useState();

  const role = "deactivated";

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get(
        "https://padala2001.herokuapp.com/api/getUsers",
        {
          params: {
            role,
          },
          //email
        }
      );
      console.log("customers --- ", data.data);
      setCust(data.data);
    };
    fetchdata().catch(console.error);
  }, [role]);

  async function deleteUser(event) {
    event.preventDefault();

    const response = await fetch(
      "https://padala2001.herokuapp.com/api/deleteuser",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );
    const data = await response.json();
    if (data.status === "ok") {
      alert("User deleted");
    }
    navigate("/deactprofile");
    console.log(data);
  }

  async function updaterole(event) {
    event.preventDefault();

    const response = await fetch(
      "https://padala2001.herokuapp.com/api/updaterole",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          crole,
        }),
      }
    );
    const data = await response.json();
    if (data.status === "ok") {
    }
    navigate("/deactprofile");
    console.log(data);
  }
  return (
    <div className="Dashboard">
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}

      <div className="dashbox">
        <h1>Deactivated Profiles</h1>
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
                      <CardActions>
                        <form onSubmit={updaterole}>
                          <Button
                            size="small"
                            onClick={() =>
                              setEmail(custs.email) || setCrole("")
                            }
                            type="submit"
                          >
                            Customer
                          </Button>
                        </form>
                        <form onSubmit={updaterole}>
                          <Button
                            size="small"
                            onClick={() =>
                              setEmail(custs.email) || setCrole("rider")
                            }
                            type="submit"
                          >
                            Rider
                          </Button>
                        </form>
                        <form onSubmit={deleteUser}>
                          <Button
                            size="small"
                            onClick={() => setEmail(custs.email)}
                            type="submit"
                          >
                            Delete
                          </Button>
                        </form>
                      </CardActions>
                    </Typography>
                  </CardContent>
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

export default Deactprofile;
