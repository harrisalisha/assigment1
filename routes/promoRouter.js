const express = require('express');
const bodyParser = require('body-parser');

//important, make variable express router
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());


//route '/' implementing all method get put post del
//rather then example post/dishes put/whatever and soon
promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {

    res.send('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add Promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
   res.end('We will send the promo details '+ req.params.promoId + ' for you!');
})
.post((req, res, next) => {
    res.end('Will add Promo: ' + req.body.name + ' with details: ' + req.body.descriptions);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on '+ req.params.promoId);
})
.delete((req, res, next) => {
    res.end('Deleting all ' + req.params.promoId);
});

/**var router = express.Router();
router.route('/api/v1/user')
  .get(); // define handler for multiple resources here.

router.route('/api/v1/user/:user_id')
  .get(); // define handler for single resource here.

app.use('/', router); */

module.exports = promoRouter;