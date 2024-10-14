const appointmentModel = require("../Models/appointment");
const patientModel = require("../Models/patient");
const docterModel = require("../Models/docter");

async function appointment(req, res) {
  const appointmentData = await appointmentModel.find({}).count();
  res.send({
    status: "Successfully Fetch",
    appointmentData: appointmentData,
  });
}

// ================================================group by User_Id=====
async function groupByUserId(req, res) {
  try {
    const appointmentData = await appointmentModel.aggregate([
      {
        // Lookup to join Patient collection
        $lookup: {
          from: "patients", 
          localField: "patient_id", 
          foreignField: "_id", 
          as: "patientDetails", 
        },
      },
      {
        $match: {
          "patientDetails.gender": "male",
        },
      },

      {
        // Lookup to join Doctor collection
        $lookup: {
          from: "docters", 
          localField: "docter_id", 
          foreignField: "_id", 
          as: "doctorDetails", 
        },
      },
      {
        $match: {
          "doctorDetails.specialization": "eyes",
        },
      },
      {
        // Unwind patientDetails array to flatten the result
        $unwind: "$patientDetails",
      },
      {
        // Unwind doctorDetails array to flatten the result
        $unwind: "$doctorDetails",
      },
    ]);

    res.send({
      status: "Successfully Fetched",
      appointmentData: appointmentData,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: error.message,
    });
  }
}

module.exports = { appointment, groupByUserId };
