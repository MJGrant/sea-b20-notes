var Car = require('../models/car');

module.exports = function(app) {
  var baseUrl = '/api/v_0_0_1/cars';

  app.get(baseUrl, function(req, res){
    Car.find({}, function(err, cars) {
      if (err) return res.status(500).json(err);
      return res.json(cars);
    });
  });

  app.post(baseUrl, function(req, res) {
    var car = new Car(req.body);
    car.save(function(err, resCar) {
      if (err) return res.status(500).json(err);
      return res.send(resCar);
    });
  });

  app.get(baseUrl + '/:id', function(req, res) {
    Car.findOne({'_id': req.params.id}, function(err, car) {
      if (err) return res.status(500).json(err);
      return res.json(car);
    });
  });

  app.put(baseUrl + '/:id', function(req, res) {
    var car = req.body;
    delete car._id;
    Car.findOneAndUpdate({'_id': req.params.id}, car, function(err, resCar) {
      if (err) return res.status(500).json(err);
      return res.status(202).json(resCar);
    });
  });

  app.delete(baseUrl + '/:id', function(req, res) {
    Car.remove({'_id': req.params.id}, function(err, resCar) {
      if (err) return res.status(500).json(err);
      return res.status(200).json({'msg': 'deleted'});
    });
  });
};
