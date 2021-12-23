const express=require('express');
const app=express();
const cors=require('cors')
// app.use(cors({
//     origin:"http://localhost:44322",
//     credentials: true,
// }));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',require('./route/mail'))
const port=process.env.PORT || 4500

app.listen(port,(err)=>{
if(err){
    console.log(`Error in server connection ${err}`)
}
else{
    console.log(`Server is running on port ${port}`)
}
})