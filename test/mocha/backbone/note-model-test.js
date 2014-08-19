var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var Note = require('../../../app/js/notes/models/note');

describe('Backbone Note', function() {
  var note;
  before(function(done) {
    this.mock = sinon.mock(Backbone);
    note = new Note();
    done();
  });

  it('Should be a backbone object', function(done) {
    note.set('noteBody', 'a test note');
    expect(note).to.be.ok; //checks that it's an object
    expect(note.get('noteBody')).to.eql('a test note');
    done();
  });

  it('Should talk with the api on save', function(done) {
    //this.mock.expects('sync').withArgs('create');
    //can't do both a sync and an ajax test at the same time
    this.mock.expects('ajax').withArgs(sinon.match({type:"POST", url:'/api/v_0_0_1/notes'}));
    note.save();
    done();
  });

  after(function() {
    this.mock.verify();
  });
});