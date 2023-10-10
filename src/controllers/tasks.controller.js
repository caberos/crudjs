import Task from "../models/task.model.js"

export const getTasks = async (req, res) => {
    const tasks = await Task.find().populate('user');
    res.json(tasks)
};
export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate('user');
    if(!task) return res.status(404).json({messsage:"Task no found"});
    res.json(task);
};
export const createTasks = async (req, res) => {
    const {
        title,
        description,
        date
    } = req.body

    console.log(req.user)
    const newTask = new Task({
        title,
        description,
        date,
        user : req.user.id
    });
    const saveTask = await newTask.save();
    res.json(saveTask);
};
export const deleteTasks = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({messsage:"Task no found"});
    res.sendStatus(204);
};
export const updateTasks = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    }).populate('user');
    if(!task) return res.status(404).json({messsage:"Task no found"});
    res.json(task);
};