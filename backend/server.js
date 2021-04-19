import express from 'express'
import data from './data.js'

const app = express()

app.get('/', (req, res) => {
  console.log('On server')
})

app.get('/api/assets', (req, res) => {
  res.send(data.assets)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server at http://localhost:${port}`))
