// Sends the input field and chat box.
const form = document.querySelector(".typing-area"),
incoming_id = form.querySelector(".incoming_id").value,
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

// Sets the onsubmit event.
form.onsubmit = (e)=>{
    e.preventDefault();
}

// Set focus on the input field.
inputField.focus();
inputField.onkeyup = ()=>{
    if(inputField.value != ""){
        sendBtn.classList.add("active");
    }else{
        sendBtn.classList.remove("active");
    }
}

// Insert a new chat.
sendBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              inputField.value = "";
              scrollToBottom();
          }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
// Sets the onmouseenter class for the chat box.
chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}

// Removes the onmouseleave class from the chat box.
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

// Get chat. php
setInterval(() =>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = ()=>{
// Check if the ready state is DONE.
      if(xhr.readyState === XMLHttpRequest.DONE){
// Sends a response to the chat box.
          if(xhr.status === 200){
            let data = xhr.response;
            chatBox.innerHTML = data;
// Scrolls to the bottom of the chat box
            if(!chatBox.classList.contains("active")){
                scrollToBottom();
              }
          }
      }
    }
// Sends an incoming id.
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("incoming_id="+incoming_id);
}, 500);

// Scroll the chat box to the bottom.
function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
  }
