// import {get}

// color changing
let active = null;
function changeTouchedChatColor(){
	const chatList = document.querySelector('.chat-list-container');
	chatList.addEventListener('click', (e)=>{
		const selectedChat = e.target.closest('.chat-log');

		if (active && active !== selectedChat){
			active.style.backgroundColor ='';
			active.style.color ="";
		};

		selectedChat.style.backgroundColor = '#000080';
		selectedChat.style.color ="white";
		active = selectedChat; 
	});
};

function defaultChat(){
	const dchat = document.querySelector('.default-chat');
	dchat.style.backgroundColor="#000080";
	dchat.style.color='white';
	active=dchat;
};

defaultChat();
changeTouchedChatColor();

window.chatcontextid = 0;
function clickChat(){
	const chatList = document.querySelector('.chat-list-container');
	chatList.addEventListener("click", (e)=>{
		const currentchat = e.target.closest('.chat-log');
		const currentChatInList = chats[currentchat.id];
		const chatBox = document.querySelector('.actual-chat');
		const messages = currentChatInList.messages;
		chatBox.innerHTML='';
		messages.forEach(msg=>{
			const message = document.createElement('div');
			message.innerText= msg.content;
			message.className="user";
			chatBox.appendChild(message);
		}); 
		chatcontextid=currentchat.id;
		console.log(chatcontextid);
	});
};

clickChat();

function sendmsg(){
	const promptbox = document.querySelector('.prompt-box');
	const sendbtn = document.querySelector('.send');
	const chatBox = document.querySelector('.actual-chat');
	const allchat = Array.from(document.querySelectorAll('.chat-log'));


	sendbtn.addEventListener('click', ()=>{
		if (promptbox.value == ''){
			alert('Please type something');
		} else {
			const message = promptbox.value;
			const msgBlock = document.createElement('div');
			msgBlock.innerText = message;
			msgBlock.className = 'user';
			chatBox.appendChild(msgBlock);

			if (promptbox.value.trim() != "" && chats[chatcontextid].name == "untitled chat"){
				const words = promptbox.value.trim().split(/\s+/);
				let result = [];
				for (let i=0; i<3; i++){
					result.push(words[i]);
				};
				const newname = result.join(" ");
				chats[chatcontextid].name = newname;

				const reqdiv = allchat.find(x=>x.id == chatcontextid);
				reqdiv.innerText=newname;
			};

			

			promptbox.value = "";

			const msgInList = {
				role: "user",
				content: message
			};

			const chatInList = chats.find(chat=> chat.id == chatcontextid);
			chatInList.messages.push(msgInList);
			console.log(chatInList);
		};
	});
};
sendmsg()
