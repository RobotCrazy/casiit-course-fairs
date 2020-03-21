const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'your_secret_value_here',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy'
}));

app.use(flash());

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/getRequest', (req, res) => {
    res.send("This is the request response");
})

app.listen(3000, () => {
    console.log("Site running on 3000")
})