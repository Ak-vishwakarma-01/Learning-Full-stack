//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/week", (req, res) => { 
    const date = new Date();
    const day = date.day;

    const weeked = req.body.weeked.toLowerCase();
    if(weeked==="weekend" || weeked==="weekday"){
        res.render(__dirname + "/views/output.ejs", { variable: weeked});
    }else{
        res.send("<h1>You have choosen wrong input</h1>");
    }
});
        
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});