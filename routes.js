/*
 * Title: Routes
 * Description:
 * Author: Sa Kib
 * Date: 12/18/2023
 */

const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");
const { userHandler } = require("./handlers/routeHandlers/userHandler");

//module sca
const routes = {
  sample: sampleHandler,
  user:userHandler,
};

module.exports = routes;
