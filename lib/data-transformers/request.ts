class Request
{
  private attributes = new Object();

  constructor(private method: String, private data: Object)
  {
    
  }
  
  public getMethod(): String
  {
    return this.method;
  }

  public getData(): Object
  {
    return this.data;
  }
  
  public getAttributes(): Object
  {
    return this.attributes;
  }
}

export { Request }
