const Attendance = require('../models').Attendance;

const all = (req, res) => {
    return Attendance.findAll({

    })
    .then( (emps) =>{
        res.send(JSON.stringify(emps));
    })

}

const byId = (req,res) => {
    let attId = req.params.id;
    return Attendance.findAll({
        where: {
            id: attId
        }
    }).then( (per) =>{
        res.send(JSON.stringify(per));
    });
}

const save = (req, res) => {
    let recordedDateTime = new Date(req.body.recordedDateTime);
    let employeeId = req.body.employeeId;
    Attendance.create({
        recordedDateTime: recordedDateTime,
        employeeId: employeeId
    })
    .then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err))); 
}

const update = (req,res) => {
    let attId = req.body.id;
    let recordedDateTime = new Date(req.body.recordedDateTime);
    let employeeId = req.body.employeeId;
    Attendance.update({
        recordedDateTime: recordedDateTime,
        employeeId: employeeId
    },{
        where: {
            id: attId
        }
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}

const destory = (req, res) => {
    let attId = req.body.id;
    Attendance.destroy({
        where: {
            id: attId
        }
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}

module.exports = {
    all, byId, save, update, destory
}