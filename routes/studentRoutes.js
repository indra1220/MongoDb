const express = require("express");
const {createStudent,getStudent,getOneStudent,deleteStudent,updateStudent}=require("../controllers/studentController");

const router=express.Router();

router.post("/",createStudent);
router.get("/",getStudent);
router.get("/rollno/:rollno", getOneStudent);
router.delete("/:rollno",deleteStudent);
router.put("/:rollno",updateStudent);
module.exports = router;