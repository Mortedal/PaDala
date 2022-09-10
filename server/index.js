import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())

app.post('/api/register', (req, res) => {
    res.json({})
})

app.listen(1337, () => {
    console.log('Server started  on 1337')
})
// const CONNECTION_URL = 'mongodb+srv://kimsalgado:salgadokim@cluster0.vvax1cj.mongodb.net/?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
// .catch((error) => console.log(error.message));