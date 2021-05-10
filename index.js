const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Mark", age: 19 },
];

app.get("/users",(req,res)=>{
    res.status(200);
    res.json(users);
});

app.get("/user/:name",(req,res)=>{
    const user = req.params.name
    const found = users.find((element) => {
        return element.name ===user;
    });
})
if (found) {


app.listen(port, () => {
    
  });