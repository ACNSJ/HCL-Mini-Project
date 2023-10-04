const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Nikhil:NiNi_123!@hcl.a3wulkj.mongodb.net/Register')
const questionSchema = new mongoose.Schema({
    question:String,
    option:String,
    answer:String
})

question = mongoose.model('Question',questionSchema)