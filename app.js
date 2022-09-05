const express =  require('express')
const { registrationsRouter } = require('./Routes/route.js')

const app = express()

app.use(express.json())

app.use('/', registrationsRouter);

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exits server`
    });
});


module.exports = { app }

