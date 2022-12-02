import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin";
import SidebarRider from "../components/SidebarRider.js";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function AllTransactions() {
  const auth = localStorage.getItem("user");

  const [trans, setTrans] = useState([]);

  const email = JSON.parse(auth).email;

  useEffect(() => {
    console.log("This is email when i ran", email);
    const fetchdata = async () => {
      const data = await axios.get(
        "https://padala2001.herokuapp.com/api/getTrans",
        {}
      );
      console.log("transactions --- ", data.data);
      setTrans(data.data);
    };
    fetchdata().catch(console.error);
  }, [email]);

  return (
    <div className="Dashboard">
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}

      <div className="dashbox">
        <h1>All Transactions</h1>
        <div>
          <ul>
            {trans.map((tran) => (
              <div>
                <Card sx={{ maxWidth: 1000 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {tran.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {"Type of Errand: " + tran.typeoferrand}
                      <br />
                      {"Store: " + tran.storename}
                      <br />
                      <br />
                      {"Address delivered to: " +
                        tran.useraddress +
                        " -> " +
                        tran.deliverylocation}
                      <br />
                      {"Time of order: " + tran.time}
                      <br />
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

export default AllTransactions;
