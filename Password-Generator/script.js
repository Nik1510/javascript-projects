const passwordBox = document.getElementById("password");
const length= 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol ="@$#!%^&*()`~P{+][}|':.<>/?=-"

const allChars= upperCase+lowerCase+number+symbol;

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}

function copyPassword(){
    if(!passwordBox.value){
        return;
    }
    navigator.clipboard.writeText(passwordBox.value)
    .then(()=>alert("Passwords copied to clipboard"))
    .catch(err=> alert("Failed to copy the password: "+ err))
}
// copyPassword();
createPassword();