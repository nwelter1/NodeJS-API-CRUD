const express = require('express');

// Body Parser Import
const bodyparser = require('body-parser');

const app = express();

require('dotenv').config()

// Express Middleware

app.use(bodyparser.urlencoded({ extended: false })) // Adding support for form values
app.use(bodyparser.json({ extended: false })) // Adding support for JSON values
app.use(bodyparser.raw({ extended: false })) // Adding Support for raw text values

// Import for ALL API Routes : TODO
const patientRoute = require('./routes/patients');
const userRoute = require('./routes/users');


// Using Route imports as Middleware : TODO
app.use('/',patientRoute);
app.use('/users',userRoute);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is up at port ${port}`))