const mongoose = require('mongoose')
const Schema = mongoose.Schema

// for each employee we want their - name roles, level, age
//timestamps - createdAt - updateAt
const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
},
{timestamps: true}
)
module.exports = mongoose.model('Employee', employeeSchema);
// or 
//const Employee
