const express = require('express')
const router = express.Router();
const{
    getEmployees,
    getEmployee,
    deleteEmployee,
    updateEmployee,
    createEmployee,
} = require('../controller/employeeController');


// router.route('/employee').get(getEmployee).post(createEmployee);
// router
// .route("/employee/:id").get(getEmployee).patch(updateEmployee).delete(deleteEmployee);


router.get('/employees', getEmployees);
router.post('/employee', createEmployee);
router.get('/employee/:id', getEmployee);
router.delete('/employee/:id', deleteEmployee);
router.patch('/employee/:id', updateEmployee);

module.exports = router