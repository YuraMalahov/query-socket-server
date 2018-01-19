/// <reference types="node" />
import { BroadcastInterface, ClientInterface } from './interfaces';
import * as net from "net";
declare class Broadcast implements BroadcastInterface {
    private _client;
    constructor(_client: ClientInterface);
    send(data: string, sender: net.Socket): void;
}
export { Broadcast };
