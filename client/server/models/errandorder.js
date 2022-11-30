import mongoose from "mongoose";

const Order = new mongoose.Schema(
  {
    email: { type: String, required: true },
    typeoferrand: { type: String },
    storename: { type: String },
    storeaddress: { type: String },
    deliverylocation: { type: String },
    useraddress: { type: String, required: true },
    pickuptime: { type: String },
    request: { type: String },
    cellnum: { type: String, required: true },
    time: { type: String, required: true },
    ostat: { type: String },
  },
  {
    collection: "order-data",
  }
);

const modelOrder = mongoose.model("OrderData", Order);

export default modelOrder;
