import mongoose from "mongoose";

const CompOrder = new mongoose.Schema(
  {
    email: { type: String, required: true },
    typeoferrand: { type: String },
    storename: { type: String },
    storeaddress: { type: String },
    useraddress: { type: String, required: true },
    pickuptime: { type: String },
    request: { type: String },
    cellnum: { type: String, required: true },
    time: { type: String, required: true },
    ostat: { type: String },
  },
  {
    collection: "completed-order-data",
  }
);

const modelcompOrder = mongoose.model("CompOrderData", CompOrder);

export default modelcompOrder;
