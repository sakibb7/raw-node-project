/*
 * Title: Not found Handlers
 * Description:
 * Author: Sa Kib
 * Date: 12/18/2023
 */

//module scaffholding
const handler = {};

handler.notFoundHandler = (requestProperties, callBack) => {
  console.log(requestProperties);
  callBack(404, {
    message: "This is a not found url",
  });
};

module.exports = handler;
