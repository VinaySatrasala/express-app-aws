const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("U did it....!");
});

app.listen(3000);