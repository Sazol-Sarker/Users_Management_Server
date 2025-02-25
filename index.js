const express = require("express");
const cors=require('cors')
const app = express();

const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
  { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
  { id: 3, name: "Sam Brown", email: "sambrown@example.com" },
  { id: 4, name: "Emily White", email: "emilywhite@example.com" },
  { id: 5, name: "Michael Johnson", email: "michaeljohnson@example.com" },
  { id: 6, name: "Sarah Lee", email: "sarahlee@example.com" },
  { id: 7, name: "David Wilson", email: "davidwilson@example.com" },
  { id: 8, name: "Linda Taylor", email: "lindataylor@example.com" },
  { id: 9, name: "James Harris", email: "jamestharris@example.com" },
  { id: 10, name: "Patricia Clark", email: "patriciaclark@example.com" },
];

// MIDDLEWARE
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to the server home page");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post('/users',(req,res)=>{
    console.log("Hitting post api",req.body)
    const newUser=req.body;
    const id=users.length+1;
    newUser.id=id
    users.push(newUser)
    res.send(newUser)
      
})

app.listen(port,()=>{
    console.log("listening to port=>",port);
})
