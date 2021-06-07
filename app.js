const express = require("express");
const BodyParsers = require('body-parser');
const app = express();
const mongooses = require('mongoose');
const PORT = process.env.PORT || 5000;
const nseController = require('./Controller/nseController');
app.use(express.urlencoded());

app.use(BodyParsers.json());
app.use(BodyParsers.urlencoded({extended:true}));





app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST, PUT ,DELETE ,PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use(nseController);


app.use((req,res,next) => {
  const error = new Error();
   error.statusCode = 422;
   error.message = 'Page Not Found!';
   
   next(error);
})

app.use((error, req, res, next) => {
   const status = error.statusCode || 500;
   const message = error.message;
 return res.status(status).json({
    status: status,
    message: message
  });

})
 


mongooses.connect('mongodb+srv://NSE:w1UhFhjn6UtCQj0b@cluster0.5tkyb.mongodb.net/NSEDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
  .then(res => {
    console.log("MongDB Connected Successfully!");
            
   app.listen(process.env.PORT || PORT, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Server is Running up on port ", PORT);
     });
    
  })
  .catch(err => {
    console.log(err);
  });




