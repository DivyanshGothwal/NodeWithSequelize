const db = require('./SequelizeConnection');
const spMthod = require('./SPMethods');


var callGetAllShipments = function(responseCallback, ScenarioID){
    db.callSpSequelize(spMthod.callSpGetAllShipments,responseCallback,ScenarioID);
}

var callUpdateInboundTrailerETARepo = function(responseCallback, ScenarioID, IBTrailerData){
    //console.log(new Date() +" start");console.log(new Date() +" start");
    db.callSpSequelizeWithRawTedious(spMthod.callUpdateInboundTrailerETA,responseCallback,ScenarioID, IBTrailerData);
}

var callGetRouteDto = function(responseCallback, response){
    db.callSpSequelizeWithRawTedious(spMthod.callGetRouteDto,responseCallback,response);
}

var callAffectedRepo = function(responseCallback, ScenarioID,routeId, scenarioDriverId){console.log(new Date() +" start");
    db.callSpSequelizeWithRawTedious(spMthod.callSpGetAffectedRoutes,responseCallback,ScenarioID,routeId, scenarioDriverId);
}

module.exports.callGetAllShipments = callGetAllShipments;
module.exports.callGetRouteDto = callGetRouteDto;
module.exports.callAffectedRepo = callAffectedRepo;
module.exports.callUpdateInboundTrailerETARepo = callUpdateInboundTrailerETARepo

