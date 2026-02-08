
const express=require('express');
const connectDB = require('./db');
let app=express();
// app.use(express.json());
// const user=require('./module/app');
// app.use('/api',user);
// app.use('/api/users',require('./module/app'));


//body parser
app.use(express.json());



let PORT=3000;
connectDB();
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);

})