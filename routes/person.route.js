const express = require('express');
const router = express.Router();

// Require the controllers แต่ตอนี้ยังไม่ได้สร้างนะจะสร้างในขั้นตอนถัดไป
const person_controller = require('../controllers/person.controller');


// สร้าง url สำหรับทดสอบ
router.get('/test', person_controller.test);
module.exports = router;

//ROUTE CREATE
router.post('/create', person_controller.person_create);
//ROUTE READ
router.get('/user', person_controller.read);
router.get('/user/:id', person_controller.person_details);
//ROUTE UPDATE
router.put('/update/:id', person_controller.person_update);
//ROUTE DELETE
router.delete('/delete/:id', person_controller.person_delete);
