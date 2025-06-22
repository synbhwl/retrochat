
// default chat list
let chats = [
	{
		id:0,
		name:"Meaning of life",
		messages: [
		{
			role:"bot",
			content:"Hey, what's up?"
		}, {
			role:"user",
			content: "What's the meaning of life? Does it lie in seeking happiness, or is there a deeper purpose we are meant to find?"
		}
		]
	},
	{
		id:1,
		name:"Barely Dev server",
		messages: [
		{
			role:"bot",
			content:"Hey, what's up?"
		}, {
			role:"user",
			content: "So, what does the barely dev server do on discord?"
		}
		]
	}
];

let nextChatId = 2;

// exporting the chat 
export function getChats(){
	return chats;
};

// accessing a certain chat element from the chat list 
export function getCertainChat(id){
	return chats.find(chat=> chat.id = id);
}

// adding chat to the list 
export function addChat(name){
	const newChatInList = {
		id: nextChatId++,
		name: name,
		messages: [
		{
			role:"bot",
			content: "Hey, what's up?"
		}
		]
	};
	chats.push(newChatInList);
	return newChatInList;
};

// adding a new message in the certain chat 
export function addMessage(chatid, message){
	const chat = getCertainChat(chatid);
	if (chat) chat.messages.push(message);
};


