const express = require('express'),
     http = require('http');
//add 
const dishRouter = require('./routes/dishRouter'); 
const promoRouter = require('./routes/promoRouter');  
const leaderRouter = require('./routes/leaderRouter');  

 //morgan for static public files acces,
 //body-parser to access post and parse in json 
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
// serve static file, dev for development
//did not work because you always forget to put "/public" NOT'public'REMEMBER
app.use(morgan('dev'));
app.use(express.static(__dirname +'/public'));
app.use(bodyParser.json());

//important
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leader', leaderRouter);

/*app.use((req, res, next) => {
  //console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});*/

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});