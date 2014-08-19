var Backbone = require('backbone');
console.log("Something missing? Did you run grunt build:dev?");

var Note = require('./notes/models/note');
var note = new Note();
note.set('noteBody', 'wow such note, so words');

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

//Give car the ability to save

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
var cars = new Backbone.Collection([], {
  model: Car
});

//When a new car is added to the collection, console.log its properties
cars.on("add", function(car) {
  console.log("A new " + car.get('make') + " car! It's a " + car.get('model') + " and it was made way back in " + car.get('year') + "!");
});

//Add a bunch of cars
cars.add([
  { make: 'Ford', model: 'Prefect', year: '2000', color: 'red'},
  { make: 'Ford', model: 'Taurus', year: '2002', color: 'silver', license: '084 YNS'},
  { make: 'Ford', model: 'Pinto', year: '1980', color: 'blue', junk:'true'},
  { make: 'Delorean', model: 'Time Machine', color: 'stainless steel', year: '1985', license: 'OUTATIME'},
  { make: 'Honda', model: 'Civic', year: '1992', color: 'black', junk:'true'},
]);

//See the cars in the cars collection
console.log("Cars stringified: " + JSON.stringify(cars));

//When a car's make is changed, alert this message
car.on({
  'change:make': console.log("ALERT! A car's make was changed!")
});

//Count the number of junkers
var upgradeableCars = cars.where({junk:"true"});
console.log("Upgradeable junk cars: " + upgradeableCars.length);

//Get the cars collection
cars.fetch({
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
var mustangs = cars.where({model:'Mustang'});
console.log("Mustang total: " + mustangs.length);
