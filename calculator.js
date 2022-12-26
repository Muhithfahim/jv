//jshint version: 6
const express = require('express');
const bodyParser =require("body-parser");

const app = express();
const port = 3000;
//any comment
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res)  {
  res.sendFile(__dirname + "/index.html")
});
 app.post("/",function(req,res){
 
  var num1 =Number(req.body.num1);
  var num2 =Number(req.body.num2);
  var result=num1+num2;


  res.send("the result of your calculation is "+result)
 });
 app.get('/bmicalculator',function(req,res)  {
  res.sendFile(__dirname +"/bmicalculator.html")
 });
 app.post("/bmicalculator",function(req,res){

  var weight = parseFloat(req.body.Weight);
  var height= parseFloat(req.body.height);
  var bmi=weight/(height*height);

  res.send("Your BMI is "+ bmi );
 });
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

