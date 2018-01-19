import { Request } from './request';
import { Response } from './response';

interface DataTransformer {
  decode(data: Buffer): Request;
  encode(data: Response): string;
}

export { DataTransformer }