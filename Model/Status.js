const Sequelize = require('sequelize');
const sequelizeConnection = require('../SequelizeConnection').sequelizeConnection;

var status = sequelizeConnection.define('status',{
    StatusCode:{
        type: Sequelize.STRING
    },
    ErrorCode:{
        type: Sequelize.STRING
    },
    AppMessage:{
        type: Sequelize.STRING
    },
    SQLErrorCode:{
        type: Sequelize.STRING
    },
    SQLErrorMessage:{
        type: Sequelize.STRING
    }
})
module.exports.statusModal = status