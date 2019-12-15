const express = require('express');
const bodyParser = require('body-parser');

//important, make vriable express router
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());


//route '/' implementing all method get put post del
//rather then example post/dishes put/whatever and soon 
leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('We have Leader for you');
})
.post((req, res, next) => {
    res.end('Will add the new leader: ' + req.body.name + ' with details: ' + req.body.descriptions);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leader');
})
.delete((req, res, next) => {
    res.end('Deleting all leader');
});

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
   res.end('We will send the leader details '+ req.params.leaderId + ' for you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.descriptions);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on '+ req.params.leaderId);
})
.delete((req, res, next) => {
    res.end('Deleting all ' + req.params.leaderId);
});



module.exports = leaderRouter;