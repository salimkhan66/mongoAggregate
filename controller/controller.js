const patientModel=require('../Models/patient')
const docterModel=require("../Models/docter")
const appointmentModel=require("../Models/appointment")
function home(req,res){
    res.send("this is the user home page");
}

async function inserData(req,res){
    try {
        // Create a new instance of the user model
        const patientData = new patientModel(req.body);

        // Save the instance to the database
        await patientData.save();

        res.json({
            status: "inserted successfully",
            patientData: patientData
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}
async function appointment(req,res){

    try {

        // const {name,specialization,user_Id}=req.body
        
        // Create a new instance of the user model
       
        const appointmentData = new appointmentModel(req.body);
       

        // Save the instance to the database
        await appointmentData.save();

        res.json({
            status: "inserted successfully",
            userData: appointmentData
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}

async function docterData(req,res) {
    try {
        // Create a new instance of the user model
        const docterData = new docterModel(req.body);

        // Save the instance to the database
        await docterData.save();
        res.json({
            status: "inserted successfully",
            docterData: docterData
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
    
}
module.exports={home,inserData,appointment,docterData}
