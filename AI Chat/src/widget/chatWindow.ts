import { Component , User , Message , AiBot} from '../fork';

export default class ChatWindow extends Component {
  private _chatContent!: HTMLElement;
  private _inputField!: HTMLInputElement;
  private _sendButton!: HTMLButtonElement;
  private _aiBot: AiBot;
  
  constructor(
    id: string,
    locationLeft: number,
    locationTop: number,
    width: number,
    height: number,
    content: HTMLElement,
    user: User,
    aiBot: AiBot
    ) {
      const shapeAttributes: Partial<CSSStyleDeclaration> = {
        border: "2px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        bottom: "0"
      };
      super(id, { attributes: shapeAttributes }, locationLeft, locationTop, width, height, content, user);
      
      this.setupWindow();
      this._aiBot = aiBot

      this.handleSendMessage = this.handleSendMessage.bind(this);
      this._sendButton.addEventListener('click', this.handleSendMessage);
    }
    public get sendButton(): HTMLButtonElement {
      return this._sendButton;
    }
    public set sendButton(value: HTMLButtonElement) {
      this._sendButton = value;
    }
    public get chatContent(): HTMLElement {
      return this._chatContent;
    }
    public set chatContent(value: HTMLElement) {
      this._chatContent = value;
    }
    public get inputField(): HTMLInputElement {
      return this._inputField;
    }
    public set inputField(value: HTMLInputElement) {
      this._inputField = value;
    }
    
    private setupWindow(): void {
      this._chatContent = document.createElement('div');
      this._chatContent.className = 'chat-content';
      
      this._inputField = document.createElement('input');
      this._inputField.type = 'text';
      this._inputField.placeholder = 'Type your message...';
      this._inputField.id = "msg-inpt";
      
      this._sendButton = document.createElement('button');
      this._sendButton.textContent = 'Send';
      this._sendButton.id = "btn";
      
      
      this.content.appendChild(this._chatContent);
      this.content.appendChild(this._inputField);
      this.content.appendChild(this._sendButton);
    }

    public addMessage(user: User, messageValue: number) {
      const messageElement = document.createElement('div');
      const message = user.messages.find((message) => message.value === messageValue);
      if (message) {
        messageElement.textContent = `${user.name}: ${message.message}`;
        this._chatContent.appendChild(messageElement);

        const randomIndex = Math.floor(Math.random() * this._aiBot.messageList.length);
        const replyMessage = this._aiBot.messageList[randomIndex];

        this._aiBot.usedMessage.push(replyMessage);

        const replyElement = document.createElement('div');
        replyElement.textContent = `AiBot: ${replyMessage}`;
        this._chatContent.appendChild(replyElement);
      }
  
      this._inputField.value = '';
    }
  
    private handleSendMessage(event: Event): void {
      event.preventDefault();
      const userMessage = this._inputField.value;
      if (userMessage === '') {
        return;
      }
  
      if (this.user) {
        const message = new Message(userMessage);
        this.user.messages.push(message);
        this.addMessage(this.user, message.value);
      }
  
      this._inputField.value = '';
    }
  }