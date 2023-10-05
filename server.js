if (process.env.NODE !== 'prod')
{
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
var path = require('path')

const indexRouter = require("./routes/index")
const newuserRouter = require("./routes/new")
const homeRouter = require('./routes/home')
const { default: mongoose } = require('mongoose')


app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({limit : '10mb' , extended: false}))

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
        ssl: true,
        sslValidate: true,sslCA: `${__dirname}/rootCA.pem`
})

const db =mongoose.connection

db.on('error',error=>console.log(error))
db.once('open',()=> console.log('Connected to MongoDb'))

app.use('/', indexRouter )
app.use('/portal',newuserRouter)
app.use('/',homeRouter)


app.listen(process.env.PORT || 3000)