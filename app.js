//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  var today = new Date();
  var dayOfWeek = today.getDay();
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if( dayOfWeek === 6 || dayOfWeek === 0 ){
    day = day[dayOfWeek] ;
  }else{
    day = day[dayOfWeek];
  }

res.render("list", {kindOfDay: day});
})




app.listen(3000, function(){
    console.log("Server is running on port 3000");
  })



