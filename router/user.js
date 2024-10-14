const express = require('express');
const {home, inserData, appointment, docterData}=require("../controller/controller")

const router=express.Router();

router.get("/",home);

router.post("/insert",inserData)
router.post("/insert/docter",docterData)

router.post("/appointment",appointment)

module.exports=router;