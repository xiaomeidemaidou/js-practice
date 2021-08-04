const express = require('express')

const app = express()

app.get('/abc', (req, res) => {
  // res.sendStatus(401) 
  throw('error')
})

app.listen(3000, () => {})
