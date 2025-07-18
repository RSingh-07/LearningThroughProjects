const express = require('express');  //Imports the Express module
const app = express();               //Creates an Express application
const path = require("path");

const http = require("http");        //Import Node's HTTP module

const socketio = require("socket.io");//Import socket.io
const server = http.createServer(app);//create an HTTP server with Express
const io = socketio(server);          //Attach socket.io to the HTTP server

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket){
    socket.on("send-location", function(data){
         io.emit("receive-location", {id:socket.id, ...data});
    });

    socket.on("disconnect", function(){
        io.emit("user-disconnected", socket.id);
    });
    console.log("connected");
});

app.get("/", function (req, res) {   //Handles GET requests to the root URL "/"
    res.render("index");                 //Sends the response "hey" to the browser
})

server.listen(3000);                    //Start the server on port 3000