let output = document.getElementById("Display-Result");
let input = document.getElementById("input");
let sbmt = document.getElementById("Submit");
const lc = "abcdefghijklmnopqrstuvwxyz";
const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  

const password_gen = (password_length, isLowerCase, isUpperCase, isNumber, isSpecial) => {
    let password = "";
    let allowedchars = "";
    const lc = "abcdefghijklmnopqrstuvwxyz";
    const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const special = "!@#$%^&*_-+/";


    allowedchars += isLowerCase ? lc : "";
    allowedchars += isUpperCase ? uc : "";
    allowedchars += isNumber ? num : "";
    allowedchars += isSpecial ? special : "";

    for (i = 0; i < password_length; i++) {
        password += allowedchars[Math.floor(Math.random() * allowedchars.length)];
    }
    return password;
}


    sbmt.addEventListener("click", () => {

    if(/[a-zA-Z]/.test(input.value))
    {
        output.textContent = "Should not contain letters"
    }
    let password_length = Number(input.value);
    let isLowerCase = document.getElementById("Lowercase").checked;
    let isUpperCase = document.getElementById("Uppercase").checked;
    let isNumber = document.getElementById("Number").checked;
    let isSpecial = document.getElementById("special").checked;
    if(password_length<0)
    {
        output.textContent = "Password length must be greater than zero!"
    }
    if(password_length>15)
    {
        output.textContent = "Enter number less than 15";
        return;
    }
    
    // ✅ Check if none of them are selected
    if (!isLowerCase && !isUpperCase && !isNumber && !isSpecial) {
        output.textContent = "Check at least one box to generate!";
        return; // stop execution here
    }

    output.textContent = `Password = ${password_gen(password_length, isLowerCase, isUpperCase, isNumber, isSpecial)}`;
});

