const mysql = require('mysql');

const myslqConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company'
});

myslqConnection.connect(function (err) {
    if (err){
        console.log(err);
        return;
    }else{
        console.log('Conexion exitosa');
     }
});

module.exports = myslqConnection;