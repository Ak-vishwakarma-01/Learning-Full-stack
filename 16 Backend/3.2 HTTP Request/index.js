import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Hello, World!</h1>");
});

app.get("/about",(req,res) =>{
    res.send("<h1>About me</h1> <p> this is Ankit</p>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1> My Contact</h1> <P>Phone: 65432342356 </p>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
