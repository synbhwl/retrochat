import {getChats, getCertainChat, addChat, addMessageToList} from './state.js'
import {addChatBlock, activeChatColor, inactiveChatColor, defaultChat} from "./chatmenu.js"
import {chatheader} from "./chatheader.js"
import {showSelectedChat, addMessageDiv, clearbox} from "./chatbox.js"

// variables initialisation 
let active = document.querySelector(".default-chat");

// event listners 
// click new button 
const newbtn = document.querySelector('.new');
newbtn.addEventListener("click", clickNew);

const clear = document.querySelector('.clear');
clear.addEventListener("click", clearbox);

// event listener functions 
// fires when the new button is clicked

// version 2 of this to see if a bug persists
function clickNew(){
	const newChatName = askname();
	if (!newChatName || newChatName==="" || newChatName===null){
		return;
	};
	const chat = addChat(newChatName); 
	addChatBlock(chat);
};

// matches the name of the selected block with the heading of the chat
function matchChatName(){
	const chatList = document.querySelector('.chat-list-container');
	chatList.addEventListener("click", (e)=> {
		const chatBlock = e.target.closest('.chat-log');
		chatBlock.name = chatBlock.textContent;
		chatheader(chatBlock.name);
	});	
};

// changes the color of the active chats to navy
function changeColorOfChatBlock(){
	const chatList = document.querySelector('.chat-list-container');
	chatList.addEventListener('click', (e)=>{
		const chatBlock = e.target.closest('.chat-log');
		if (active && active != chatBlock){
			inactiveChatColor(active);
		};
		activeChatColor(chatBlock);
		active = chatBlock;
	});
}

// renders the selected chat on the chat box
function renderChat(){
	const chatList = document.querySelector('.chat-list-container');
	chatList.addEventListener("click", (e)=>{
		const chatBlock = e.target.closest(".chat-log");
		showSelectedChat(chatBlock.id);
		// console.log("the id: ", chatBlock.id);
		// console.log("the div: ", chatBlock);
	});
};

// take the message from the prompt box and put it into message box
function sendMessage(){
	const sendbtn = document.querySelector('.send');
	sendbtn.addEventListener("click", ()=> addMessageDiv(active.id));
};

// helper functions 
function askname(){
	return prompt('Please enter name for new chat');
}

// function calls
matchChatName();
defaultChat();
changeColorOfChatBlock();
renderChat();
sendMessage();