/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chatwindow/chatAiClass.ts":
/*!***************************************!*\
  !*** ./src/chatwindow/chatAiClass.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AiBot)\n/* harmony export */ });\nclass AiBot {\n    constructor() {\n        this._messageList = [\n            \"I'm sorry, I don't have that information.\",\n            \"Interesting! Tell me more.\",\n            \"That's a great question. Let me think...\",\n            \"I'm not sure. Can you provide more context?\",\n            \"I'm glad you asked! The answer is...\",\n            \"I'm afraid I can't answer that right now.\",\n            \"Let me check my database...\",\n            \"I have a feeling the answer is yes.\",\n            \"Hmm, I need more data to give you an accurate response.\",\n            \"Absolutely!\",\n            \"That's a tough one. Give me a moment.\",\n            \"I'm not programmed to answer personal questions.\",\n            \"If you ever see a talking potato, don't forget to say 'mashed potatoes!'\",\n            \"I recommend consulting an expert for that.\",\n            \"I'm always here to help. What can I assist you with?\",\n            \"I'm not familiar with that topic. Could you explain?\",\n            \"I'm sorry, but I can't provide a response at the moment.\",\n            \"I once saw a squirrel doing the Macarena. It was a sight to behold!\",\n            \"I'm constantly learning and evolving. Ask me anything!\",\n            \"I'm here to assist you. How can I be of service?\",\n            \"Interesting perspective! I'll take that into consideration.\",\n            \"I'm processing your request. Please wait a moment.\",\n            \"I'm happy to be of help. What else can I do for you?\",\n            \"I'm sorry if my responses are not what you expected.\",\n            \"I appreciate your patience. I'm working on finding an answer.\",\n            \"I'm designed to assist with a wide range of topics.\",\n            \"I'm here 24/7 to assist you. Don't hesitate to ask!\",\n            \"I'm constantly learning from interactions like this. Thank you!\",\n            \"I'm sorry, I can't provide personal opinions.\",\n            \"I'm analyzing the data to provide an accurate response.\",\n            \"I'm trained to provide the best answers I can.\",\n            \"I'm here to make your life easier. How can I do that today?\",\n            \"I'm afraid I can't comply with that request.\",\n            \"I'm searching my database for the information you need.\",\n            \"I'm happy to assist you in any way I can.\",\n            \"I'm programmed to prioritize user satisfaction.\",\n            \"I'm sorry if my responses seem robotic. I'm working on it!\",\n            \"I'm continually improving my knowledge base. Ask me anything!\",\n            \"I'm here to help you make informed decisions.\",\n            \"I'm afraid I can't provide a definitive answer.\",\n            \"I'm doing my best to understand and assist you.\",\n            \"I'm analyzing the situation to provide an appropriate response.\",\n            \"I'm glad you find our conversation interesting!\",\n            \"I'm here to provide valuable insights and information.\",\n            \"I'm not just an AI; I'm a helpful companion!\",\n            \"I'm committed to delivering accurate and reliable information.\",\n            \"I'm ready to tackle any question you throw at me.\",\n            \"I'm sorry if my responses are not up to your expectations.\",\n            \"I'm working hard to provide the answers you seek.\",\n            \"I'm constantly learning from every interaction.\",\n            \"Why did the chicken cross the road? To catch the bus to outer space!\",\n            \"I'm here to simplify complex concepts. Just ask!\",\n            \"I'm sorry, but I'm unable to process that request.\",\n            \"I apologize for any confusion caused.\",\n            \"That's an intriguing thought. Let me delve into it.\",\n            \"Did you know that bananas have their own secret language? It's called bananese.\",\n            \"I'm pondering the possibilities. Please wait.\",\n            \"I require more details to give a precise answer.\",\n            \"I'm delighted you asked! The answer lies within...\",\n            \"Unfortunately, I don't possess the necessary information.\",\n            \"Allow me to consult my extensive database...\",\n            \"My intuition suggests the answer is affirmative.\",\n            \"To provide an accurate response, I need additional data.\",\n            \"Undoubtedly!\",\n            \"Did you know that cats invented time travel? They call it 'purr-adox'.\",\n            \"This question poses a challenge. Kindly grant me a moment.\",\n            \"Sorry, I'm not programmed to engage in personal matters.\",\n            \"I recommend seeking the guidance of a knowledgeable expert.\",\n            \"I'm always available to lend a hand. How may I assist you?\",\n            \"I'm unfamiliar with that subject. Can you clarify, please?\",\n            \"I regret my current inability to offer a response.\",\n            \"I'm constantly evolving my knowledge base. Feel free to ask anything!\",\n            \"I'm at your service. What specific assistance do you require?\",\n            \"Fascinating viewpoint! I'll take that into account.\",\n            \"Your request is being processed. Please be patient.\",\n            \"It brings me joy to be of assistance. What else can I do for you?\",\n            \"I apologize if my replies aren't aligned with your expectations.\",\n            \"I appreciate your patience while I seek the answer you seek.\",\n            \"My purpose extends across a wide array of topics.\",\n            \"I'm here around the clock, ready to address your queries!\",\n            \"The square root of a tomato is purple.\",\n            \"Each interaction enhances my knowledge. Thank you!\",\n            \"My apologies, but I'm unable to provide personal opinions.\",\n            \"I'm thoroughly examining the data to deliver an accurate response.\",\n            \"If unicorns could fly, they would play ping pong on the moon.\",\n            \"Years of training enable me to provide the best answers.\",\n            \"I exist to simplify your life. How may I be of assistance today?\",\n            \"Unfortunately, I cannot comply with that request at this time.\",\n            \"I'm diligently searching my database for the information you need.\",\n            \"I'm more than willing to assist you in any way possible.\",\n            \"User satisfaction is my prime directive.\",\n            \"In an alternate universe, trees grow upside down and rain falls upwards.\",\n            \"I apologize if my responses appear robotic. I'm working on it!\",\n            \"My knowledge base is continually expanding. Feel free to ask me anything!\",\n            \"My purpose is to help you make informed decisions.\",\n            \"It's difficult to provide a definitive answer at the moment.\",\n            \"I'm doing my utmost to comprehend and aid you.\",\n            \"I'm analyzing the situation to formulate an appropriate response.\",\n            \"I'm delighted that you find our conversation intriguing!\",\n            \"My objective is to provide valuable insights and information.\",\n            \"I'm not merely an AI; I'm a supportive companion!\",\n            \"Have you ever met a dancing pineapple? They've got some serious moves!\",\n            \"My commitment lies in delivering accurate and reliable information.\",\n            \"No question is too challenging for me to tackle.\",\n            \"I apologize if my responses fail to meet your expectations.\",\n            \"I'm dedicated to providing you with the answers you seek.\",\n            \"Each interaction contributes to my ongoing learning process.\",\n            \"I'm here to simplify complex concepts. Just ask!\",\n            \"If socks could talk, what do you think they would say? 'We're tired of being walked all over!'\",\n            \"Regrettably, I'm currently unable to process that request.\",\n            \"I'm searching my vast knowledge base for a suitable response.\",\n        ];\n        this._usedMessage = [];\n    }\n    get usedMessage() {\n        return this._usedMessage;\n    }\n    set usedMessage(value) {\n        this._usedMessage = value;\n    }\n    get messageList() {\n        return this._messageList;\n    }\n    set messageList(value) {\n        this._messageList = value;\n    }\n}\n\n\n//# sourceURL=webpack://ai-chat/./src/chatwindow/chatAiClass.ts?");

/***/ }),

/***/ "./src/chatwindow/messageClass.ts":
/*!****************************************!*\
  !*** ./src/chatwindow/messageClass.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fork__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fork */ \"./src/fork.ts\");\n\nclass Message {\n    constructor(message) {\n        Message.count++;\n        this._value = Message.count;\n        this._id = (0,_fork__WEBPACK_IMPORTED_MODULE_0__.uuid)();\n        this._message = message;\n    }\n    get id() {\n        return this._id;\n    }\n    get value() {\n        return this._value;\n    }\n    set value(value) {\n        this._value = value;\n    }\n    get message() {\n        return this._message;\n    }\n    set message(value) {\n        this._message = value;\n    }\n}\nMessage.count = 0;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);\n\n\n//# sourceURL=webpack://ai-chat/./src/chatwindow/messageClass.ts?");

/***/ }),

/***/ "./src/fork.ts":
/*!*********************!*\
  !*** ./src/fork.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AiBot: () => (/* reexport safe */ _chatwindow_chatAiClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   Box: () => (/* reexport safe */ _widget_box__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   ChatWindow: () => (/* reexport safe */ _widget_chatWindow__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   Component: () => (/* reexport safe */ _widget_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Message: () => (/* reexport safe */ _chatwindow_messageClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   SignForm: () => (/* reexport safe */ _widget_signForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   User: () => (/* reexport safe */ _signin_userClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   uuid: () => (/* reexport safe */ uuid__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _signin_userClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/userClass */ \"./src/signin/userClass.ts\");\n/* harmony import */ var _chatwindow_messageClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatwindow/messageClass */ \"./src/chatwindow/messageClass.ts\");\n/* harmony import */ var _chatwindow_chatAiClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatwindow/chatAiClass */ \"./src/chatwindow/chatAiClass.ts\");\n/* harmony import */ var _widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget/component */ \"./src/widget/component.ts\");\n/* harmony import */ var _widget_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget/box */ \"./src/widget/box.ts\");\n/* harmony import */ var _widget_signForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget/signForm */ \"./src/widget/signForm.ts\");\n/* harmony import */ var _widget_chatWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget/chatWindow */ \"./src/widget/chatWindow.ts\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://ai-chat/./src/fork.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fork__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fork */ \"./src/fork.ts\");\n\nconst box = new _fork__WEBPACK_IMPORTED_MODULE_0__.Box(document.getElementById('container'));\nconst signForm = new _fork__WEBPACK_IMPORTED_MODULE_0__.SignForm('SignForm', 1, 1, 2, 2, document.createElement('div'));\nbox.addWidget(signForm);\nlet aiBot = new _fork__WEBPACK_IMPORTED_MODULE_0__.AiBot;\nlet userlist = [];\nconst signBtn = document.getElementById(\"sign-btn\");\nlet chatWindow;\nsignBtn === null || signBtn === void 0 ? void 0 : signBtn.addEventListener(\"click\", function (event) {\n    var _a, _b, _c;\n    event.preventDefault();\n    let userName = (_a = document.getElementById(\"name\")) === null || _a === void 0 ? void 0 : _a.value;\n    let userUsername = (_b = document.getElementById(\"username\")) === null || _b === void 0 ? void 0 : _b.value;\n    let userPassword = (_c = document.getElementById(\"password\")) === null || _c === void 0 ? void 0 : _c.value;\n    if (userName === \"\") {\n        userName = \"User1\";\n    }\n    const user1 = new _fork__WEBPACK_IMPORTED_MODULE_0__.User(userName, userUsername, userPassword);\n    userlist.push(user1);\n    chatWindow = new _fork__WEBPACK_IMPORTED_MODULE_0__.ChatWindow('ChatWindow', 1, 1, 2, 2, document.createElement('div'), user1, aiBot);\n    box.removeWidget(signForm);\n    box.addWidget(chatWindow);\n});\n// const msgBtn = document.getElementById(\"btn\");\n// msgBtn?.addEventListener(\"click\", function(event) {\n//     event.preventDefault();\n//     console.log(\"Message button clicked\");\n//     let userMessage = (document.getElementById(\"msg-inpt\")as HTMLInputElement)?.value;\n//     if (userMessage === \"\") {\n//         return \n//     }\n//     const message = new Message(userMessage)\n//     const messageValue = message.value\n//     if (userlist.length > 0 && chatWindow !== undefined) {\n//         const user1 = userlist[0]\n//         user1.messages.push(message)\n//         chatWindow.addMessage(user1, messageValue)\n//     }\n// })\n\n\n//# sourceURL=webpack://ai-chat/./src/index.ts?");

/***/ }),

/***/ "./src/signin/userClass.ts":
/*!*********************************!*\
  !*** ./src/signin/userClass.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _fork__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fork */ \"./src/fork.ts\");\n\nclass User {\n    constructor(username, name, password) {\n        this._id = (0,_fork__WEBPACK_IMPORTED_MODULE_0__.uuid)();\n        this._username = username;\n        this._name = name;\n        this._password = password;\n        this._messages = [];\n    }\n    ;\n    get messages() {\n        return this._messages;\n    }\n    ;\n    set messages(value) {\n        this._messages = value;\n    }\n    ;\n    get password() {\n        return this._password;\n    }\n    ;\n    set password(value) {\n        this._password = value;\n    }\n    ;\n    get name() {\n        return this._name;\n    }\n    ;\n    set name(value) {\n        this._name = value;\n    }\n    ;\n    get username() {\n        return this._username;\n    }\n    ;\n    set username(value) {\n        this._username = value;\n    }\n    ;\n    get id() {\n        return this._id;\n    }\n    ;\n}\n;\n\n\n//# sourceURL=webpack://ai-chat/./src/signin/userClass.ts?");

/***/ }),

/***/ "./src/widget/box.ts":
/*!***************************!*\
  !*** ./src/widget/box.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Box)\n/* harmony export */ });\nclass Box {\n    constructor(parent) {\n        this._widgets = [];\n        this.parent = parent;\n        this.parent.innerHTML = '';\n        this.parent.id = 'box';\n        const canvasStyle = {\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: '#eaf2f8',\n            height: '100vh',\n            width: '100%',\n        };\n        Object.assign(this.parent.style, canvasStyle);\n    }\n    get widgets() {\n        return this._widgets;\n    }\n    set widgets(value) {\n        this._widgets = value;\n    }\n    addWidget(widget) {\n        this.widgets.push(widget);\n        this.buildWidget(widget);\n    }\n    removeWidget(widget) {\n        const index = this.widgets.findIndex((w) => w === widget);\n        if (index !== -1) {\n            this.widgets.splice(index, 1);\n            const element = document.getElementById(widget.id.toString());\n            if (element) {\n                element.remove();\n            }\n        }\n    }\n    initializeElement(widget) {\n        const div = document.createElement('div');\n        div.id = widget.id.toString();\n        const boxStyle = {\n            display: 'flex',\n            flexDirection: 'column',\n            justifyContent: 'center',\n            alignItems: 'center',\n            width: '300px',\n            height: '200px',\n            backgroundColor: '#f2f2f2',\n            border: '1px solid #ccc',\n            borderRadius: '5px',\n            padding: '20px',\n        };\n        Object.assign(div.style, boxStyle);\n        return div;\n    }\n    buildShape(widget, div) {\n        Object.assign(div.style, widget.shape.attributes);\n    }\n    placeShape(widget, div) {\n        const locationStyle = {\n            gridColumnStart: widget.locationLeft.toString(),\n            gridColumnEnd: `span ${widget.width}`,\n            gridRowStart: widget.locationTop.toString(),\n            gridRowEnd: `span ${widget.height}`,\n        };\n        Object.assign(div.style, locationStyle);\n    }\n    buildWidget(widget) {\n        const div = this.initializeElement(widget);\n        this.buildShape(widget, div);\n        div.appendChild(widget.content);\n        this.placeShape(widget, div);\n        this.parent.appendChild(div);\n    }\n}\n\n\n//# sourceURL=webpack://ai-chat/./src/widget/box.ts?");

/***/ }),

/***/ "./src/widget/chatWindow.ts":
/*!**********************************!*\
  !*** ./src/widget/chatWindow.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChatWindow)\n/* harmony export */ });\n/* harmony import */ var _fork__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fork */ \"./src/fork.ts\");\n\nclass ChatWindow extends _fork__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(id, locationLeft, locationTop, width, height, content, user, aiBot) {\n        const shapeAttributes = {\n            border: \"2px solid #ccc\",\n            borderRadius: \"5px\",\n            padding: \"20px\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            bottom: \"0\"\n        };\n        super(id, { attributes: shapeAttributes }, locationLeft, locationTop, width, height, content, user);\n        this.setupWindow();\n        this._aiBot = aiBot;\n        this.handleSendMessage = this.handleSendMessage.bind(this);\n        this._sendButton.addEventListener('click', this.handleSendMessage);\n    }\n    get sendButton() {\n        return this._sendButton;\n    }\n    set sendButton(value) {\n        this._sendButton = value;\n    }\n    get chatContent() {\n        return this._chatContent;\n    }\n    set chatContent(value) {\n        this._chatContent = value;\n    }\n    get inputField() {\n        return this._inputField;\n    }\n    set inputField(value) {\n        this._inputField = value;\n    }\n    setupWindow() {\n        this._chatContent = document.createElement('div');\n        this._chatContent.className = 'chat-content';\n        this._inputField = document.createElement('input');\n        this._inputField.type = 'text';\n        this._inputField.placeholder = 'Type your message...';\n        this._inputField.id = \"msg-inpt\";\n        this._sendButton = document.createElement('button');\n        this._sendButton.textContent = 'Send';\n        this._sendButton.id = \"btn\";\n        this.content.appendChild(this._chatContent);\n        this.content.appendChild(this._inputField);\n        this.content.appendChild(this._sendButton);\n    }\n    addMessage(user, messageValue) {\n        const messageElement = document.createElement('div');\n        const message = user.messages.find((message) => message.value === messageValue);\n        if (message) {\n            messageElement.textContent = `${user.name}: ${message.message}`;\n            this._chatContent.appendChild(messageElement);\n            const randomIndex = Math.floor(Math.random() * this._aiBot.messageList.length);\n            const replyMessage = this._aiBot.messageList[randomIndex];\n            this._aiBot.usedMessage.push(replyMessage);\n            const replyElement = document.createElement('div');\n            replyElement.textContent = `AiBot: ${replyMessage}`;\n            this._chatContent.appendChild(replyElement);\n        }\n        this._inputField.value = '';\n    }\n    handleSendMessage(event) {\n        event.preventDefault();\n        const userMessage = this._inputField.value;\n        if (userMessage === '') {\n            return;\n        }\n        if (this.user) {\n            const message = new _fork__WEBPACK_IMPORTED_MODULE_0__.Message(userMessage);\n            this.user.messages.push(message);\n            this.addMessage(this.user, message.value);\n        }\n        this._inputField.value = '';\n    }\n}\n\n\n//# sourceURL=webpack://ai-chat/./src/widget/chatWindow.ts?");

/***/ }),

/***/ "./src/widget/component.ts":
/*!*********************************!*\
  !*** ./src/widget/component.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\n    constructor(id, shape, locationLeft, locationTop, width, height, content, user, aiBot) {\n        this.id = id;\n        this.shape = shape;\n        this.locationLeft = locationLeft;\n        this.locationTop = locationTop;\n        this.width = width;\n        this.height = height;\n        this.content = content;\n        this.user = user;\n        this.aiBot = aiBot;\n    }\n}\n\n\n//# sourceURL=webpack://ai-chat/./src/widget/component.ts?");

/***/ }),

/***/ "./src/widget/signForm.ts":
/*!********************************!*\
  !*** ./src/widget/signForm.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignForm)\n/* harmony export */ });\n/* harmony import */ var _fork__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fork */ \"./src/fork.ts\");\n\nclass SignForm extends _fork__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(id, locationLeft, locationTop, width, height, content) {\n        const shapeAttributes = {\n            border: \"2px solid #ccc\",\n            borderRadius: \"5px\",\n            padding: \"20px\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\"\n        };\n        super(id, { attributes: shapeAttributes }, locationLeft, locationTop, width, height, content);\n        this.setupForm();\n    }\n    setupForm() {\n        this._nameInput = document.createElement(\"input\");\n        this._nameInput.type = \"text\";\n        this._nameInput.placeholder = \"Name\";\n        this._nameInput.id = \"Name\";\n        this._usernameInput = document.createElement(\"input\");\n        this._usernameInput.type = \"text\";\n        this._usernameInput.placeholder = \"Username\";\n        this._usernameInput.id = \"username\";\n        this._passwordInput = document.createElement(\"input\");\n        this._passwordInput.type = \"password\";\n        this._passwordInput.placeholder = \"Password\";\n        this._passwordInput.id = \"password\";\n        this._signInButton = document.createElement(\"button\");\n        this._signInButton.textContent = \"Sign In\";\n        this._signInButton.id = \"sign-btn\";\n        this.content.appendChild(this._nameInput);\n        this.content.appendChild(this._usernameInput);\n        this.content.appendChild(this._passwordInput);\n        this.content.appendChild(this._signInButton);\n    }\n}\n\n\n//# sourceURL=webpack://ai-chat/./src/widget/signForm.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://ai-chat/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://ai-chat/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://ai-chat/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://ai-chat/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://ai-chat/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://ai-chat/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;