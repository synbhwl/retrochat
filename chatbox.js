import {addMessageToList, getCertainChat, addBotMessageToList} from "./state.js"
import { clearhead } from "./chatheader.js";

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

export function clearbox(){
    const chatbox=document.querySelector(".actual-chat");
    chatbox.textContent="";
    clearhead();
};

export async function addMessageDiv(id){
    const chatBox = document.querySelector(".actual-chat");
    const promptBox = document.querySelector(".prompt-box");

    if (promptBox.value ==""){
        alert("please type something in the prompt box");
        return;
    } else {
        const messageDiv = document.createElement("div");
        messageDiv.className = "msg";
        const msg = promptBox.value;
        messageDiv.innerText = promptBox.value;
        chatBox.appendChild(messageDiv);
        addMessageToList(id, messageDiv.innerText);

        const loading = document.createElement('div');
        loading.className = "msg";
        loading.innerText = "Typing...";
        loading.style.color = "#000080";
        loading.id = "true";
        chatBox.append(loading);

        promptBox.value="";

        const persona = document.querySelector('.personality-box').value;
        console.log(msg, persona);

        //here starts the backend madness :(
        // const response = await
        fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({message: msg, persona: persona}) 
        })
        .then(res => res.json())
        .then(data => {
            const loading = document.getElementById('true');
            loading.remove();

            const replyDiv = document.createElement('div');
            replyDiv.className = 'msg';
            const reply = data.reply;
            replyDiv.innerText = reply;
            chatBox.appendChild(replyDiv);
            addBotMessageToList(id, {
                role: "bot",
                content: reply
            });
        });

    } 
};