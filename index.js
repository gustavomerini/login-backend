const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const rateLimit = require('express-rate-limit')

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Xiru veio ta tentando hackear, foi bloqueado biri biri'
})

//  apply to all requests
app.use(limiter)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static('public'))

// @TODO add auth middleware
// @TODO add registration page
// @TODO add logout route
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', require('./routes/index'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App listening on port ${port}`))
