const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;


const app = express();


app.set('view engine', 'ejs');
app.set('views', './views' );

const url = 'mongodb://localhost/registrationDB';
mongoose.connect(url, {useNewUrlParser: true});

const conn = mongoose.connection;
conn.on('open', ()=>{
    console.log('Connected to MongoDB')
})

app.use(express.json());  //used here so json data passes from client to backend using express
app.use(express.urlencoded({
    extended : false
}))    //while using REST API memorise lines from 20 to 23

const userRouter = require('./routes/users');   //localhost : 5000
app.use('/users', userRouter);





app.listen(port, ()=>{
    console.log(`Server is running Changathi:${port}`);
})
