const express = require('express');
const app = express();
const port = 3000;
const todoRoutes = require('./routes/todo.js');

app.use(express.json());
app.use('/todos', todoRoutes);

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
   res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
 });
app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}/`);
});