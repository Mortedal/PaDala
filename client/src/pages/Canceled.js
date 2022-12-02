import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin";
import SidebarRider from "../components/SidebarRider.js";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Canceled() {
  const auth = localStorage.getItem("user");

  const [trans, setTrans] = useState([]);

  const ostat = "canceled";

  useEffect(() => {
    console.log("This is email when i ran", ostat);
    const fetchdata = async () => {
      const data = await axios.get(
        "https://padala2001.herokuapp.com/api/getPending",
        {
          params: {
            ostat,
          },
          //email
        }
      );
      console.log("transactions --- ", data.data);
      setTrans(data.data);
    };
    fetchdata().catch(console.error);
  }, [ostat]);
  return (
    <div className="Dashboard">
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}

      <div className="dashbox">
        <h1>Canceled Orders</h1>
        <div>
          <ul>
            {trans.map((tran) => (
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
                        ? "Address delivered to: " +
                          tran.useraddress +
                          " -> " +
                          tran.deliverylocation
                        : ""}
                      <br />
                      {tran.ostat === ostat ? "Email: " + tran.email : ""}
                      <br />
                      {tran.ostat === ostat
                        ? "Time of order: " + tran.time
                        : ""}
                      <br />
                      {tran.ostat === ostat ? "Status: " + tran.ostat : ""}
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

export default Canceled;
