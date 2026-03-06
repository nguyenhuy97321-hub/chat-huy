const socket = io();

let username = "";

function join(){
    username = document.getElementById("username").value;

    if(username === ""){
        alert("Nhập tên trước");
        return;
    }

    document.getElementById("chat").style.display="block";
}

function sendMessage(){

    const input = document.getElementById("messageInput");
    const text = input.value;

    socket.emit("sendMessage", {
        user: username,
        text: text
    });

    input.value="";
}

socket.on("receiveMessage",(data)=>{

    const messages = document.getElementById("messages");

    const p = document.createElement("p");

    p.textContent = data.user + " : " + data.text;

    messages.appendChild(p);

});