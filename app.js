const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];
app.get("/todo",(req,res)=>{
    res.status(200);
    res.json(todos);
});

