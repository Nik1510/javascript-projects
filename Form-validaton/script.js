let nameError=document.getElementById("name-error")
let phoneError=document.getElementById("phone-error")
let emailError=document.getElementById("email-error")
let messageError=document.getElementById("message-error")
let submitError=document.getElementById("submit-error")

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Please enter a valid full name.";
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    var phoneError = document.getElementById('phone-error');

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        return false;
    }
    if (!phone.match(/^\d{10}$/)) {
        phoneError.innerHTML = 'Only digits allowed';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    var emailError = document.getElementById('email-error');

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    var emailPattern = /^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/;
    if (!email.match(emailPattern)) {
        emailError.innerHTML = 'Enter a valid email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var messageError =document.getElementById('message-error');
    var required=30;
    var left = required-message.length;
    if(left>0){
        messageError.innerHTML=left+' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

 function validateForm(){
    if (!validateEmail() || !validatePhone || !validateMessage () || !validateName()) {
        submitError.style.display='block';
        submitError.innerHTML ='Please complete the form'
        setTimeout(function(){submitError.style.display='none';},3000)
        return false;
        
    }
}
