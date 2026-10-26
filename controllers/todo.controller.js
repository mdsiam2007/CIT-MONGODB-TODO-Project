import { TodoModel } from "../models/todo.model.js";

const getTodos = async (req,res) => {
    const todos = await TodoModel.find();
    return res.json(todos);
}

const createTodos = async (req,res) => {
    const {title,isComplete} = req.body;
    const todos = await TodoModel.create({
        title,isComplete
    })
    
    return res.json(todos)
}

const updateTodos = async (req,res) => {
    const { id } = req.params;
    const {title,isComplete} = req.body;
    const updatedTodo = await TodoModel.findByIdAndUpdate(
        id,
        {
            title: title,
            isComplete: isComplete
        },
    )

    if(!updatedTodo){
        return res.status(404).json({
            "message":"Update Failed"
        })
    }

    return res.json({
        message: `Updated Successfully. ID:${id}`,
        updatedTodo,
        "Old data": {
            "Title":updatedTodo.title , 
            "Complete Status":updatedTodo.isComplete
        },
        "New Data": {
            "Title":title , 
            "Complete Status":isComplete
        },
        timestamp: new Date()
    })
}

const deleteTodos = async (req,res) => {
    const { id } = req.params;
    const deletedTodo = await TodoModel.findByIdAndDelete(id);

    if (!deletedTodo){
        return res.status(404).json({
            "message" : `Requested id:${id} not found.
            Delete Failed.`
        })
    } 
    
    return res.json({
        "message":"Deleted Successfully.",
        deletedTodo
    })
    
}
export{
    getTodos,
    createTodos,
    deleteTodos,
    updateTodos
}