const router = require('express').Router();

// Models
const Course = require('../model/Course');
const Student = require('../model/Student');
const Registration = require('../model/Registration');

// localhost:3000/courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        if (!courses) {
            throw new Error("No courses exist");
        }
        res.send(courses);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// localhost:3000/api/students
router.get('/students', async (req, res) => {
    try {
        //collection = db.getCollection("Student");
        const students = await Student.find();
        //console.log(students);
        if (!students) {
            throw new Error("No students exist");
        }
        res.send(students);
    } catch (err) {
        console.log("students id error");
        res.status(400).json({ message: err.message });
    }
});
/*
// students by id
// http://localhost:3000/api/students/:id
router.get("/students/:id", async (req, res) => {
    try {
        const students = await Student.findOne({ id: req.params.id });
        if (!students) {
            throw new Error("User does not exist");
        }
        res.send(students);
    } catch (err) {
        console.log("students id error");
        res.status(404).json({ message: err.message });
    }
});
*/

// localhost:3000/registrations
router.get('/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find();

        if (!registrations) {
            throw new Error("No courses exist");
        }
        res.send(registrations);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;