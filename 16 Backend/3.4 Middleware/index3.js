import express from "express";

const app = express();
const port = 3000;


function middlewarefunctionLogger(req,res,next){
    console.log("Request Method: ", req.method);
    console.log("Request Url: ", req.url);
    next(); // if we don't use next in middleware then the sever will not go to next and get error 
}

app.use(middlewarefunctionLogger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  res.send("Hello");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
