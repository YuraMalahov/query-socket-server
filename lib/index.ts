import * as net from "net";
import * as os from "os";

import { bottle } from "./kernel/container";

var app = (<any> bottle.container).App;

const server = net.createServer((socket: net.Socket) => {
  app.listener(socket);  
})

let networkInterfaces = os.networkInterfaces();

var address = Object.keys(networkInterfaces)
  .map(propName => networkInterfaces[propName].filter(x => x.family === 'IPv4' && !x.internal)[0])
  .filter(x => x)[0].address;

server.listen(
		{
			"host": address,
			"port": 9005,
			"exclusive": true
		},
		() => {
			console.log('opened server on', server.address());
		}
);