/// <reference types="node" />
import { DataTransformer } from './interfaces';
import { Request } from './request';
import { Response } from './response';
declare class QueryTransformer implements DataTransformer {
    decode(data: Buffer): Request;
    encode(data: Response): string;
}
export { QueryTransformer };
