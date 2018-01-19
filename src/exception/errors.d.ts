import { ErrorCodes } from '../config/errors';
declare class Exception {
    private message;
    private _code;
    stack: any;
    constructor(message: string, _code: ErrorCodes);
    getCode(): ErrorCodes;
    getMessage(): string;
}
export { Exception };
