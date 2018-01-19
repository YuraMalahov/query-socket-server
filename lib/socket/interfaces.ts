interface ClientInterface
{
  addClient(client: object): boolean;
  
  removeClient(client: object): ClientInterface;

  removeClients(): ClientInterface;
  
  getClients(): Array<object>;
  
  getClientsExceptOne(exceptClient: object): Array<object>;
}
 
interface BroadcastInterface
{
  send(data: string, sender: object);
}


export { ClientInterface, BroadcastInterface }