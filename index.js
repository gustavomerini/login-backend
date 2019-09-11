const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

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
