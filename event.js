import {getChats, getCertainChat, addChat, addMessage} from './state.js'
import {addChatBlock, activeChatColor, inactiveChatColor, defaultChat} from "./chatmenu.js"
import {chatheader} from "./chatheader.js"

// variables initialisation 
let active = document.querySelector('.default-chat');

// event listners 
// click new button 
const newbtn = document.querySelector('.new');
newbtn.addEventListener("click", clickNew);


// event listener functions 
// fires when the new button is clicked
function clickNew(){
	const newChatName = askname();
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

function changeColorOfChatBlock(){

	const chatList = document.querySelector('.chat-list-container');
	chatList.addEventListener('click', (e)=>{
		const chatBlock = e.target.closest('.chat-log');
		if (active && active != chatBlock){
			inactiveChatColor(active);
		};
		activeChatColor(active);
		active = chatBlock;
	});
}

// helper functions 
function askname(){
	return prompt('Please enter name for new chat');
}

// function calls
matchChatName();
defaultChat();
changeColorOfChatBlock();