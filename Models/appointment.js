const mongoose = require('mongoose');
const { Schema } = mongoose;


// Define the appointment schema
const appointmentSchema = new Schema({
  docter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Docter',  // Refers to the 'Doctor' collection
    required: true
  },
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',  // Refers to the 'Patient' collection
    required: true
  },
  reason: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date, 
    default: Date.now,  // This will be stored as ISODate in MongoDB
    required: true
  }
});

// Create the model using the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
