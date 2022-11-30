import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin";
import SidebarRider from "../components/SidebarRider.js";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function Pending() {
  const auth = localStorage.getItem("user");

  const [trans, setTrans] = useState([]);

  const ostat = "accept";

  const [accept, setAccept] = useState([]);

  const [fee, setFee] = useState([]);

  const [_id, set_id] = useState([]);

  const navigate = useNavigate();

  const email = JSON.parse(auth).email;

  useEffect(() => {
    console.log("This is email when i ran", ostat);
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:5000/api/getRider", {
        params: {
          ostat,
        },
        //email
      });
      console.log("transactions --- ", data.data);
      setTrans(data.data);
    };
    fetchdata().catch(console.error);
  }, [ostat]);

  const orders = trans.slice(0).reverse();

  async function updateorder(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/updateorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fee,
        accept,
        _id,
        email,
      }),
    });
    console.log(response);
    // navigate("/completed");
  }

  return (
    <div className="Dashboard">
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}

      <div className="dashbox">
        <h1>Ongoing Orders</h1>
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
                      {tran.rider === ostat ? "Order Id: " + tran._id : ""}
                      <br />
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
                      <CardActions>
                        <form onSubmit={updateorder}>
                          <br />
                          Set Delivery Fee
                          <Button
                            size="small"
                            type="Submit"
                            onClick={() =>
                              set_id(tran._id) ||
                              setAccept("completed") ||
                              setFee("40")
                            }
                          >
                            40
                          </Button>
                          <Button
                            size="small"
                            type="Submit"
                            onClick={() =>
                              set_id(tran._id) ||
                              setAccept("completed") ||
                              setFee("60")
                            }
                          >
                            60
                          </Button>
                          <Button
                            size="small"
                            type="Submit"
                            onClick={() =>
                              set_id(tran._id) ||
                              setAccept("completed") ||
                              setFee("90")
                            }
                          >
                            90
                          </Button>
                        </form>
                        <form onSubmit={updateorder}>
                          <br />
                          <Button
                            size="small"
                            type="Submit"
                            onClick={() =>
                              set_id(tran._id) ||
                              setAccept("canceled") ||
                              setFee("0")
                            }
                          >
                            Cancel the order
                          </Button>
                          <br />
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

export default Pending;
