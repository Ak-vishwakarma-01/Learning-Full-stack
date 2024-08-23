const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Sample posts data
let posts = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.post('/create', (req, res) => {
    const post = { title: req.body.title, content: req.body.content };
    posts.push(post);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/edit/:index', (req, res) => {
    const post = posts[req.params.index];
    res.render('edit', { post, index: req.params.index });
});

app.post('/edit/:index', (req, res) => {
    posts[req.params.index] = { title: req.body.title, content: req.body.content };
    res.redirect('/');
});

app.post('/delete/:index', (req, res) => {
    posts.splice(req.params.index, 1);
    res.redirect('/');
});
