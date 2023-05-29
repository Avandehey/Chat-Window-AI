import { Component } from '../fork';

export default class SignForm extends Component {
    private _nameInput!: HTMLInputElement;
    private _usernameInput!: HTMLInputElement;
    private _passwordInput!: HTMLInputElement;
    private _signInButton!: HTMLButtonElement;
  
    constructor(
        id: string,
        locationLeft: number,
        locationTop: number,
        width: number,
        height: number,
        content: HTMLElement
        ) {
        const shapeAttributes: Partial<CSSStyleDeclaration> = {
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        };
        super(id, { attributes: shapeAttributes }, locationLeft, locationTop, width, height, content);

        this.setupForm();
    }
    private setupForm(): void {

        this._nameInput = document.createElement("input");
        this._nameInput.type = "text"
        this._nameInput.placeholder = "Name";
        this._nameInput.id = "Name";

        this._usernameInput = document.createElement("input");
        this._usernameInput.type = "text";
        this._usernameInput.placeholder = "Username";
        this._usernameInput.id = "username"
     
        this._passwordInput = document.createElement("input");
        this._passwordInput.type = "password";
        this._passwordInput.placeholder = "Password";
        this._passwordInput.id = "password";
    
        this._signInButton = document.createElement("button");
        this._signInButton.textContent = "Sign In";
        this._signInButton.id = "sign-btn";
    
        this.content.appendChild(this._nameInput);
        this.content.appendChild(this._usernameInput);
        this.content.appendChild(this._passwordInput);
        this.content.appendChild(this._signInButton);
      }
}