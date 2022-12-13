// Signup a user
const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-text");

// Sets the onsubmit event.
form.onsubmit = (e)=>{
    e.preventDefault();
}

// Signup. php
continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
// Check if the ready state is DONE.
      if(xhr.readyState === XMLHttpRequest.DONE){
// Send a response to the XHR.
          if(xhr.status === 200){
              let data = xhr.response;
// Set href to user. php
              if(data === "success"){
                location.href="users.php";
// Sets the error text.
              }else{
                errorText.style.display = "block";
                errorText.textContent = data;
              }
          }
      }
    }
// Sends the form data to the server.
    let formData = new FormData(form);
    xhr.send(formData);
}
