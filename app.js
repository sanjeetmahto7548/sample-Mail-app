const express=require('express');
const app=express();
const cors=require('cors')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',require('./route/index'))
app.use('/',require('./route/mail'))
const PORT=process.env.PORT || 4500

app.listen(PORT,(err)=>{
if(err){
    console.log(`Error in server connection ${err}`)
}
else{
    console.log(`Server is running on port ${PORT}`)
}
})