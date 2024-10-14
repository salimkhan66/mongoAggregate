const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender:{
    type:String,
    require:true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
 
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
