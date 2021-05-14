const { response } = require('express')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("<h1>It is s nice to meet you all!</h1>")
})

app.get('/this/guy', (req, res) => {
    res.send("<h1>indeed</h1>")
})

app.get('/this/:name', (req, res) => {
    res.send('<h3>Hey there ' + req.params.name + '</h3>')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server started on port ${port}`))