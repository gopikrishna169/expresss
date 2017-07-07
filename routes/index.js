var express = require('express');
var router = express.Router();
 var fs = require('fs');

router.get('/electronics', function(req, res, next) {

//var obj = fs.readFileSync('db.json', 'utf-8');
//var x= JSON.parse(obj)
//console.log(x);
//res.json(obj);

fs.readFile('db.json', function (err, data) {
 if (err) 
 {
    console.log("Err");
  }
 else{
  obj = JSON.parse(data);
  console.log(obj);
  res.json(obj);
  }
});

});






module.exports = router;
