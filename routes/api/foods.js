const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const foodService = require('../../services/foods');
const config = require('../../configs/database');
const auth = require('../../middlewares/auth');

mongoose.connect(config.database);

router.get('/fasting', (req, res) => {
    foodService.retrieveFastingFoods(req).then(data => {
        res.send({
            success: true,
            data: data
        });
    }).catch(errorReason => {
        res.json({
            sucess: false,
            reason: errorReason
        });
    });
});

router.get('/non-fasting', (req, res) => {
    foodService.retrieveNonFastingFoods(req).then(data => {
        res.send({
            success: true,
            data: data
        });
    }).catch(errorReason => {
        res.json({
            sucess: false,
            reason: errorReason
        });
    });
});

router.get('/:parentFood/ingridients', (req, res) => {
    foodService.retrieveParentFood(req).then(data => {
        res.send(data.ingridients);
    }).catch(err => {
        res.send({
            sucess: false
        });
    });
});

router.get('/', (req, res) => {
    let limit = req.query.limit;
    foodService.retrieveAllFoods(limit)
        .then((data) => {
            res.send({
                success : true,
                no_of_results : data.length,
                data : data
            }).end();
        })
        .catch(err => res.json({
            sucess: false,
            reason: "some error has occurred."
        }));
});


module.exports = router;