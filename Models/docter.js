const mongoose = require("mongoose");



const docterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  specialization: {
    type: String,
    required: true,
    trim: true,
  },
gender:{
  type:String,
  require:true,
  trim:true
},
address:{
  type:String,
  required:true,
  trim:true
}
     
});

const Docter = mongoose.model("Docter", docterSchema);

module.exports = Docter;
