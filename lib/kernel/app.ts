import { BroadcastInterface, ClientInterface } from '../socket/interfaces';
import { QueryTransformer } from '../data-transformers/query';
import { Exception } from '../exception/errors';
import { RequestHandler } from "./handler";
import * as net from "net";

class App
{
  public constructor(private _clientBag: ClientInterface, private _broadcast: BroadcastInterface, private _requestHandler: RequestHandler) 
  {
    
  }
  
  public listener(socket: net.Socket)
  {
    this._clientBag.addClient(socket);
  
    // Send a nice welcome message and announce
    socket.write("Welcome " + socket.remoteAddress + " " + socket.remotePort +"\n");
    this._broadcast.send(socket.remoteAddress + " joined the chat\n", socket);
    
    // Handle incoming messages from clients.
    socket.on('data', (data: Buffer) => {
      this._broadcast.send(socket.remoteAddress + "> " + data, socket);
      this._requestHandler.handle(data, (exception, response) => {
        if (exception) {
          if(exception instanceof Exception) {
            socket.write(exception.getCode().toString());
          }
          console.error(exception);
          return;
        }

        socket.write(response.toString());
        socket.write("\n\r");
      });
    });
    
    // Remove the client from the list when it leaves
    socket.on('end', () => {
      this._clientBag.removeClient(socket);
      this._broadcast.send(socket.remoteAddress + " left the chat.\n", socket);
    });
    
    socket.pipe(socket);
  }
}

export { App }