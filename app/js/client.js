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

var Car = require('./notes/models/car');
var car = new Car();
car.set('make','Ford');
car.set('model','Taurus');
car.set('year','2002');
car.set('color','silver');

console.log("It's a " + car.get('year') + " " + car.get('color') + " " + car.get('make') + " " + car.get('model') + ".");
console.log(car);
console.log("Something missing? Did you run grunt build:dev?");

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

