var express = require('express');
var router = express.Router();
 var fs = require('fs');

router.get('/electronics', function(req, res, next) {
fs.readFile('dbe.json', function (err, data) {
 if (err) 
 {
    console.log("Err");
  }
 else{
  obj = JSON.parse(data);
  console.log(obj);
  return res.json(obj);
  }
});

});

router.get('/clothings', function(req, res, next) {
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

router.post('/electronicsadd', function(req, res, next){
  var entry = {
               'name'      : req.body.name,
                'cost'     : req.body.cost, 
                'costtype' : req.body.costtype,      
                'type'     : req.body.type, 
                'id'       : req.body.id,
  }
fs.readFile('dbe.json', function (err, data) {
 if (err) 
 {
    console.log("Err");
    return res.json({success: 'false'});
  }
 else{
 var obj = JSON.parse(data);
  obj.push(entry);
  console.log(obj);
  fs.writeFile("dbe.json", JSON.stringify(obj), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
return res.json({success: 'true'});
  }
});

});


router.post('/clothingsadd', function(req, res, next){
  var entry = {
               'name'      : req.body.name,
                'cost'     : req.body.cost, 
                'costtype' : req.body.costtype,      
                'type'     : req.body.type, 
                'id'       : req.body.id,
  }
fs.readFile('db.json', function (err, data) {
 if (err) 
 {
    console.log("Err");
    return res.json({success: 'false'});
  }
 else{
 var obj = JSON.parse(data);
  obj.push(entry);
  console.log(obj);
  fs.writeFile("db.json", JSON.stringify(obj), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
return res.json({success: 'true'});
  }
});

});

module.exports = router;
