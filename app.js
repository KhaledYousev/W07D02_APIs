const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];
app.get("/todo",(req,res)=>{
    res.status(200);
    res.json(todos);
});
app.post("/create/todo",(req,res)=>{
    const newTodo = { todo:req.body.todo, isCompleted:req.body.isCompleted};
    todos.push(newTodo);
    res.status(201);
    res.json(newTodo);
    
    });

    app.put("/update/todo/:name",(req,res)=>{

        const todo = req.params.name

        const found = todos.find((element)=>{
            return element.todo === todo ;
        });
     
    
      if (found){
        res.status(200);
        const newTodo = { todo:req.body.todo, isCompleted:req.body.isCompleted};

          res.json(newTodo);
      }else {
          res.status(404);
          res.json("todo not found")
      }
    });

    app.delete("/delete/todo/:name",(req,res)=>{
       let index;
        const todo = req.params.name

        const found = todos.find((element,i)=>{
            index = i;
            return element.todo === todo ;
    });
    if(found){

        todos.splice(index,1);
        res.status(200);
        res.json(todos);
    } else {
        res.status(404);
        res.json("todo not found");
    }
} );

app.put('/complete/todo/:name', (req,res)=>{
    let index;
    const todo = req.params.name;
    const found = todos.find((element,i)=>{
        index = i;
        return element.todo === todo;
    });
    if(found){
        todos[index].isCompleted = true;
        res.status(200);
        res.json(todos);

    } else {
        res.status(404);
        res.json("todo not found ")
    }
});


app.get('/completed/todos', (req,res)=>{
    const found = todos.filter((element,i)=>{
        return element.isCompleted === true;
    })
    res.json(found);

});


 app.listen(port,()=>{
    console.log(`the server run on http://localhost:${port}`)
      });