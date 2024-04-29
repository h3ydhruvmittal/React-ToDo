const zod = require("zod");
/*
{
    title: string,
    description: string
}
{
    id:string
}
*/

const createToDo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateToDo = zod.object({
    id: zod.string()
})

module.exports = {
    createToDo:createToDo,
    updateToDo:updateToDo
}