import { uuid , Message } from '../fork'

export default class User {
    private _id: string;
    private _username: string;
    private _name: string;
    private _password: string;
    private _messages: Message[];
    
    constructor(username: string, name: string, password: string) {
        this._id = uuid();
        this._username = username;
        this._name = name;
        this._password = password;
        this._messages = []
    };
    public get messages(): Message[] {
        return this._messages;
    };
    public set messages(value: Message[]) {
        this._messages = value;
    };
    public get password(): string {
        return this._password;
    };
    public set password(value: string) {
        this._password = value;
    };
    public get name(): string {
        return this._name;
    };
    public set name(value: string) {
        this._name = value;
    };
    public get username(): string {
        return this._username;
    };
    public set username(value: string) {
        this._username = value;
    };
    public get id(): string {
        return this._id;
    };
};