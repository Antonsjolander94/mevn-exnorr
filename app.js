const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
dotenv.config();

// Initialize the app
const app = express();

// Middlewares
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
// Handle production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + '/public/'))

    app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')))
}

// Seting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);

// Bring in the Database Config and connect with the database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    user: process.env.MONGODB_USER, // IMPORTANT TO HAVE IT HERE AND NOT IN CONNECTION STRING
    pass: process.env.MONGODB_PASS, // IMPORTANT TO HAVE IT HERE AND NOT IN CONNECTION STRING
    dbName: process.env.MONGODB_DBNAME, // IMPORTANT TO HAVE IT HERE AND NOT IN CONNECTION STRING
}).then(() => {
    console.log(`Database connected successfully ${process.env.MONGODB_URI}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

// app.get('/', (req, res) => {
//     return res.send("<h1>Hello World</h1>");
// });


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public/index.html'));
}

// Bring in the Persons route
const persons = require('./routes/api/persons');
app.use('/api/persons', persons);

const users = require('./routes/api/users');
app.use('/api/users', users);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})