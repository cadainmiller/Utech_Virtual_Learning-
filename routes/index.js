var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/lab1', function (req, res, next) {
  res.render('pages/lab1', { title: 'Express' });
});

router.get('/lab1_result', function (req, res, next) {
  res.render('pages/lab1_result', { title: 'Express' });
});


router.get('/lab2', function (req, res, next) {
  res.render('pages/lab2', { title: 'Express' });
});

router.get('/lab3', function (req, res, next) {
  res.render('pages/lab3', { title: 'Express' });
});


router.post('/cal_lab1', urlencodedParser, function (req, res, next) {
  var r1 = parseFloat(req.body.r1);
  var r2 = parseFloat(req.body.r2);
  var r3 = parseFloat(req.body.r3);

  var e1 = parseFloat(req.body.e1);
  var e2 = parseFloat(req.body.e2);

  var rtotal_1 = 0;
  var itotal_1 = 0;
  var rtotal_2 = 0;
  var itotal_2 = 0;
  var Ia, IaM = 0;
  var Ib, IbM = 0;
  var I3, I3M = 0;

  rtotal_1 = ((r3 * r2) / (r3 + r2)) + r1;

  itotal_1 = e1 / rtotal_1;

  Ia = itotal_1 * (r2 / (r2 + r3));
  IaM = (Ia * 1000).toFixed(4);
  console.log('-----------------------------');
  console.log('R1: ' + r1);
  console.log('R2: ' + r2);
  console.log('R3: ' + r3);
  console.log('-----------------------------');
  console.log('R Total: ' + rtotal_1);
  console.log('I Total: ' + itotal_1);
  console.log('IA: ' + Ia);
  console.log('Ia(mA): ' + IaM);
  console.log('-----------------------------');


  rtotal_2 = ((r1 * r3) / (r1 + r3)) + r2;

  itotal_2 = e2 / rtotal_2;

  Ib = itotal_2 * (r1 / (r1 + r3));
  IbM = (Ib * 1000).toFixed(4);

  I3 = Ia + Ib;
  I3M = (I3 * 1000).toFixed(4);

  console.log('-----------------------------');
  console.log('R Total: ' + rtotal_2);
  console.log('I Total: ' + itotal_2);
  console.log('Ib: ' + Ib);
  console.log('Ib(mA): ' + IbM);
  console.log('-----------------------------');
  console.log('I3: ' + I3);
  console.log('I3(mA): ' + I3M);


  res.render("pages/lab1_result", {
    IaM: IaM,
    IbM: IbM,
    I3M: I3M,
    e1: e1,
    e2: e2
  });

});

module.exports = router;
