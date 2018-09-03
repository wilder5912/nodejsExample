var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tienda2'
});

con.connect(function (err) {
    if(err){
        throw err;
    }
    console.log('ohhhh');

    con.query('SELECT * FROM business', function (err, result, field) {
        if(err) throw err;
        console.log(result);
    });
});
