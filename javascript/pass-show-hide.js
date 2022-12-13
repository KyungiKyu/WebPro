// Adds the active icon to the form.
const pswrdField = document.querySelector(".form input[type='password']"),
toggleIcon = document.querySelector(".form .field i");

// Adds an icon to the toggleIcon.
toggleIcon.onclick = () =>{
  if(pswrdField.type === "password"){
    pswrdField.type = "text";
    toggleIcon.classList.add("active");
// Removes the active icon.
  }else{
    pswrdField.type = "password";
    toggleIcon.classList.remove("active");
  }
}
