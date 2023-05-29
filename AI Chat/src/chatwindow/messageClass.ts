import { uuid } from '../fork'

export default class Message {
    private static count: number = 0;
    private _value: number;
    private readonly _id: string;
    private _message: string; 
    
    constructor(message: string) {
      Message.count++
      this._value = Message.count;
      this._id = uuid();
      this._message = message
    }
    public get id(): string {
      return this._id;
    }
    public get value(): number {
      return this._value;
    }
    public set value(value: number) {
      this._value = value;
    }
    public get message(): string {
      return this._message;
    }
    public set message(value: string) {
      this._message = value;
    }
  }