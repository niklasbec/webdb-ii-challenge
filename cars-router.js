const express = require('express')
const router = express.Router()
const CarsDB = require('./cars-model')

router.get('/', (req, res) => {
    CarsDB.getAllCars()
        .then(cars => {
            res.status(200).json({
                cars: cars
            })
        })
        .catch(error => {
            res.status(500).json({
                error: 'Server Error'
            })
        })
})

router.post('/', (req, res) => {
    
    newCarData = req.body
    if(typeof(newCarData.VIN) === "string" && typeof(newCarData.make) === "string" && typeof(newCarData.model) === "string" && typeof(newCarData.mileage) === "number") {
        console.log(typeof(newCarData.VIN));
        CarsDB.newCar(newCarData)
        .then(car => {
            res.status(201).json({
                success: 'Car created'
            })
        })
        .catch(error => {
            res.status(500).json({
                error: 'server error'
            })
        })
    } else {
        res.status(400).json({
            error: 'Invalid User Data'
        })
    }
})

module.exports = router