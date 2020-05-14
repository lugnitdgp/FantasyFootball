// the require statements ( dependencies )
const parse = require('csv-parse');
const fs = require('fs');
let express = require('express')
let app = express()
var mongoose = require('mongoose')
let path = require('path')
let bodyParser = require('body-parser')
let cors = require('cors')
var config = require('./config/database')

// constants, variables, arrays
const csvData = [];

// using the dependencies
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('public'))
mongoose.connect(config.db ,{ useUnifiedTopology: true, useNewUrlParser: true },
    )
    
mongoose.Promise = global.Promise;

// creating read stream for reading from csv files
fs.createReadStream(__dirname + '/public/csv/forward.csv')
    .pipe(
        parse({
            delimiter : ','
        })

    )
    .on('data', function(dataRow){
        csvData.push(dataRow);
    })
    .on('end', function(){
        console.log(csvData);
    });

// Connection to PORT
const PORT = process.env.PORT || 3030

app.listen(PORT, () =>console.log(`SERVER started on port ${PORT} ` ))