var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    var db = client.db('MyDb');

    db.collection('Persons', function (err, collection) {
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        db.collection('Persons').count(function (err, count) {
            if (err) throw err;
            console.log('Total Rows: ' + count);
        });
        client.close();
    });
});