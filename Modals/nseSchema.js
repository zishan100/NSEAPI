const mongooses = require('mongoose');

const nseSchema = new mongooses.Schema({
    SYMBOL: {
        type: String,
        required: true
    },
    SERIES: {
        type: String,
        required:true  
    },
    OPEN: {
       type: Number,
       required:true 
    },
    HIGH: {
        type: Number,
        required:true 
    },
    CLOSE: {
        type: Number,
        required:true 
    },
    ISIN: {
       type: String,
       required:true  
    }     
},{timestamps:true});

module.exports = mongooses.model('nse', nseSchema);
