import { BroadcastInterface, ClientInterface } from './interfaces';
import { TYPES } from '../config/types';
import * as net from "net";

class Broadcast implements BroadcastInterface
{
  public constructor(private _client: ClientInterface) 
  {
    
  }
  
  send(data: string, sender: net.Socket)
  {
    this._client.getClientsExceptOne(sender).forEach(
      (client: net.Socket) => {
        client.write(data);
      }
    );
    
    process.stdout.write(data);
  } 
}

export { Broadcast }