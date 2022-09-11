import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/usermodel.js';
import jwt from 'jsonwebtoken';
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/dbpadala')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
            
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

            return res.json({ status: 'ok', user: token, name: user.name,})
        } else {
            return res.json({ status: 'error', user: false})
        }  
})

app.listen(1337, () => {
    console.log('Server started  on 1337')
    
})
// const CONNECTION_URL = 'mongodb+srv://kimsalgado:salgadokim@cluster0.vvax1cj.mongodb.net/?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
// .catch((error) => console.log(error.message));