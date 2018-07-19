const Sequelize = require('sequelize');
const sequelizeConnection = require('../SequelizeConnection').sequelizeConnection;
// const sequelizeConnection = new Sequelize('RouteMax_NewPenn_Cleansed','routemaxapp','optym123',{
//     host: 'is-gnv-rmaxdb01',
//     dialect:'mssql'
// });


var ShipmentDto = sequelizeConnection.define('ShipmentDto',{
    ShipmentETA:{
        type: Sequelize.INTEGER, 
        allowNull: true
    },
    Trap:{
        type: Sequelize.STRING,
        allowNull : true
    },
    EqpmtPref:{
        type: Sequelize.STRING,
        allowNull : true
    },
    Weight:{
        type: Sequelize.DOUBLE,
        allowNull : true
    },
    ShipmentID:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    RouteID:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    RouteStopID:{
        type: Sequelize.INTEGER,
        allowNull : false
    },
    RouteStopLocationID:{
        type: Sequelize.INTEGER,
        allowNull : false
    },
    RouteName:{
        type: Sequelize.STRING,
        allowNull : true
    },
    ProID:{
        type: Sequelize.STRING,
        allowNull : false
    },
    StopSequence:{
        type: Sequelize.INTEGER,
        allowNull : false
    },
    ConsigneeName:{
        type: Sequelize.STRING,
        allowNull : true
    },
    ConsigneeAddress:{
        type: Sequelize.STRING,
        allowNull : true
    },
    ConsigneeID:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    PSE:{
        type: Sequelize.INTEGER
    },
    ShipmentEtaDateTime:{
        type: Sequelize.DATE,
        allowNull : false
    },
    ServiceLevel:{
        type: Sequelize.STRING,
        allowNull : true
    },
    Appointment:{
        type: Sequelize.STRING,
        allowNull : true
    },
    Pieces:{
        type: Sequelize.INTEGER
    },
    HandlingUnitType:{
        type: Sequelize.STRING,
        allowNull : true
    },
    DeliveryWindow:{
        type: Sequelize.STRING,
        allowNull : true
    },
    SpecialNeeds:{
        type: Sequelize.STRING,
        allowNull : true
    },
    Status:{
        type: Sequelize.STRING,
        allowNull : true
    },
    LiftGate:{
        type: Sequelize.STRING,
        allowNull : true
    },
    Cube:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    IsHot:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    Shipper:{
        type: Sequelize.STRING,
        allowNull : true
    },
    ShipperAddress:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    TotalBills:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    FixedHandlingTime:{
        type: Sequelize.STRING,
        allowNull : true
    },
    VariableHandlingTime:{
        type: Sequelize.STRING,
        allowNull : true
    },
    Comments:{
        type: Sequelize.STRING,
        allowNull : true
    },
    LocationID:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    Location:{
        type: Sequelize.STRING,
        allowNull : true
    },
    City:{
        type: Sequelize.STRING,
        allowNull : true
    },
    State:{
        type: Sequelize.STRING,
        allowNull : true
    },
    Zip:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    Zone:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    DueDate:{
        type: Sequelize.DATE,
        allowNull : true
    },
    Area:{
        type: Sequelize.STRING,
        allowNull : true
    },
    RegionId:{
        type: Sequelize.STRING,
        allowNull : true
    },
    CorrectedCube:{
        type: Sequelize.INTEGER,
        allowNull : true
    },
    Latitude:{
        type: Sequelize.DOUBLE,
        allowNull : true
    },
    Longitude:{
        type: Sequelize.DOUBLE,
        allowNull : true
    },
    TrailerNumber:{
        type: Sequelize.STRING,
        allowNull : true
    },
    ManifestNumber:{
        type: Sequelize.STRING,
        allowNull : true
    }
})
module.exports.ShipmentDto = ShipmentDto

