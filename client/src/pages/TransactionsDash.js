import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination.js";
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin";
import SidebarRider from "../components/SidebarRider";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Dashboard() {
  const auth = localStorage.getItem("user");

  const [trans, setTrans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage /*setPostPerPage*/] = useState(5);

  const email = JSON.parse(auth).email;

  useEffect(() => {
    console.log("This is email when i ran", email);
    const fetchdata = async () => {
      const data = await axios.get(
        "https://padala2001.herokuapp.com/api/getTransSpec",
        {
          params: {
            email,
          },
          //email
        }
      );
      console.log("transactions --- ", data.data);
      setTrans(data.data);
    };
    fetchdata().catch(console.error);
  }, [email]);
  const orders = trans.slice(0).reverse();

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = orders.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="Dashboard">
      {JSON.parse(auth).role === "admin" ? <SidebarAdmin /> : ""}
      {JSON.parse(auth).role === "rider" ? <SidebarRider /> : ""}
      {JSON.parse(auth).role === "" ? <Sidebar /> : ""}

      <div className="dashbox">
        <h1>Your Transactions</h1>
        <div>
          <ul>
            {currentPosts.map((tran) => (
              <div>
                <Card sx={{ maxWidth: 1000 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {tran.email === email ? tran.typeoferrand : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tran.email === email
                        ? tran.storename === ""
                          ? ""
                          : "Store: " + tran.storename
                        : ""}
                      <br />
                      {tran.email === email
                        ? "Address delivered to: " +
                          tran.useraddress +
                          " -- " +
                          tran.deliverylocation
                        : ""}
                      <br />
                      {tran.email === email ? "Email: " + tran.email : ""}
                      <br />
                      {tran.email === email
                        ? "Time of order: " + tran.time
                        : ""}
                      <br />
                      {tran.email === email
                        ? "Order Status: " + tran.ostat
                        : ""}
                      <br />
                      {tran.email === email
                        ? "Time to deliver: " + tran.pickuptime
                        : ""}
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
          <Pagination
            totalPosts={trans.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
