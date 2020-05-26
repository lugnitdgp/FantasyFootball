
const parse = require('csv-parse');
const fs = require('fs');
let PlayerModel = require('../models/player')
let TeamModel = require('../models/team')

const csvData = [];

module.exports= function(app, dir){
app.post('/loadCsv', (req,res)=>{
    PlayerModel.find().then(doc => {
        
        if(doc.length === 0){
            fs.createReadStream(dir + '/public/csv/player.csv')
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
        
                res.json({done : true, message: 'Loaded data successfully'})
            })
        }
        else{
            res.json({done : false, message : 'Loaded data already'})
        }
    })
    

})

app.post('/addTeam', function(req, res){
    TeamModel.find({name : req.body.name}).then(doc => {
        if(doc.length > 0 )
        res.json({done : false, message: `Team ${req.body.name} already exists`})
        else{
            var newTeam = new TeamModel({
                name: req.body.name,
                money : req.body.money
            })
    
            newTeam.save();
            res.json({done : true, message: `Team ${req.body.name} has been added`})
        }
    })

       


})

app.get('/getList' , (req,res)=>{
    PlayerModel.find().then( doc =>{
        res.send(doc)
    })
})

app.post('/getPlayer',(req,res)=>{
PlayerModel.findOne({_id : req.body.id}).then(doc1=>{
    return res.json(doc1)


})
})

app.post('/bidDone', (req,res)=>{
    TeamModel.findOne({_id:req.body.tid}).then(team =>{
        PlayerModel.findOne({_id : req.body.pid}).then(player=>{
            team.players
        
        
        })
    })
})


app.get('/getTeams' , (req,res)=>{
    TeamModel.find().then( doc =>{
        res.send(doc)
    })
})

}
