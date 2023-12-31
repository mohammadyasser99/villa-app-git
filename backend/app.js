const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authroutes');
require('dotenv').config();
const cors = require('cors');


app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));


  const bodyParser = require('body-parser');



  app.use(bodyParser.urlencoded({ extended: true }));






app.use(express.json());
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
app.use('/auth', authRoutes);


const start = async () => {
    try{
await mongoose.connect(process.env.MONGO_URL );
app.listen(5000, console.log('Server is listening on port 5000...'));
    }
    catch(error){
        console.log(error);
    }
}

start();