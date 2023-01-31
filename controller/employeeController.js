const Employees = require('../models/employees');


// get all employees- /employees
const getEmployees = (req, res)=>{
    // res.send('get all employees')
    Employees.find().then((data)=>{
        // res.status(200).json({data});
        res.status(200).render('index', {employees: data})
    })
    .catch((err)=> console.log(err));
}

// get a single employee / employees/:id req.params
// id_ findById
const getEmployee = (req, res)=>{
    // res.send('get single employee')
    const {id} = req.params
    Employees.findById({_id: id}).then ((data)=>{
        // res.status(200).json ({data});
        res.status(200).render('details', {employee: data})
    })
    .catch((err)=> console.log(err));
}

// create a new employee / employees - req.body
// name, role, age - req.body
const createEmployee= (req, res)=>{
    // res.send('Create employee')
    const {name, role, age} = req.body
    const employee = new Employees(req.body)
    employee.save().then((data)=>{
        // res.status(201).json({msg:'Employee created', data})
        res.redirect("/employees")
    })
    .catch ((err)=>{
        console.log(err)
    });
}

// update an employee / employess/:id - params, body
const updateEmployee= (req, res)=>{
    // res.send('Update employee')
    const {id} = req.params;
    //req.body
    Employees.findByIdAndUpdate({_id:id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((data)=>{
        res.status(200).json({msg: "employee updated",data});
    })
    .catch((err)=>console.log(err))
}

// delete a employee / employees/:id params
const deleteEmployee = (req, res)=>{
    // res.send('Delete employee')
    const {id} = req.params;
    Employees.findByIdAndDelete({_id: id})
    .then((data)=>{
        // res.status(200).json({msg: 'employee deleted'})
        
        res.status(200).json({redirect:'/employees'})
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports= {
    getEmployees,
    getEmployee,
    deleteEmployee,
    updateEmployee,
    createEmployee
}