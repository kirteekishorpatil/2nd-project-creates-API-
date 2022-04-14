const { Router } = require('express')
const express=require('express')
const { getdata, postdata, putdata, deletedata,} = require('../controller/merakidata')

const router=express.Router()
router.get("/getdata",getdata)
router.post("/postdata",postdata)
router.put("/putdata/:id",putdata)
router.delete("/deletedata/:id",deletedata)
// router.get()


module.exports=router

