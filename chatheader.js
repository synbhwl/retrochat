
//matching the chat name with the chat header 
export function chatheader(name){
	const header = document.querySelector('.chatwindow-head-name');
	header.innerText = name;
};

export function clearhead(){
	const header = document.querySelector('.chatwindow-head-name');
	header.innerText = "Let's talk ...";
}