const mongodb = require('mongodb');
const Employee = require('../models/employee');
const ObjectId = mongodb.ObjectID;

exports.getAddEmployee = (req,res,next)=>{
  res.render('admin/edit-employee',{
    pageTitle : 'Add Employee', 
    path : 'admin/add-employee',
    editing: false
  });
};

exports.postAddEmployee = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const phoneno = req.body.phoneno;
  const employee = new Employee(name, email, address, phoneno);
  employee
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Employee List');
      res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getEditEmployee = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const empId = req.params.employeeId;
 Employee.findById(empId)
   .then(employee => {
     if (!employee) {
        return res.redirect('/');
      }
      res.render('admin/edit-employee', {
        pageTitle: 'Edit Employee',
        path: '/admin/edit-employee',
        editing: editMode,
        employee: employee
      });
    })
    .catch(err => console.log(err));
};

exports.postEditEmployee = (req, res, next) => {
  const empId = req.body.employeeId;
  const updatedname = req.body.name;
  const updatedemail = req.body.email;
  const updatedaddress = req.body.address;
  const updatedphoneno = req.body.phoneno;
  Employee.findById(empId)
    const employee = new Employee(
      updatedname,
      updatedemail, 
      updatedaddress, 
      updatedphoneno, 
        
      new ObjectId(empId
    ));
    employee
    .save()
    .then(result => {
      console.log('UPDATED Employee!');
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.postDeleteEmployee = (req, res, next) => {
  const empId = req.body.employeeId;
  Employee.deleteById(empId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/');
    })
    .catch(err => console.log(err));
};
