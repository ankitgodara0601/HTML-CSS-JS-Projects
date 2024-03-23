const form = document.querySelector("form"),
emailField = form.querySelector(".email-field"),
emailInput = emailField.querySelector(".email-input"),
passField = form.querySelector(".pass"),
passInput = passField.querySelector(".pass-input"),
cPassField = form.querySelector(".confirm-pass"),
cPassInput = cPassField.querySelector(".confirm-pass-input"),
submitButton = form.querySelector(".btn");

passwordChecker = ()=>{
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if(!passInput.value.match(regularExpression)){
       return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}

cPasswordChecker = ()=>{
    if(passInput.value !== cPassInput.value){
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

const hideIcon = document.querySelectorAll(".hide-icon");

hideIcon.forEach(icon=>{
    icon.addEventListener("click",()=>{
        const pInput = icon.parentElement.querySelector("input");
        if(pInput.type === "password"){
            return pInput.type = "text";
        }
        pInput.type = "password";
    })
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    passwordChecker();
    cPasswordChecker();

    passInput.addEventListener("keyup", passwordChecker);
    cPassInput.addEventListener("keyup", cPasswordChecker);
})