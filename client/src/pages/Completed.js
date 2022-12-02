import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin";
import SidebarRider from "../components/SidebarRider.js";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";

function Completed() {
  const auth = localStorage.getItem("user");

  const [trans, setTrans] = useState([]);

  const ostat = "completed";

  const rider = JSON.parse(auth).email;

  useEffect(() => {
    console.log("This is email when i ran", ostat);
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:5000/api/getRiderSpec", {
        params: {
          ostat,
          rider,
        },
        //email
      });
      console.log("transactions --- ", data.data);
      setTrans(data.data);
    };
    fetchdata().catch(console.error);
  }, [ostat, rider]);
  const orders = trans.slice(0).reverse();
  return (
    <div className="Dashboard">
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}

      <div className="dashbox">
        <h1>Completed Orders</h1>
        <div>
          <ul>
            {orders.map((tran) => (
              <div>
                <Card sx={{ maxWidth: 1000 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {tran.ostat === ostat ? tran.typeoferrand : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tran.ostat === ostat
                        ? tran.storename === ""
                          ? ""
                          : "Store: " + tran.storename
                        : ""}
                      <br />
                      {tran.ostat === ostat
                        ? "Delivered to: " + tran.useraddress
                        : ""}
                      <br />
                      {tran.ostat === ostat ? "Email: " + tran.email : ""}
                      <br />
                      {tran.ostat === ostat
                        ? "Time of order: " + tran.time
                        : ""}
                      <br />
                      {tran.ostat === ostat ? "Status: " + tran.ostat : ""}
                      <br />
                      {tran.ostat === ostat ? "Fee: " + tran.fee : ""}
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

export default Completed;