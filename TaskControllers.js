const TaskModel = require("../models/TaskModel")

module.exports.getTasks = async (req, res) => {
    const task = await TaskModel.find()
    res.send;
};

module.exports.saveTasks = async(req, res) => {

    const {task} = req.body;

    TaskModel.create({task})
    .then((data) => {
        console.log("Saved Successfully...");
       res.status(201).send(data);
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    });
};


module.exports.updateTasks = async(req, res) => {
    const {id} = req.params;
    const {task} = req.body;
TaskModel.findByIdAndUpdate(id, {task})
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    });
};

module.exports.deleteTasks = async(req, res) => {
    const {id} = req.params;
    
TaskModel.findByIdAndUpdate(id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    });
};