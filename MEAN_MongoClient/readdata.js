var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    var db = client.db('MyDb');

    db.collection('Persons', function (err, collection) {

        collection.find({}).toArray(function (err, items) {
            if (err) throw err;
            console.log(items);
        });
        client.close();
    });

});