const express = require("express");
const placesService = require('../../services/places');
const auth = require('../../middlewares/auth');

const config = require('../../configs/database');

const router = express.Router();

router.get('/around/:place', (req,res) => {

    const place = req.params.place;
    const limit = req.query.limit || 10;
    const startsWith = req.query.startsWith;
    const minPrice = req.query.minPrice || 0;
    const maxPrice = req.query.maxPrice || 100000;

    placesService.getPlacesAround({
        'limit' : limit,
        'startsWith' : startsWith,
        'minPrice' : minPrice,
        'maxPrice' : maxPrice
    }).then(data => {
        res.json({
            success : true,
            results : data
        });
    }).catch(err => {
        res.json({
            success : false,
            reason : err
        });
    })

    res.send('places to eat around'+place);
});

router.get('/around/:place/best', (req,res) => {
    const place = req.params.place;
    const limit = req.query.limit || 10;
    const startsWith = req.query.startsWith;
    const minPrice = req.query.minPrice || 0;
    const maxPrice = req.query.maxPrice || 100000;

    placesService.getBestPlacesAround({
        'limit' : limit,
        'startsWith' : startsWith,
        'minPrice' : minPrice,
        'maxPrice' : maxPrice
    }).then(data => {
        res.json({
            success : true,
            results : data
        });
    }).catch(err => {
        res.json({
            success : false,
            reason : err
        });
    });
});


router.get('/around/:place/:parentFood', (req,res) => {

    const place = req.params.place;
    const limit = req.query.limit || 10;
    const startsWith = req.query.startsWith;
    const parentFood = req.params.parentFood;
    const minPrice = req.query.minPrice || 0;
    const maxPrice = req.query.maxPrice || 100000;

    placesService.getPlacesAroundWithParentFood({
        'place' : place,
        'limit' : limit,
        'startsWith' : startsWith,
        'parentFood' : parentFood,
        'minPrice' : minPrice,
        'maxPrice' : maxPrice
    }).then(data => {
        res.json({
            success : true,
            results : data
        });
    }).catch(err => {
        res.json({
                success : false,
            reason : err
        });
    });
});



router.get('/around/:place/:parentFood/best', (req,res) => {

    const place = req.params.place;
    const limit = req.query.limit || 10;
    const startsWith = req.query.startsWith;
    const parentFood = req.params.parentFood;
    const minPrice = req.query.minPrice || 0;
    const maxPrice = req.query.maxPrice || 100000;

    placesService.getBestPlacesAroundWithParentFood({
        'place' : place,
        'limit' : limit,
        'startsWith' : startsWith,
        'parentFood' : parentFood,
        'minPrice' : minPrice,
        'maxPrice' : maxPrice
    }).then(data => {
        res.json({
            success : true,
            results : data
        });
    }).catch(err => {
        res.json({
            success : false,
            reason : err
        });
    });

});


router.get('/around/:place/:parentFood/:childFood/', (req,res) => {

    const place = req.params.place;
    const limit = req.query.limit || 10;
    const startsWith = req.query.startsWith;
    const parentFood = req.params.parentFood;
    const childFood = req.params.childFood;

    const minPrice = req.query.minPrice || 0;
    const maxPrice = req.query.maxPrice || 100000;

    placesService.getPlacesAroundWithChildFood({
        'place' : place,
        'limit' : limit,
        'startsWith' : startsWith,
        'parentFood' : parentFood,
        'childFood' : childFood,
        'minPrice' : minPrice,
        'maxPrice' : maxPrice
    }).then(data => {
        res.json({
            success : true,
            results : data
        });
    }).catch(err => {
        res.json({
            success : false,
            reason : err
        });
    });

});


router.get('/around/:place/:parentFood/:childFood/best', (req,res) => {

    const place = req.params.place;
    const limit = req.query.limit || 10;
    const startsWith = req.query.startsWith;
    const parentFood = req.params.parentFood;
    const childFood = req.params.childFood;
    const minPrice = req.query.minPrice || 0;
    const maxPrice = req.query.maxPrice || 100000;

    placesService.getBestPlacesAroundWithChildFood({
        'place' : place,
        'limit' : limit,
        'startsWith' : startsWith,
        'parentFood' : parentFood,
        'minPrice' : minPrice,
        'maxPrice' : maxPrice
    }).then(data => {
        res.json({
            success : true,
            results : data
        });
    }).catch(err => {
        res.json({
                success : false,
            reason : err
        });
    });
});

router.get('/near-to', (req,res) => {

    const limit = req.query.limit || 10;
    const lat = req.query.lat;
    const long = req.query.long;

    placesService.getPlacesNearTo({
        'limit' : limit,
        'lat' : lat,
        'long' : long
    }).then(data => {
        res.json({
            success : true,
            results : data
        });
    }).catch(err => {
        res.json({
            success : false,
            reason : err
        });
    });

    res.send('near to '+limit);
});

router.get('/:parentPlace', (req,res) => {
    const parentPlace = req.params.parentPlace;
    const limit = req.query.limit || 10;
    const startsWith = req.query.startsWith;

    placesService.getPlacesByParentPlace({
        'parentPlace' : parentPlace,
        'limit' : limit,
        'startsWith' : startsWith
    }).then(data => {
        res.json({
            success : true,
            results : data
        });
    }).catch(err => {
        res.json({
            success : false,
            reason : err
        });
    });
    
});

router.get('/:parentPlace/:name', (req,res) => {
    const parentPlace = req.params.parentPlace;
    const name = req.params.name;
    const limit = req.query.limit || 10;

    placesService.getPlacesByName({
        'parentPlace' : parentPlace,
        'name' : name,
        'limit' : limit,
        'startsWith' : startsWith
    }).then(data => {
        res.json({
            success : true,
            results : data
        });
    }).catch(err => {
        res.json({
            success : false,
            reason : err
        });
    });

});

router.get('/:parentPlace/:name/menu', (req,res) => {
    const parentPlace = req.params.parentPlace;
    const name = req.params.name;
    const limit = req.query.limit || 10;

    placesService.getPlacesByName({
        'parentPlace' : parentPlace,
        'name' : name,
        'limit' : limit,
        'startsWith' : startsWith
    }).then(data => {
        res.json({
            success : true,
            results : data.menu
        });
    }).catch(err => {
        res.json({
            success : false,
            reason : err
        });
    });
});

router.get('/:parentPlace/:name/reviews', (req,res) => {
    const parentPlace = req.params.parentPlace;
    const name = req.params.name;
    const limit = req.query.limit || 10;

    placesService.getPlacesByName({
        'parentPlace' : parentPlace,
        'name' : name,
        'limit' : limit,
        'startsWith' : startsWith
    }).then(data => {
        res.json({
            success : true,
            results : data.reviews
        });
    }).catch(err => {
        res.json({
            success : false,
            reason : err
        });
    });
});

router.get('/', (req, res) => {
    let limit = req.query.limit;
    placesService.retrieveAllPlaces(limit)
        .then((data) => {
            res.send({
                success : true,
                no_of_results : data.length,
                data : data
            }).end();
        })
        .catch(err => res.json({
            sucess: false,
            reason: "some error has occurred."+err
        }));
});

module.exports = router;