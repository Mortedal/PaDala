import mongoose from "mongoose";

const getCust = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    role: { type: String },
    cellnum: { type: String },
    defaultaddress: { type: String },
  },
  {
    collection: "user-data",
  }
);

const modelgetCustomer = mongoose.model("getCustomer", getCust);

export default modelgetCustomer;
