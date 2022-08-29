
const express = require('express')
const router = express.Router()
const employeeController =   require('../controllers/employee.controller');
// Create a new Employee
router.post("/create", employeeController.create);
// Retrieve all Employees
router.get("/all", employeeController.findAll);
// Retrieve all Employees by department
router.get("/", employeeController.findEmployeesByDept);
// Update an Employee with id
router.put("/update/:id", employeeController.update);

module.exports = router