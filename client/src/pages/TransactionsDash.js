import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin";
import SidebarRider from "../components/SidebarRider";

function Dashboard() {
  const auth = localStorage.getItem("user");

  const [trans, setTrans] = useState([]);

  const email = JSON.parse(auth).email;

  useEffect(() => {
    console.log("This is email when i ran", email);
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:5000/api/getTransSpec", {
        params: {
          email,
        },
        //email
      });
      console.log("transactions --- ", data.data);
      setTrans(data.data);
    };
    fetchdata().catch(console.error);
  }, []);

  return (
    <div className="Dashboard">
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}

      <div className="dashbox">
        <h1>Recent Transactions</h1>
        {/* {
                trans && trans?.data.map((trans) => (
                    <li
                    // id={trans._id}
                    // email={ trans.email}
                    // typeoferrand: { type: String},
                    // storename: { type: String},
                    // storeaddress: { type: String},
                    // useraddress: { type: String, required: true },
                    // pickuptime: { type: String},
                    // request: { type: String},
                    // cellnum: { type: String, required: true },
                    />
                ))} */}
        <div>
          <ul>
            {/* <p>{email}asdasd</p> */}
            {trans.map((tran) => (
              <div>
                {tran.email === email ? "Email: " + tran.email : ""}
                <br />
                {tran.email === email
                  ? "Type of Errand: " + tran.typeoferrand
                  : ""}
                <br />
                {tran.email === email ? tran.storename : ""}
                <br />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
