import mongoose from "mongoose";

const Order = new mongoose.Schema({
    typeoferrand: { type: String, required: true },
    storename: { type: String},
    storeaddress: { type: String},
    useraddress: { type: String, required: true },
    deliverylocation: { type: String},
    pickuptime: { type: String},
    request: { type: String},
    cellnum: { type: String, required: true },
},
{
    collection: 'order-data'
})

const modelOrder = mongoose.model('OrderData', Order)

export default modelOrder