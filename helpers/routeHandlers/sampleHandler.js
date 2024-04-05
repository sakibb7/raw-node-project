/*
 * Title: Sample Handlers
 * Description:
 * Author: Sa Kib
 * Date: 12/18/2023
 */

//module scaffholding
const handler = {};

handler.sampleHandler = (requestProperties, callBack) => {
  console.log(requestProperties);
  callBack(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
