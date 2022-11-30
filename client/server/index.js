import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/usermodel.js";
import Order from "./models/errandorder.js";
import getOrder from "./models/getorder.js";
import getUsers from "./models/getusers.js";
import postComp from "./models/completeorder.js";
import getPending from "./models/getpending.js";
import jwt from "jsonwebtoken";
const app = express();

const router = express.Router();

const path = "require";

app.use(cors());
app.use(express.static(path.join(__dirname + "/public")));

const CONNECTION_URL =
  "mongodb+srv://PaDala:padalapassword123@cluster0.9itxfxl.mongodb.net/?retryWrites=true&w=majority";

var database;

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("this is backend");
});

app.listen(port, () => {
  mongoose.connect(
    CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, result) => {
      if (err) throw err;
      console.log("Server running on 5000");
    }
  );
});
// .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
// .catch((error) => console.log(error.message))
// database = result.db('test');

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      acccreated: req.body.acccreated,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error ", error: "Duplicate Email" });
  }
});

//----------------------------------------------------------------------------------

app.post("/api/login", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({
      status: "ok",
      user: token,
      email: user.email,
      defaultaddress: user.defaultaddress,
      cellnum: user.cellnum,
      name: user.name,
      password: user.password,
      role: user.role,
    });
  } else {
    return res.json({ status: "error", user: false });
  }
});

//---------------------------------------------------

app.post("/api/deleteuser", async (req, res) => {
  console.log(req.body);
  try {
    await User.deleteOne({
      email: req.body.email,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error ", error: "Could not find Email" });
  }
});

//----------------------------------------------------------------------------------------------------

app.post("/api/order", async (req, res) => {
  console.log(req.body);
  try {
    await Order.create({
      email: req.body.email,
      typeoferrand: req.body.typeoferrand,
      storename: req.body.storename,
      storeaddress: req.body.storeaddress,
      useraddress: req.body.useraddress,
      deliverylocation: req.body.deliverylocation,
      pickuptime: req.body.pickuptime,
      cellnum: req.body.cellnum,
      request: req.body.request,
      time: req.body.time,
      ostat: req.body.ostat,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error ", error: "errrrr" });
  }
});

//-------------------------------------------------------------------------------

app.post("/api/updateuser", async (req, res) => {
  console.log(req.body);
  try {
    await User.findOneAndUpdate(
      {
        email: req.body.email,
      },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          cellnum: req.body.cellnum,
          defaultaddress: req.body.defaultaddress,
        },
      }
    );

    return res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error ", error: "invalid token" });
  }
});

app.post("/api/updaterole", async (req, res) => {
  console.log(req.body);
  try {
    await User.findOneAndUpdate(
      {
        email: req.body.email,
      },
      {
        $set: {
          role: req.body.crole,
        },
      }
    );

    return res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error ", error: "invalid token" });
  }
});

//----------------------------------------------------------------------------------------------------

app.post("/api/getUserinfo", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    return res.json({ userInfo: user });
  } catch (err) {
    res.json({ status: "error ", error: "invalid token" });
  }
});

//----------------------------------------------------------------------------------------------------

app.get("/api/getTransSpec", async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  try {
    const getTransSpec = await getOrder.find({
      email: req.query.email,
    });
    res.send(getTransSpec);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

app.get("/api/getPending", async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  try {
    const agoi = await getOrder.find({
      ostat: req.query.ostat,
    });
    res.send(agoi);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

app.get("/api/getRider", async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  try {
    const agoi = await getOrder.find({
      ostat: req.query.ostat,
    });
    res.send(agoi);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

app.get("/api/getRiderSpec", async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  try {
    const agoi = await getOrder.find({
      rider: req.query.rider,
      ostat: req.query.ostat,
    });
    res.send(agoi);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

app.get("/api/getTrans", async (req, res) => {
  console.log(req.body);
  try {
    const getTrans = await getOrder.find({});
    res.send(getTrans);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//----------------------------------------------------------------------------------------------------

app.get("/api/getUsers", async (req, res) => {
  console.log(req.query);
  try {
    const getCust = await getUsers.find({
      role: req.query.role,
    });
    res.send(getCust);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//------------------------------

app.post("/api/comporder", async (req, res) => {
  console.log(req.body);
  try {
    await postComp.create({
      email: req.body.email,
      typeoferrand: req.body.typeoferrand,
      storename: req.body.storename,
      storeaddress: req.body.storeaddress,
      useraddress: req.body.useraddress,
      deliverylocation: req.body.deliverylocation,
      pickuptime: req.body.pickuptime,
      cellnum: req.body.cellnum,
      request: req.body.request,
      time: req.body.time,
      ostat: req.body.ostat,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error ", error: "errrrr" });
  }
});

//------------------------------

app.post("/api/updateorder", async (req, res) => {
  console.log(req.body);
  try {
    await getOrder.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      {
        $set: {
          ostat: req.body.accept,
          rider: req.body.email,
          fee: req.body.fee,
        },
      }
    );

    return res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error ", error: "invalid token" });
  }
});
