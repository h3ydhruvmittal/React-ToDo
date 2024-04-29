/*
Todo{
    title:string,
    description:string,
    completed:boolean
}
*/

const mongoose = require("mongoose");
//mongodb+srv://dhruvdm02:Mittalboyz01@todo.9gc5mvu.mongodb.net/todos
//it's not good to directly add the url here , instead create an .env file
mongoose.connect("mongodb+srv://dhruvdm02:Mittalboyz01@todo.9gc5mvu.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}