// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidV1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
let userTotal = []
wss.on('connection', (ws) => {
  console.log('Client connected');

  const updateUsers = () => {
    let userInfo = userTotal.length + 1
    userTotal.push(userInfo)
    wss.clients.forEach((c) => {
      console.log("adding " + userTotal);

      c.send(JSON.stringify(userTotal));
    });
  }

  const removeUsers = () => {
    console.log(userTotal);
    userTotal.pop()
    wss.clients.forEach((c) => {
      console.log("removing " + userTotal);

      c.send(JSON.stringify(userTotal));
    });
  }

  updateUsers()

  const broadcast = (message) => {
    wss.clients.forEach((c) => {
      console.log(message);
      if (message.type == "postNotification") {
        c.send(JSON.stringify(message));
      } else if (c != ws) {
        newID = uuidV1();
        message.id = newID
        message.type = "incommingMessage"
        c.send(JSON.stringify(message));
      }
    });
  }

  ws.on('message',(data) => {
    let allData = JSON.parse(data)
    console.log("got data");
    broadcast(allData)
  });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
     console.log('Client disconnected')


     removeUsers()
   });
});
