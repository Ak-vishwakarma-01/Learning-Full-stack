import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname = "";

app.use(bodyParser.urlencoded({extended:true})); // without bodyparser (middleware)

// function bandNameGenerator(req,res,next){   // using custom middleware by using function
//   console.log(req.body);
//   bandname = req.body["street"]+req.body["pet"];
//   next();
// }
 
// app.use(bandNameGenerator);

app.get("/", (req, res) => {
  // console.log(__dirname+"/public/index.html");
  res.sendFile(__dirname + "/public/index.html"); // sendFile because we are sending a file
});

app.post("/submit",(req,res)=>{  // we don't get this request
  console.log(req.body); // without middlware it will print undefined
  // res.send(`<h1>Your Band name is 1${bandname}. 👌`); // here we are sending a text;

  res.send(`<h1>Your Band name is 1${req.body["street"]+req.body["pet"]}. 👌`);  // we can use it also

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
