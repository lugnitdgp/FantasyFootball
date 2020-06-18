// the require statements ( dependencies )

let express = require('express');
let app = express();
var mongoose = require('mongoose');
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');
var config = require('./config/database');
let Routes = require('./src/routes/route');

const dir = __dirname;
// constants, variables, arrays

// using the dependencies
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
mongoose.connect(config.db, { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
	console.log(`${new Date().toString()} =>${req.originalUrl}`, req.body);

	next();
});
require('./src/routes/route')(app, dir, db);

app.use(Routes);
console.log(dir);

// Code to display static error webpage.
app.use((req, res, next) => {
	res.status(404).send("We think you're lost");
});

//Handler for 500
app.use((err, req, res, next) => {
	console.log(err.stack);
	res.sendFile(path.join(__dirname, '/public/500.html'));
});

// Connection to POR
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`SERVER started on port ${PORT} `));
