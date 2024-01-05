var express=require('express');
var app=express();
app.use(express.static('public'));
app.get("/home.html",(req,res)=>{res.send("BasketBall");});
app.listen(9000);
console.log("app is listening on port 9000");