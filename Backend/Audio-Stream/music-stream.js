const express = require('express');
const app = express();
const fs = require('fs');
const helmet  = require('helmet');
const limitModule = require('./rateLimiter');
const session = require('express-session');
app.set('trust proxy', 1);
app.use(helmet());



app.get('/' ,limitModule,  (req, res)=>{
    res.sendFile(__dirname+"/index.html");      
})


app.listen(3000, function(){
    console.log("Server is Running on port 3000");
})


app.get('/audio', (req, res)=>{
 const range = req.headers.range;
 if(!range)
 {
     res.status(400).send("Requires Range Header");
     
 }
 const audioPath = __dirname + "/music.mp3"
 const audioSize = fs.statSync("music.mp3").size;
 const Chunk = 10000;
 const start = Number(range.replace(/\D/g, ""));
 const end = Math.min(start+Chunk, audioSize-1);
 const contentLength = end-start +1;
 const headers = {
     "Content-Range":`bytes ${start}-${end}/${audioSize}`,
     "Accept-Ranges":"bytes",
     "Content-Length": contentLength,
     "Content-Type": "audio/mp3"

 }
 res.writeHead(206, headers);
 const audioStream = fs.createReadStream(audioPath, {start, end});
audioStream.pipe(res);


})

app.use(session({
    secret: "s3Cur3",
    cookie: {
        httpOnly: true,
        secure : true
    },
    resave: true,
    saveUninitialized: true
}));