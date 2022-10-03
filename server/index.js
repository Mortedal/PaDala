import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/usermodel.js';
import Order from './models/errandorder.js';
import jwt from 'jsonwebtoken';
const app = express();

app.use(cors())
app.use(express.json())

const CONNECTION_URL = 'mongodb+srv://PaDala:padalapassword123@cluster0.9itxfxl.mongodb.net/?retryWrites=true&w=majority';


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
.catch((error) => console.log(error.message));

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role,
            
        })
        res.json({ status: 'ok'})
    } catch (err) {
        res.json({ status: 'error ', error: 'Duplicate Email'})
    }
})


//----------------------------------------------------------------------------------


app.post('/api/login', async (req, res) => {
    console.log(req.body)
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password,
        })

        if (user) {

            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email,

            }, 'secret123')

            return res.json({ status: 'ok', user: token, email: user.email, defaultaddress:user.defaultaddress, cellnum:user.cellnum, name:user.name, password:user.password, role:user.role})
                
        } else {
            return res.json({ status: 'error', user: false})
        }  
})

//----------------------------------------------------------------------------------------------------

app.post('/api/order', async (req, res) => {
    console.log(req.body)
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

        })
        res.json({ status: 'ok'})
    } catch (err) {
        res.json({ status: 'error ', error: 'errrrr'})
    }
})

//-------------------------------------------------------------------------------


app.post('/api/updateuser', async (req, res) => {
    console.log(req.body)
    try {


        await User.findOneAndUpdate(
            {
                email:req.body.email
            },
            { $set: { name: req.body.name,
                address: req.body.address,
                cellnum: req.body.cellnum,
                defaultaddress: req.body.defaultaddress,}
           
    })
       
        return res.json({ status: 'ok'})
    } catch (err) {
        res.json({ status: 'error ', error: 'invalid token'})
    }
})

app.post('/api/getUserinfo', async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.findOne(
            {
                email:req.body.email
            })
       
        return res.json({ userInfo:user })
    } catch (err) {
        res.json({ status: 'error ', error: 'invalid token'})
    }
})

        


