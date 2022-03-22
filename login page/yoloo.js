var passwordbox=document.getElementById("form3Example4");
var eye=document.getElementById("togglePassward");

eye.addEventListener("click",showPassward);

function showPassward(){

    const type=passwordbox.getAttribute("type") === "password" ? 'text' : "password";
    passwordbox.setAttribute("type", type);
    this.classList.toggle('bi-eye');
    



};


