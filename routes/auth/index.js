const express = require("express");

const loginRouter = require('./login');
const registerRouter = require('./register');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);

router.use("/", (req, res) => {
    res.json({
        success: false,
        reason: "please use specific route."
    });
});

module.exports = router;