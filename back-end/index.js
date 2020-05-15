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
let PlayerModel = require('./src/models/player')


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

// forwards
fs.createReadStream(__dirname + '/public/csv/player.csv')
    .pipe(
        parse({
            delimiter : ','
        })

    )
    .on('data', function(dataRow){
        csvData.push(dataRow);
    })
    .on('end', function(){
        var count =0;
        var typ = 1;
        csvData.forEach(element =>{
            if(typ != element[3]){
            count = 0,
            typ = element[3]
            }
            var flag = false;
            var pri = 1000;
            if(count < 10){
                 flag = true,
                 pri = 1500;
            }
            var newPlayer = new PlayerModel({
                name: element[2],
                isMarquee:flag,
                rating:element[7],
                price:pri,
                type: element[3]
            })
            typ = element[3]
            newPlayer.save();
            count += 1;
        })
    });


// Code to display static error webpage.
    app.use((req, res, next) => {
        res.status(404).send("We think you're lost")
    })
    
    //Handler for 500
    app.use((err, req, res, next) => {
        console.log(err.stack)
       res.sendFile(path.join(__dirname,'/public/500.html'))
    })
    

// Connection to POR
const PORT = process.env.PORT || 3000


app.listen(PORT, () =>console.log(`SERVER started on port ${PORT} ` ))