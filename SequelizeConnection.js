const Sequelize = require('sequelize');


const sequelizeConnection = new Sequelize('yourDBName','YourUserName','YourPassword',{
    host: 'yourServerName',
    dialect:'mssql'
});

function callSpSequelize(callback,responseCallback,...params){
    sequelizeConnection.authenticate()
    .then(async ()=>{
        console.log("connected");
        callback(responseCallback, sequelizeConnection, params);
    })
    .catch((err)=>{
        console.log(err + ' Not connected');
    });
};

function callSpSequelizeWithRawTedious(callback,responseCallback,...params){
    sequelizeConnection.authenticate()
    .then(async ()=>{
        console.log("connected");
        const lock = await sequelizeConnection.connectionManager.getConnection();
        const connection = lock.unwrap();
        connection.config.options.rowCollectionOnRequestCompletion = true;
        connection.config.options.rowCollectionOnDone = true;
        callback(responseCallback, sequelizeConnection,connection, params);
    })
    .catch((err)=>{
        console.log(err + ' Not connected');
    });
};



module.exports.callSpSequelize = callSpSequelize;
module.exports.callSpSequelizeWithRawTedious = callSpSequelizeWithRawTedious;
module.exports.sequelizeConnection = sequelizeConnection;
