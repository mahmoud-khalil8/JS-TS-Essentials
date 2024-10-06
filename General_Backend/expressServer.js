const express =require('express') ;

const app =express() ;
const PORT=process.env.PORT ||3000 ;

app.use(express.json()) ;
let users=[] ;

app.get('/users',(req,res)=>{
    res.json(users) ;
})
app.post('/users',(req,res)=>{
  const {name,email}=req.body ;
  if(!name || !email){
      return res.status(400).json({error:'name and email required'}) ;
  }
  if(users.find(user=>user.email==email)){
      return res.status(400).json({error:'email already exists'}) ;
  }
  const newUser={
      id:users.length+1,
      name,
      email
  }
  users.push(newUser) ;
  res.status(201).json(newUser) ;

});

app.get('/users/:id',(req,res)=>{
  const id=parseInt(req.params.id) ;
  const user=users.find(user=>user.id===id) ;
  if(user){
      res.json(user) ;
  }
  else{
      res.status(404).json({error:'user not found'}) ;
  }
}) ;

app.delete('/users/:id',(req,res)=>{
    const id=parseInt(req.params.id) ;
    const userIndex=users.findIndex(user=>user.id===id) ;
    if(userIndex===-1){
        return res.status(404).json({error:'user not found'}) ;
    }
    users.splice(userIndex,1) ;
    res.status(204).send() ;
}) ;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`) ;
}) ;

