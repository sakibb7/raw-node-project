/*
 * Title: Routes
 * Description:
 * Author: Sa Kib
 * Date: 12/18/2023
 */

const { sampleHandler } = require("./helpers/routeHandlers/sampleHandler");

//module sca
const routes = {
  sample: sampleHandler,
};

module.exports = routes;
