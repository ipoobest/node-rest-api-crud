const Person = require('../models/person.model');

//เป็นการเขียน function test เพื่อทดสอบว่าเราเรียกผ่าน url ได้รึเปล่า
exports.test =  (req, res) => {
    res.send('Hello from  the Test controller!');
};

//CREATE
exports.person_create =  (req, res) => {
    let person = new Person(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age
        }
    );

    person.save(err => {
        if (err) {
            return next(err);
        }
        res.send('Person Created successfully')
    })
};

//READ
//READ ALL
exports.read = (req, res) => {
    Person.find( (err, person) => {
      if (err) {
        return next(err);
      }
      res.send(person);
    });
  };
//READ BY ID
exports.person_details = (req, res) => {
    Person.findById(req.params.id, (err, person) => {
        if (err) return next(err);
        res.send(person);
    })
};

//UPDATE
exports.person_update = (req, res) => {
    Person.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, person) => {
        if (err) return next(err);
        res.send('person udpated.');
    });
};

//DELETE
exports.person_delete = (req, res) => {
    Person.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


