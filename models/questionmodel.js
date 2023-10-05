
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Nikhil:NiNi_123!@hcl.a3wulkj.mongodb.net/Register')
const questionSchema = new mongoose.Schema({
    question:String,
    option:[String],
    answer:String
})

module.exports = mongoose.model('Question',questionSchema)