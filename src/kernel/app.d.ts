/// <reference types="node" />
import { BroadcastInterface, ClientInterface } from '../socket/interfaces';
import * as net from "net";
declare class App {
    private _clientBag;
    private _broadcast;
    constructor(_clientBag: ClientInterface, _broadcast: BroadcastInterface);
    listener(socket: net.Socket): void;
}
export { App };
