const nseSchema = require('../Modals/nseSchema');
const express = require('express');
const router = express.Router();


router.get('/', (req,res,next) => {
      
       
    nseSchema.find()
       .limit(50)
       .then(nselist => {
            
           console.log(nselist.length);
         return res.status(200).json({
            status: 200,
            message: 'nse stock list',
            nse:nselist
         })

       }).catch(err => {
           if (!err.statusCode) {
               err.statusCode = 500;
           }    
           next(err);
       })
} )


module.exports = router;




