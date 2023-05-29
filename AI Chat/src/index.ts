import { Box , SignForm , User , ChatWindow , AiBot } from './fork'

const box = new Box(document.getElementById('container')!);

const signForm = new SignForm('SignForm', 1, 1, 2, 2, document.createElement('div'));

box.addWidget(signForm);

let aiBot = new AiBot

let userlist:User[] = []

const signBtn = document.getElementById("sign-btn");

let chatWindow: ChatWindow | undefined;

signBtn?.addEventListener("click", function(event) {
    event.preventDefault();
    let userName = (document.getElementById("name") as HTMLInputElement)?.value;
    let userUsername = (document.getElementById("username") as HTMLInputElement)?.value;
    let userPassword = (document.getElementById("password") as HTMLInputElement)?.value;
    if (userName === "") {
        userName = "User1"
    }
    const user1 = new User(userName, userUsername, userPassword);
    userlist.push(user1)
    chatWindow = new ChatWindow('ChatWindow', 1, 1, 2, 2, document.createElement('div'), user1 , aiBot);

    box.removeWidget(signForm)
    box.addWidget(chatWindow)

  });

// const msgBtn = document.getElementById("btn");

// msgBtn?.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("Message button clicked");
//     let userMessage = (document.getElementById("msg-inpt")as HTMLInputElement)?.value;
//     if (userMessage === "") {
//         return 
//     }
//     const message = new Message(userMessage)
//     const messageValue = message.value
//     if (userlist.length > 0 && chatWindow !== undefined) {
//         const user1 = userlist[0]
//         user1.messages.push(message)

//         chatWindow.addMessage(user1, messageValue)
//     }

// })