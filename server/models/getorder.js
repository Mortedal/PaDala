import mongoose from "mongoose";

const getOrder = new mongoose.Schema({
    email: { type: String },
    typeoferrand: { type: String},
    storename: { type: String},
    storeaddress: { type: String},
    useraddress: { type: String, required: true },
    pickuptime: { type: String},
    request: { type: String},
    cellnum: { type: String, required: true },
},
{
    collection: 'order-data'
})

const modelgetOrder = mongoose.model('OrdergetData', getOrder)

export default modelgetOrder