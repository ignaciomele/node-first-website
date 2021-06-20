const express = require('express')
const router = express.Router()
let { changeAuth } = require('../middlewares/auth')

router.get('/', (req, res) => {
    return res.status(302).redirect('/api/home')
})

router.get('/signin', (req, res) => {
    return res.render('signIn.html')
})

router.post('/signin', (req, res) => {
    console.log(req.body)
    const { password } = req.body
    if (password === 'mySecretKey') {
        changeAuth(true)
        return res.status(302).redirect('/api/home')
    }
    return res.status(403).redirect('/signin')
})

router.get('/api/signout', (req, res) => {
    changeAuth(false)
    return res.status(403).redirect('/signin')
})
router.get('/api/home', (req, res) => {
    return res.render('index.html', { title: 'first Nacho website' })
})

router.get('/api/about', (req, res) => {
    return res.render('about.html', { title: 'first Nacho website' })
})

router.get('/api/contact', (req, res) => {
    return res.render('contact.html', { title: 'first Nacho website' })
})

module.exports = router