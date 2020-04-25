const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');
connectDB();

const app = express();
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

const transactions = require('./routes/transactions');
app.use('/api/transactions', transactions);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../et-client/bluid'))
    app.get('*', (req, resp)=> resp.sendFile(path.resolve(__dirname, '../et-client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));