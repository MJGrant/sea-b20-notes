var Backbone = require('backbone');
console.log("Something missing? Did you run grunt build:dev?");

var $ = require('jquery'); //new 8.19

var Note = require('./notes/models/note');

var note = new Note();
note.set('noteBody', 'note contents go here');
note.save();

var note2 = new Note();
note2.set('noteBody', 'even more note contents here');
note2.save();

//New: added the note view and notes collection
var BasicNoteView = require('./notes/views/note-view');
var NotesCollection = require('./notes/collections/notes-collection');
var NotesCollectionView = require('./notes/views/notes-collection-view');

//var CarsCollection = require('./notes/collections/cars-collection');

//Removing 8/19 because we don't need any of this now. We're not saving to back end anymore.
/*
console.log(note.get('noteBody'));
console.log(note);

note.save({
  success: function(res) {
    console.log('success!');
    console.log(res);
  },
  error: function(err) {
    console.log("error");
    console.log(err);
  }
});
*/


var notesCollection = new NotesCollection();
var notesCollectionView = new NotesCollectionView({collection: notesCollection});

notesCollection.fetch();
$('#notes').html(notesCollectionView.$el);

/*

//new Car model
var Car = require('./notes/models/car');
var car = new Car();

//Simple test - making a 2002 silver Ford Taurus with license 084 YNS
car.set({
  make:'Ford',
  model: 'Taurus',
  year: '2002',
  color: 'silver',
  license: '084 YNS'
  });

console.log("It's a " + car.get('year') + " " + car.get('color') + " " + car.get('make') + " " + car.get('model') + ".");
console.log(car);

//Give car the ability to save - is this needed?

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

//Make a collection of Car called cars
/* old code
var cars = new Backbone.Collection([], {
  model: Car
});
*/

/*

//new code
var carsCollection = new CarsCollection();
carsCollection.fetch({
  success: function(res) { //it takes a promise
    console.log('success');
    console.log(res);
  },
  error: function(err) {
    console.log('error');
    console.log(err);
  }
});

//When a new car is added to the collection, console.log its properties
carsCollection.on("add", function(car) {
  console.log("A new " + car.get('make') + " car! It's a " + car.get('model') + " and it was made way back in " + car.get('year') + "!");
});

//Add a bunch of cars
carsCollection.add([
  { make: 'Ford', model: 'Prefect', year: '2000', color: 'red'},
  { make: 'Ford', model: 'Taurus', year: '2002', color: 'silver', license: '084 YNS'},
  { make: 'Ford', model: 'Pinto', year: '1980', color: 'blue', junk:'true'},
  { make: 'Delorean', model: 'Time Machine', color: 'stainless steel', year: '1985', license: 'OUTATIME'},
  { make: 'Honda', model: 'Civic', year: '1992', color: 'black', junk:'true'},
]);

//See the cars in the cars collection
console.log("Cars stringified: " + JSON.stringify(carsCollection));

//When a car's make is changed, alert this message
car.on({
  'change:make': console.log("ALERT! A car's make was changed!")
});

//Count the number of junkers
var upgradeableCars = carsCollection.where({junk:"true"});
console.log("Upgradeable junk cars: " + upgradeableCars.length);


//Get the cars collection
carsCollection.fetch({
  success: function(collection) {
    console.log("Cars length: " + collection.length);

    //Iterate through the cars collection
    for (i = 0; i < collection.length; i ++ ) {
      console.log(i);

      //and turn any cars with the junk flag into shiny new Mustangs
      if (collection[i].get('junk') == 'true') {
        collection[i].set({
          model: 'Mustang',
          year:'2014',
          junk:'false'
        });
        console.log("Transmuted another old junker into a shiny new Mustang!");
      }
    }
  }
});

//Count the number of mustangs
var mustangs = carsCollection.where({model:'Mustang'});
console.log("Mustang total: " + mustangs.length);

*/