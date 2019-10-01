
const Employee = require('../models/employee');

exports.getIndex = (req, res, next) => {
    Employee.fetchAll()
      .then(employee => {
        res.render('customer/index', {
          prods: employee,
          pageTitle: 'Employee',
          path: '/'
        });
      })
      .catch(err => {
        console.log(err);
      });
  };