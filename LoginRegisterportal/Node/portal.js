const { default: mongoose } = require("mongoose");
mongoose.connect("mongodb+srv://Nikhil:NiNi_123!@hcl.a3wulkj.mongodb.net/Register")


const pn = require("./Register")

console.log(pn.rname,pn.email,pn.rpassword);