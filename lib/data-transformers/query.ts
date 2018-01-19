import { DataTransformer } from './interfaces';
import { Request } from './request';
import { Response } from './response';
import { ErrorCodes } from "../config/errors";
import { Exception } from "../exception/errors";

class QueryTransformer implements DataTransformer {
	public decode(data: Buffer): Request
	{
    if (data.length < 1) {
      throw new Exception("Invalid input params", ErrorCodes.INPUT_PARAMS);
    }
    let query = data.toString("ascii").trim();
    var args = query.split("&");
    if (args.length < 1) {
      throw new Exception("Invalid query format: '" + query.toString() + "'", ErrorCodes.QUERY_FORMAT);
    }
    
    var params = new Object();
    var method = new String();
    args.forEach(function (arg: string) {
      let [ paramName, paramValue ] = arg.split("=");
      
      if (paramName === "method") {
        method = new String(paramValue);
        return;
      }
      
      if (!paramName.endsWith("[]")) {
        params[paramName] = paramValue;
        return;
      }
      
      paramName = paramName.slice(0, -2);
      if (!params.hasOwnProperty(paramName)) {
        params[paramName] = new Array();
      }
      params[paramName].push(paramValue);      
    });
    
    if (method.length < 1) {
      throw new Exception("Empty method is not allowed", ErrorCodes.EMPTY_METHOD);
    }
    
		return new Request(method, params);
	}
  
	public encode(data: Response): string
	{
		return data.getBody().toString();
	}
}

export { QueryTransformer }