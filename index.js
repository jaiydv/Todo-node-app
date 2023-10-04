const { render } = require("ejs");
const express = require("express");
const path = require("path");

const port = 8888;

const app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.set(express.urlencoded());
app.set(express.static("assests"));


app.get("/",function(req,res){

    return res.render("home");

})


app.listen(port,function(err){

    if(err){
        console.log(err);
    }
    console.log("Server is running Listning on port",port);

})