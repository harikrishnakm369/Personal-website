var nameError = document.getElementById('name-error');
var emailError= document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');


function nameValidation(){
    var nam= document.getElementById('contact-name').value;
    if(nam.length==0){
        nameError.innerHTML='Name Required!!!';
        return false;
    }
    if(!nam.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        nameError.innerHTML='Enter full name';
        return false;
}
    
    else{
        nameError.innerHTML='Valid name!!!';
        return true;
    }
        }

 function emailValidation(){
    var mail=document.getElementById('contact-email').value;

    if(mail.length==0){
        emailError.innerHTML='Email Requuired!!!!';
        return false;
    }
    else if(!mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~`-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML='invalid email!!!!';
        return false;
    }
    else{
        emailError.innerHTML='Valid email!!!';
        return true;
    }
}
function messageValidation(){
    var message=document.getElementById('contact-message').value;
    var required=30
    var remain=required-message.length
    if(remain>0){
        messageError.innerHTML=remain + 'more characters required!!';
        return false;
    }
    else{
        messageError.innerHTML='Valid Message';
        return true;
    }
}
function formValidation(){
    if(!nameValidation() || !emailValidation() || !messageValidation()){
        submitError.innerHTML='Please fill the required field to send form!!';
        return false
    }else{
        return true;
    }
}