const express = require("express");
const auth = require('../../middlewares/auth');

const searchService = require('../../services/search');

const router = express.Router();

router.get('/', (req, res) => {
    const query = req.query.q;
    const option = req.query.option;
    const limit = req.query.limit;

    // const type = req.query.type || 'all';
    // const location = req.query.location;
    // const minPrice = req.query.minPrice || 0;
    // const maxPrice = req.query.maxPrice || 100000;
    // const sortBy = req.query.sortBy;
    // const sort = req.query.sort || 'ASC';

    if (!query)
        res.json({
            success: false,
            reason: 'no query string provided'
        });
    else if (query && !option)
        res.json({
            success: false,
            reason: 'no searching option provided'
        });
    else if (query && option) {
        if (['food', 'place'].indexOf(option) == -1)
            res.json({
                success: false,
                reason: `the provided option ('${ option }') is not a valid search option.`
            });
        else {
            let resultPromise = option === 'food' ? searchService.searchFood(query, limit) : searchService.searchPlace(query, limit);

            resultPromise.then(data => {
                if (!data.length)
                    throw `${ query }" doesn't match any ${ option }`
                res.json({
                    success: true,
                    no_of_results: data.length,
                    data: data
                });
            }).catch(err => {
                res.json({
                    success: false,
                    reason: "" + err
                });
            });


        }

    }

});

module.exports = router;