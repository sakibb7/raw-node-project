/*
 * Title: Handle Request Response
 * Description:
 * Author: Sa Kib
 * Date: 12/18/2023
 */

//dependecies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const { notFoundHandler } = require("./routeHandlers/notfoundHandler");

//module scaffholding
const handler = {};

handler.handleReqRes = (req, res) => {
  //request handling
  //get the url from parsing it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.path;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payload) => {
    (statusCode === typeof statusCode) === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};

    const payloadToString = JSON.stringify(payload);

    //return final response
    res.writeHead(statusCode);
    res.end(payloadToString);
  });

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    console.log(realData);

    res.end("Hello Sakib");
  });

  //response handle
};

module.exports = handler;
