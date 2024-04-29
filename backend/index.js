//write basic boilerplate code,
//with express.json() middleware

// body{
//     title:String;
//     description:string;
// }
const express = require("express");
const { createToDo, updateToDo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createToDo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Oops!,You sent the wrong inputs."
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    
    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateToDo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Oops!,You sent the wrong inputs."
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Congratulations!, on completing your task -- Todo marked as completed"
    })
})

app.listen(3000);