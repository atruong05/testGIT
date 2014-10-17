var express = require('express');
var router = express.Router();

/* GET all datasets. */
router.get('/var/:id', function(req, res){
	var db=req.db;
	db.collection('var').find({name:req.params.id}).toArray(function(err, items){
		res.json(items);
	})
});

router.get('/all', function(req, res){
	var db=req.db;
	db.collection('all').find().toArray(function(err, items){
		res.json(items);
	})
});

router.get('/allsuper', function(req, res){
	var db=req.db;
	db.collection('allsuper').find().toArray(function(err, items){
		res.json(items);
	})
});

router.get('/super/:id', function(req, res){
	var db=req.db;
	db.collection('super').find({name:req.params.id}).toArray(function(err, items){
		res.json(items);
	})
});


//Select One Super & Name from One Source
router.get(('/var/:source/:supers/:name'), function(req, res){
	var db=req.db;
	db.collection('var').find({$and:[{"source":req.params.source}, {"super": req.params.supers}, {"name": req.params.name}]}).toArray(function(err, items){
		res.json(items);
	})
});

//Select two super & name from one source.
//New comment
router.get('/var/:source/:supers1/:name1/:supers2/:name2', function(req, res){
	var db=req.db;
	db.collection('var').find({$or:[
	{"source":req.params.source, "super":req.params.supers1, "name":req.params.name1},
	{"source":req.params.source, "super": req.params.supers2, "name":req.params.name2}]}
	).toArray(function(err, items){
		res.json(items);
	})
});



module.exports = router;




