const express = require("express");

const foodsRouter = require('./foods.js');
const placesRouter = require('./places.js');
const searchRouter = require('./search.js');

const router = express.Router();

router.use('/foods', foodsRouter);
router.use('/places', placesRouter);
router.use('/search', searchRouter);

router.use("/", (req, res) => {
    res.json({
        success: false,
        reason: "please use specific route." 
    });
});

module.exports = router;