const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()
// i need multi origin for cors
app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = process.env.CLIENT_URL.split(','); // Assuming CLIENT_URLS is a comma-separated list of allowed origins
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['POST', 'PUT', 'GET', 'DELETE'],
    credentials: true
}))
app.use(cookieParser())
const port = process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dbConnect()
// Serving static files
app.use(express.static("public/images"));
initRoutes(app)

app.listen(port, () => {
    console.log('Server running on the port: ' + port);
})