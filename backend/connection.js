var mysql = require('promise-mysql');

var configDB = {
    connectionLimit: 10000,
    port: 3306,
    host: process.env.HOST,
    user: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE
}

var getConnection = async()=>{
    var pool = mysql.createPool(configDB);
    return new Promise(async (resolve,reject) => {
        var pool = await mysql.createPool(configDB);
        pool.getConnection().then(function(conn){
            if(conn){
                console.log("Connected to DB!!");  
               resolve(conn);
            }
        }).catch(function(err){
            reject(err);
            console.log("in error...")
            console.log(err);
        });
    });
}

module.exports.getConnection = getConnection;