const express = require('express');
const routes = express.Router();

//CONTROLLERS
const ResourcesController = require('./controllers/ResourcesController');


routes.get('/', (req, res) => {
    return res.json({ hello: 'World' });
});

//ROUTES
routes.get('/resources/phonesType', ResourcesController.getPhonesType);
routes.get('/resources/servicesType', ResourcesController.getServicesType);


module.exports = routes;