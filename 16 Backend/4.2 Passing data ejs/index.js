import bodyParser from "body-parser";
import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/check",(req,res)=>{
    const le = req.body.namefirst + req.body.lastname;
    const de = le.length;
    res.render("../views/index.ejs", { len: de});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });