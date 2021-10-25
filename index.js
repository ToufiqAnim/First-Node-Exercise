const express = require('express');
const cors = require('cors')
const app = express();


app.use(cors());
app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('My Second Node Server, I am learning node,I will succeed in life, I will not become a losser ')
})

const users =[
    {id:0, name:"Katrina",email:"kat@gmail.com"},
    {id:1, name:"Jacqueline",email:"jac@gmail.com"},
    {id:2, name:"Deepika",email:"dep@gmail.com"},
    {id:3, name:"Kiara",email:"kiara@gmail.com"},
    {id:4, name:"Raveena",email:"rav@gmail.com"},
    {id:5, name:"Kajal",email:"kajal@gmail.com"}
]

app.get('/users', (req,res)=>{
    const search = req.query.search ;

    // use query/search parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
   
})
// app.METHOD

app.post('/users', (req, res)=>{
    const newUser = req.body
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    // shortcut 
    res.json(newUser)
})

// dinamic api

app.get('/users/:id', (req,res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
app.listen(port, ()=>{
    console.log('Projects port changed, new Port', port)
})