import {addMessageToList, getCertainChat} from "./state.js"

//render selected chat into the chatbox
export function showSelectedChat(id){
    const chatBox = document.querySelector(".actual-chat");
    const chatnow = getCertainChat(id);
    // console.log("the problem: ", chatnow);
    chatBox.innerHTML="";
    chatnow.messages.forEach(msg => {
        const messageBlock = document.createElement('div');
        messageBlock.className = "msg";
        messageBlock.innerText = msg.content;
        chatBox.appendChild(messageBlock);
    }); 
};

export function addMessageDiv(id){
    const chatBox = document.querySelector(".actual-chat");
    const promptBox = document.querySelector(".prompt-box");
    if (promptBox.value == ""){
        alert("please type something in the prompt box");
    } else {
        const messageDiv = document.createElement("div");
        messageDiv.className = "msg";
        messageDiv.innerText = promptBox.value;
        chatBox.appendChild(messageDiv);
        addMessageToList(id, messageDiv.innerText);
        promptBox.value="";
    }
};