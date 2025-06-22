// import {getChats} from "./state.js"

// adding chat block to chat menu
export function addChatBlock(chat){
		const chatList = document.querySelector('.chat-list-container');
		const chatBlock= document.createElement('div');
		chatBlock.className='chat-log';
		chatBlock.id=chat.id;
		chatBlock.innerText= chat.name;
		chatList.appendChild(chatBlock);

};

export function activeChatColor(chat){
	chat.style.backgroundColor = "#000080";
	chat.style.color = "white";
};

export function inactiveChatColor(chat){
	chat.style.backgroundColor = "";
	chat.style.color = "";
};

export function defaultChat(){
	const chat = document.querySelector('.default-chat');
	chat.style.backgroundColor="#000080";
	chat.style.color='white';
};