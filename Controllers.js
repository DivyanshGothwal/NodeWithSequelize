const express = require('express');
const bodyParser =require("body-parser");
const services = require('./Service');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/GetAllShipments', function(req, res) {
    let ScenarioID = req.query.scenarioID;

    services.callGetAllShipments(func, ScenarioID);
    function func(response)
    {
        response.shift();
        res.send(response);
    }
});

app.post('/UpdateInboundTrailerETA', function(req, res) {
    let IBTrailerData = req.body.IBTrailersData;
    let scenarioID = req.body.ScenarioId;
    services.callUpdateInboundTrailerETARepo(func, scenarioID, IBTrailerData);
    function func(response)
    {
        res.send(response);
    }
});


app.post('/GetAffectedRouteRouteDto', function(req, res) {
    let ScenarioID = req.body.ScenarioId;
    let routeId = req.body.RouteIds;
    let scenarioDriverId = req.body.ScenarioDriverId;
    services.callAffectedRepo(func, ScenarioID, routeId, scenarioDriverId);
    
    function func(response)
    {
        services.callGetRouteDto((resp)=>{res.send(resp)},response);
    }
});


let port = 6000;
app.listen(port, () => console.log('Example app listening on port '+port));