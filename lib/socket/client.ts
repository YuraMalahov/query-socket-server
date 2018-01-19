import { ClientInterface } from './interfaces'
import * as net from "net";

class Client implements ClientInterface
{
  private clients = new Array();
  
  public addClient(client: net.Socket): boolean
  {
    if (this.clients.indexOf(client) != -1) {
      return false;
    }
    this.clients.push(client);
    return true;
  }
  
  public removeClient(client: net.Socket): ClientInterface
  {
    this.clients.splice(this.clients.indexOf(client), 1);
    
    return this;
  }
  
  public removeClients(): ClientInterface
  {
    this.clients = new Array();
    
    return this;
  }
  
  public getClients(): Array<net.Socket>
  {
    return this.clients;
  }
  
  public getClientsExceptOne(exceptClient: net.Socket): Array<net.Socket>
  {
    var clients = new Array();
    this.clients.forEach((client: net.Socket) => {
      if (client === exceptClient) {
        return;
      }
      clients.push(client);
    });
    
    return clients;
  }
}

export { Client }
