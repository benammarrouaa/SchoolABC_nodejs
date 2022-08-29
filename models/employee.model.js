const dbConn = require("../db.config.js");

//constructor
const Employee = function(emp) {
  this.id = emp.id;
  this.name = emp.name;
  this.firstName = emp.firstName;
  this.department = emp.department;
  
};

// Add a new Employee in the database
Employee.create = (newEmp, result) => {
  dbConn.query("INSERT INTO employees SET ?", newEmp, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created emp: ", { id: res.insertId, ...newEmp });
    result(null, { id: res.insertId, ...newEmp });
  });
};

// Update an Employee identified by the id 
Employee.updateById = (id, employee, result) => {
      dbConn.query(
        "UPDATE employees SET name = ?, firstName = ?, department = ? WHERE id = ?",
        [employee.name, employee.firstName, employee.department, id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
          if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
          }
          console.log("updated employee: ", { id: id, ...employee });
          result(null, { id: id, ...employee });
        }
      );
    };

// Retrieve all employees from the database.
Employee.getAll = result => {
  dbConn.query("SELECT * FROM employees", (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
          console.log("employees: ", res);
          result(null, res);
        });
      };

// Retrieve all employees from the database by department.
Employee.getEmployeesByDepartment = (department, result) => {
         dbConn.query(`SELECT * FROM employees WHERE department = ${department}` , (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
          console.log("employees: ", res);
          result(null, res);
        });
      };

module.exports= Employee;