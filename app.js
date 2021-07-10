const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname))
const urlencodedParser = bodyParser.urlencoded({extended: false});
var Crypto = require('crypto-js')
ObjectId = require("mongodb").ObjectID;

var port = process.env.PORT||3000;
app.listen(process.env.PORT ||port, () => {
  console.log(`Listening on port ${port}`)
})


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/create.html')
});