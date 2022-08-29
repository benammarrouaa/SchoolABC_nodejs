# this REST API example is a backend application to manage the employees of ABC School with MySQL database.

It is built with Node.js and Express Framework with Javascript and MySQL database.

# Description

- In the applicaiton we can manage employee data, such as create/edit an employee. In addition, we can get all the employees in the database.

- The following table shows overview of the Rest APIs that will be exported:

Methods	 Urls                                     Actions
================================================================================	                                
GET	 api/employees/all	                        Get all Employees
POST	 api/employees/create	                Create new Employee
PUT	 api/employees/update/:id	               Update Employee by id
GET	 api/employees?department=’xxxx’    	Get all Employees with department ’xxxx’

# install dependencies
 npm install 

# Set up the database: 
- create a new database (pointage)
- create a new table employees with the following fields

			 { 
                           "id": varchar
                           "name": varchar
                           "firstName": varchar
                           "dateCreated": datetime
                           "department": varchar
                          }

- Modify  configuration of db.config.js  file: HOST, USER, PASSWORD, NAME.
- In the project directory run: node server => If everything went well, you should see something like this on the console
Server Running in Port xxxx
Database Connected


# Endpoints 

For test in my case I have used POSTMAN

Main URL: localhost:xxxx/employees
==>This request will return the complete list of employees. GET method: localhost:xxxx/api/employees/all

The answer will be something like:

				[
				    {
					"id": "A22",
					"name": "Ben Ammar",
					"firstName": "Roua",
					"dateCreated": "2022-08-26T20:05:56.000Z",
					"department": "Info"
				    },
				    {
					"id": "A23",
					"name": "Ben Ammar",
					"firstName": "Yosser",
					"dateCreated": "2022-08-26T20:11:55.000Z",
					"department": "Informatique"
				    }
				]


==>This request will create a employee. POST method: localhost:xxxx/api/employees/create

The employee information you enter on Postman should look something like:

				{
				    "id": "You new employee id",
				    "name": "You new employee name",
				    "firstName": "You new employee first name",
				    "department": "You new employee department"
				}


==>This request will return all employees with specific department. GET by Department method: localhost:xxxx/api/employees?department=’Informatique’

The answer will be something like:

				[
				 {
					"id": "A23",
					"name": "Ben Ammar",
					"firstName": "Yosser",
					"dateCreated": "2022-08-26T20:11:55.000Z",
					"department": "Informatique"
				    }
				]

==>This request will be able to update the data of a specific employee. PUT method: localhost:xxxx/api/employee/update/:id

You can change the data of a specific employee for example:

				{
				    "name": "Ben Ammar",
				    "firstName": "Roua",
				    "department": "Info"
				}

				to:

				{
				    "name": "Ben Ammar",
				    "firstName": "Roua",
				    "department": "Informatique"
				}
