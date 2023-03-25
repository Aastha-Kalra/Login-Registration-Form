// SHOW/HIDE PASSWORD IN LOGIN
password = document.getElementById("password"),
 eyeIcon = document.getElementById('eyeIcon');

eyeIcon.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eyeIcon.src = "eye.png";
    }
    else{
        password.type = "password";
        eyeIcon.src = "eye-close.png";
    }
}

// VALIDATION EMAIL IN LOGIN 
document.getElementById(`alert`).style.color="red";
document.getElementById(`alert`).style.fontSize='10px';
document.getElementById(`alert`).style.position='absolute';
document.getElementById(`alert`).style.left='2%';
document.getElementById(`alert`).style.top='119%';
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.getElementById(`alert`).innerText=" ";
document.form1.text1.focus();
return true;
}
else
{
 document.getElementById(`alert`).innerText = "You have entered an invalid email address!";
document.form1.text1.focus();
return false;
}
}

// CREATE PASSWORD IN REGISTRATION
function CheckPassword(input){
    var pass = /^[A-Za-z]\w{7,14}$/;
    if(input.value.match(pass)){
        document.getElementById(`alert2`).innerText = "";
        return true;
    }
    else{
        document.getElementById(`alert2`).innerText = "wrong password";
        return false;
    }
}

// VALIDATION PASSWORD IN REGISTRATION
document.getElementById(`alert1`).style.color="red";
document.getElementById(`alert1`).style.fontSize='10px';
document.getElementById(`alert1`).style.position='absolute';
document.getElementById(`alert1`).style.left='2%';
document.getElementById(`alert1`).style.top='109%';
var flag = 1;
function check(elem){
    if(elem.value.length>0){
        if(elem.value != password.value){
            document.getElementById(`alert1`).innerText= " password does not match";
            flag=0;
        }
        else{
            document.getElementById(`alert1`).innerText = "";
            flag=1;
        }
    }else{
        document.getElementById(`alert1`).innerText = "Enter a valid password";
        flag=0;

    }

} 

// onsubmit: form validation 

function validate(){
    if(flag==1){
        return true;
    }else{
        return false;
    }
}

// show/hide password in registration

password1 = document.getElementById(`Rpassword`),
eye1 = document.getElementById(`eye1`);

eye1.onclick= function(){
    if(password1.type === "password"){
        password1.type ="text";
        eye1.src = "eye.png";
    }
    else{
        password1.type= "password";
        eye1.src = "eye-close.png";
    }
}

// switching login-register
container = document.querySelector('.container'),
 loginLink= document.querySelector('.login-link'),
 registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click' , ()=>{
    container.classList.add('active');
});
loginLink.addEventListener('click' , ()=>{
    container.classList.remove('active');
});


// for close button
// const iconClose= document.querySelector('.icon-close');
// const btnPopup = document.querySelector('btnLogin-popup')
// btnPopup.addEventListener('click' , ()=>{
//     container,classList.add('active-popup')
// })
// iconClose.addEventListener('click' , ()=>{
//     container.classList.remove('active=popup')
// })



