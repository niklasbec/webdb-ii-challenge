const express = require('express')

const server = express()

const port = 4000;

server.use(express.json())

const carsRouter = require('./cars-router')
server.use('/api/cars', carsRouter)

server.listen(port, () => {
    console.log('\n*** Server Running on http://localhost:4000 ***\n');
  });

server.use('*', (req, res) =>
res.status(404).json({
  status: 404,
  message: 'No endpoint matches that URL.'
}))