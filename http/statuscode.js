const express = require('express')

const app = express()

app.get('/greetings', (req, res) => {
  res.send('hi!')
})

app.post('/product', (req, res) => {
  const contentType = req.headers['content-type']
  // req.on('data', (buffer) => {
  //   // buffer 8bit-byte 当buffer过大时，数据会分批传输过来
  //   console.log(buffer.toString('utf-8').length)
  //   // fetch('/product',{ method: 'POST', headers: {'content-type': 'application/json' }, body: JSON.stringify({name: ''.padStart(10000,'A')})})
  // })

  let requestText = ''
  let body = null
  req.on('data', (buffer) => {
    requestText += buffer.toString('utf-8')
    // buffer 8bit-byte 当buffer过大时，数据会分批传输过来
    // console.log(buffer.toString('utf-8').length)
    // fetch('/product',{ method: 'POST', headers: {'content-type': 'application/json' }, body: JSON.stringify({name: ''.padStart(10000,'A')})})
  })

  req.on('end', () => {
    // 此时数据全部传输过来了
    // console.log(requestText.length)
    switch (contentType) {
      case 'application/json':
        body = JSON.parse(requestText)
        res.set('content-type', 'application/json') // fetch('/product',{ method: 'POST'}).then(res=>console.log(res.headers.get('content-type')))
        res.status(201).send(JSON.stringify({status: 'success'}))
        break
    }
  })
})
// fetch('/product',{ method: 'POST', headers: {'content-type': 'application/json' }, body: JSON.stringify({name: 'bbb'})})

app.put('/product/:id', (req, res) => {
  console.log(req.params.id)
  res.sendStatus(204)
})
//fetch('/product/123',{method: 'PUT'})

app.delete('/product/:id', (req, res) => {
  console.log(req.params.id)
  res.sendStatus(204)
})
//fetch('/product/123',{method: 'DELETE'})

app.listen(3000, () => {})