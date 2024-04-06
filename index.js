//dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments")
const data = require('./lib/data')

//app object - module scaffolding
const app = {};

//testing file system
// data.create('test','newFile', {'name':'Bangladesh', 'language':'Bangla'}, (err) => {
//   console.log(`error was`, err);
// })

// data.read('test','newFile', (err,result) => {
//   console.log(result, err);
// })

// data.update('test','newFile',{'name': 'England', 'language': 'English'}, (err,result) => {
//   console.log(result, err);
// })

// data.delete('test','newFile', (err) => {
//   console.log(err);
// })

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  server.listen(environment.port, () => {
    console.log(`Listening to port ${environment.port}`);
  });
};

app.handleReqRes = handleReqRes;

app.createServer();
