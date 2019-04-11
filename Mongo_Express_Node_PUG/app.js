const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

//connecting to MongoDB server
mongoose.connect('mongodb://localhost:27017/employeedb');
mongoose.connection.on('connected', () => {
	console.log('MongoDb connected on port: 27017');
});

//init app
const app = express();

app.use(cors());

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//importing the model
let Employee = require('./model/employee');

//root route
app.get('/', function (req, res) {
	Employee.find({}, function (err, empployeedata) {
		res.render('index', {
			empData: empployeedata
		});

	});
});

//add route
app.get('/add', function (req, res) {
	res.render('addemployee', {
		mydata: 'This is Capgemini L&D'
	});
});

//add data route
app.post('/emp/adddata', function (req, res) {
	let emp = new Employee();
	emp.empID = req.body.empID;
	emp.empName = req.body.empName;
	emp.empDept = req.body.empDept;
	emp.empSalary = req.body.empSalary;
	emp.save(function (err) {
		if (err) {
			console.log(err);
			return;
		} else {
			res.redirect('/');
		}
	});

});

//search & then update route
app.get('/searchemp/:id', function (req, res) {
	Employee.findById(req.params.id, function (err, edata) {
		if (err) {
			console.log(err);
		} else {
			res.render('updateemployee', {
				data: edata
			});
		}
	});

});

//update data in mongoDB
app.post('/emp/updatedata/:id', function (req, res) {
	let emp = {};
	emp.empID = req.body.empID;
	emp.empName = req.body.empName;
	emp.empDept = req.body.empDept;
	emp.empSalary = req.body.empSalary;
	let query = { _id: req.params.id };
	Employee.update(query, emp, function (err) {
		if (err) {
			console.log(err);
			return;
		} else {
			res.redirect('/');
		}
	});
});

//delete data from mongoDB
app.get('/deleteemp/:id', function (req, res) {
	let queryDelete = { _id: req.params.id };
	Employee.remove(queryDelete, function (err) {
		if (err) {
			console.log(err);
			return;
		} else {
			res.redirect('/');
		}
	});
});

//start server
const port = 1000;
app.listen(port, function () {
	console.log('Server is running on port: ' + port);
});