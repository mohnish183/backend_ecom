const Ecomdata = require("./routingController");
const routes = require("express").Router();
routes.get("/ecom", Ecomdata);

module.exports = routes;
