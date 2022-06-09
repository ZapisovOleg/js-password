
const password = document.querySelector("input");
const showBtn = document.querySelector("span");
function passwordFunc(){
if(password.type==="password"){
    password.type = "text";
    showBtn.classList.add("hide-btn");
} else{
    password.type = "password";
    showBtn.classList.remove('hide-btn')
}

};