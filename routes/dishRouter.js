const express = require('express');
const bodyParser = require('body-parser');

//important, make vriable express router
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());


//route '/' implementing all method get put post del
//rather then example post/dishes put/whatever and soon
dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

/**app.use("/users",username);

//username.js
var express = require('express');
var router = express.Router();
router.get('/:name', function(req, res) {
    res.send('user: ' + req.params.name);
});
module.exports = router; */
.get((req,res,next) => {

    res.end('We will send the dish details ' + req.params.dishId + " for you!");
    
})
.post((req, res, next) => {
    res.end('POST operation not supported on ' + req.originalUrl);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Updating '+ req.params.dishId+ '... will update the dish '+ req.body.name + ' with details '+ req.body.descriptions + ' descriptions.');
})
.delete((req, res, next) => {
    res.end('Deleting '+ req.params.dishId);
});



module.exports = dishRouter;