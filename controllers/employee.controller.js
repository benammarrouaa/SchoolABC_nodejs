const Employee= require("../models/Employee.model.js");
// Add a new Employee in the database
exports.create = (req, res) => {
   // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

  // Create an Employee
   var e = new Employee({
      id: req.body.id,
      name: req.body.name,
      firstName: req.body.firstName,
      department: req.body.department,
      
    });
  // Save Employee in the database
  Employee.create(e, (err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Some error occurred while creating the Employee."
        });
      else res.json(data);
    });
  };
      
// Update an Employee identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).json({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    Employee.updateById(
      req.params.id,
      new Employee(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).json({
              message: `Not found Employee with id ${req.params.id}.`
            });
          } else {
            res.status(500).json({
              message: "Error updating Employee with id " + req.params.id
            });
          }
        } else if (err)
        res.json(err);
        res.json({message: 'Employee successfully updated', data, id:req.params.id});
      }
    );
};

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
    Employee.getAll((err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Some error occurred while retrieving employees."
        });
      else res.json(data);
    });
  };

// Retrieve all employees from the database (with condition).
exports.findEmployeesByDept = (req, res) => {
    Employee.getEmployeesByDepartment(req.query.department, (err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Some error occurred while retrieving employees."
        });
      else res.json(data);
    });
  };

 