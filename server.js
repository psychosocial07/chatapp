 const http = require('http')
 const express = require('express');
 const {Server}=require('socket.io')
 const cors = require('cors')

 const app = express();
 app.use(cors())

 const server = http.createServer(app);

 const io= new Server(server,{
     cors:{
         origin:"http://localhost:3000",
         methods:["GET","POST"]
     }
 })



io.on('connection',(socket)=> {


    socket.on("joinRoom",room =>socket.join(room))

    socket.on("newMessage",({newMessage,room})=>{
        io.in(room).emit("getLatestMessage",newMessage)
    })
})


 server.listen(3001, ()=> console.log('Server is running....'))