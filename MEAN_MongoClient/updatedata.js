var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    var db = client.db('MyDb');

    db.collection('Persons', function (err, collection) {
        collection.update({ firstName: 'Bill' }, { $set: { firstName: 'Shray' } }, { multi: false, upsert: false });
        db.collection('Persons').count(function (err, count) {
            if (err) throw err;
            console.log('Total Rows: ' + count);
        });
        client.close();
    });

});