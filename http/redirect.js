const express = require('express')

const app = express()

app.get('/abc', (req, res) => {
  // res.redirect('/def') // 默认302  curl http://localhost:3000/abc : Found. Redirecting to /def
  res.redirect(302, '/def') //  curl http://localhost:3000/abc : Moved Permanently. Redirecting to /def
})

app.post('/301', (req, res) => { // fetch('/301', {method: 'POST'})
  res.redirect(301, '/def')
})

app.post('/302', (req, res) => { // fetch('/302', {method: 'POST'})
  res.redirect(302, '/def') 
})

app.post('/303', (req, res) => { // fetch('/303', {method: 'POST'})
  res.redirect(303, '/def') 
})

app.post('/307', (req, res) => { // fetch('/307', {method: 'POST'})
  res.redirect(307, '/def') // 307,post请求重定向到post请求
})

app.post('/def', (req, res) => {
  res.send('this is def(POST)')
})

app.get('/def', (req, res) => {
  res.send('this is def(GET)')
})

app.listen(3000, () => {})

// 重定向在爬虫中非常重要，使用301永久重定向