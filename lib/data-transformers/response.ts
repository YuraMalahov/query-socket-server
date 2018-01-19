class Response
{
  private body = new Object();
  
  public addItem(fieldName: string, fieldValue: any)
  {
    this.body[fieldName] = fieldValue;
  }
  
  public getBody(): Object
  {
    return this.body;
  }
}

export { Response }
