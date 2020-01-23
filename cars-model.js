const db = require('./data/db-config')

function getAllCars() {
    return db('cars')
}

function newCar({VIN, make, model, mileage}) {
    return db('cars')
        .insert({VIN, make, model, mileage})
}

module.exports = {
    getAllCars,
    newCar
  }