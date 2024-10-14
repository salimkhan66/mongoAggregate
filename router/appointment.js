const express = require('express');
const { appointment, groupByUserId } = require('../controller/appointment');
const router=express.Router();

router.get("/",appointment)

router.get("/group",groupByUserId);

module.exports=router;