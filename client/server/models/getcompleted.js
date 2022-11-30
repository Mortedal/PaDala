import mongoose from "mongoose";

const getCompleted = new mongoose.Schema(
  {
    email: { type: String },
    typeoferrand: { type: String },
    storename: { type: String },
    storeaddress: { type: String },
    useraddress: { type: String, required: true },
    pickuptime: { type: String },
    request: { type: String },
    cellnum: { type: String, required: true },
    ostat: { trype: String },
  },
  {
    collection: "order-data",
  }
);

const modelgetCompleted = mongoose.model("CompletedgetData", getCompleted);

export default modelgetCompleted;
