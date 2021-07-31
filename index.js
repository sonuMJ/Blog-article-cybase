require('dotenv').config();
const express = require('express');
const dbconnection = require('./config/dbconnection')
const articleRoutes = require('./routes/articleRoutes')
const categoryRoutes = require('./routes/categoryRoutes')


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//API
app.use("/api/article", articleRoutes)
app.use("/api/category", categoryRoutes)


dbconnection.then((success,err)=> {
    if(err){
        console.log("Failed to connect to database");
    }else{
        console.log("connected to database");
        app.listen(port, () => {
            console.log(`API running at port : ${port}`);
        })
    }
})



