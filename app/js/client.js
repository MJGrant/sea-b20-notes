console.log("Something missing? Did you run grunt build:dev?");
//SHARED
var Backbone = require('backbone');
var $ = require('jquery'); //new 8.19

//NOTES
var Note = require('./notes/models/note');
var note = new Note();

note.set('noteBody', 'note contents go here');
note.save();

var note2 = new Note();
note2.set('noteBody', 'even more note contents here');
note2.save();

var BasicNoteView = require('./notes/views/note-view');
var NotesCollection = require('./notes/collections/notes-collection');
var NotesCollectionView = require('./notes/views/notes-collection-view');

var notesCollection = new NotesCollection();
var notesCollectionView = new NotesCollectionView({collection: notesCollection});

notesCollection.fetch();
$('#notes').html(notesCollectionView.$el);


//CARS - for homework
//new Car model
var Car = require('./cars/models/car');
var car = new Car();

var BasicCarView = require('./cars/views/car-view');
var CarsCollection = require('./cars/collections/cars-collection');
var CarsCollectionView = require('./cars/views/cars-collection-view');
//Make a collection of Car called cars
var carsCollection = new CarsCollection();
var carsCollectionView = new CarsCollectionView({collection: carsCollection});

//Simple test - making a 2002 silver Ford Taurus with license 084 YNS
car.set({
  make:'Ford',
  model: 'Taurus',
  year: '2002',
  color: 'silver',
  license: '084 YNS',
  status: 'good'
  });

console.log("It's a " + car.get('year') + " " + car.get('color') + " " + car.get('make') + " " + car.get('model') + ".");
console.log(car);

//Give car the ability to save - actually, not sure if this is needed 8/20/14
car.save({
  success: function(res) {
    console.log('success!');
    console.log(res);
  },
  error: function(err) {
    console.log("error");
    console.log(err);
  }
});

//carsCollection.fetch();
//$('#cars').html(carsCollectionView.$el);

//When a new car is added to the collection, console.log its properties
carsCollection.on("add", function(car) {
  console.log("Adding a new " + car.get('make') + " car! It's a " + car.get('model') + " and it was made way back in " + car.get('year') + "!");
});

//Add a bunch of cars so there's some data to play with
carsCollection.add([
  { make: 'Ford', model: 'Prefect', year: '2000', color: 'red', status: 'good'},
  { make: 'Ford', model: 'Taurus', year: '2002', color: 'silver', license: '084 YNS', status: 'good'},
  { make: 'Mercury', model: 'Villager', year: '1989', color: 'blue', status: 'junk'},
  { make: 'School Bus', model: 'Magic', year: '1990', color: 'yellow', status: 'good'},
  { make: 'Delorean', model: 'Time Machine', color: 'stainless steel', year: '1985', license: 'OUTATIME', status: 'missing'},
  { make: 'Honda', model: 'Civic', year: '1992', color: 'black', status: 'junk'},
]);

//See the cars in the cars collection
console.log("Cars stringified: " + JSON.stringify(carsCollection));

//When a car's make is changed, alert this message
car.on({
  'change:make': console.log("ALERT! A car's make was changed!")
});

//Count the number of junkers
var upgradeableCars = carsCollection.where({status:"junk"});
console.log("Upgradeable junk cars: " + upgradeableCars.length);

//Get the cars collection
carsCollection.fetch().done(function() {
  mustangify(carsCollection);
});

var mustangify = function(collection) {
  collection.each(function(car) {
    console.log("Car TEST: " + car);
    if (car.get('status') == 'junk') {
      console.log("Found a junker");
        car.set({
          make: 'Ford',
          model: 'Mustang',
          year: '2014',
          status: 'good'
        });
      console.log("Transmuted another old junker into a shiny new Mustang!");
    }
  });
  var mustangs = carsCollection.where({model:'Mustang'});
  console.log("Mustang total: " + mustangs.length);
};

