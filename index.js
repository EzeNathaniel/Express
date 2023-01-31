require('dotenv').config();
const express = require('express')
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const employeeRouter = require('./routes/employeeRouter');
// con
app.set('view engine', "ejs")
// app.set('views', myViews)

//middleware
app.use(express.json()); //parse json
app.use(express.urlencoded({ extended: true }));

//custom middleware is been created by us
//app.use((req, res, next)=>{
//next()
// })


//routes
app.use(employeeRouter);

app.get('/create', (req, res) => {
    res.status(200).render('create');
});


// dotenv
// console.log(process.env.MONGO_URI);
//db connection

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server runing on ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err);
})
//Nosql - sql