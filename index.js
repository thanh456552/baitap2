const { writeFile } = require('fs');
const http = require('http');
const os = require('os');
// const Logger = require('./logger');
// const logger = new Logger();

const hostname = '127.0.0.1';
const port = 3000;


var information = {
  OSType: os.type(),
  Platform: os.platform(),
  RAM: os.totalmem(),
  USEDRAM: os.totalmem() - os.freemem(),
  CPU: os.cpus()
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(information, null, 2));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

writeFile('D:\NodeJs\\index.txt', JSON.stringify(information, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  
  // logger.log('print computer\'s infos');
  console.log('Completed task!');
});
