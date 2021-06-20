const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const { auth } = require('./middlewares/auth')
// settings
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// middlewares
app.use('/api', auth)
// routes
app.use(require('./routes/index'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

// listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})