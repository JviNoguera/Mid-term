
function validateName() {
    
    let e = document.getElementById('fullname').value;

    if (e === "") {
        document.getElementById('nameErr').textContent = 'Please introduce your full name!'; 
        console.log(e);  
        return false; /*condicion para poder ejecutar la funcion de validar el formulario */
    } else 
        return True

}

// document.getElementById("Form").addEventListener('submit', (event) => {
//     event.preventDefault();
//     validateName();
//     console.log(event);
// })

function validateEmail() {
    
    let e = document.getElementById('email').value;

    if (e === "") {
        document.getElementById('emailErr').textContent = 'Please introduce your email!'; 
        console.log(e);
        return false;
    } else 
        return True
}

// document.getElementById("Form").addEventListener('submit', (event) => {
//     event.preventDefault();
//     validateEmail();
//     console.log(event);
// })

function validatePhone() {
    
    let e = document.getElementById('phone').value;

    if (e === "") {
        document.getElementById('phoneErr').textContent = 'Please introduce your phone number!'; 
        console.log(e);
        return false;
    } else 
        return True  
    
}

// document.getElementById("Form").addEventListener('submit', (event) => {
//     event.preventDefault();
//     validatePhone();
//     console.log(event);
// })

function validateMessage() {
    
    let e = document.getElementById('message').value;

    if (e === "") {
        document.getElementById('messageErr').textContent = 'Please introduce your Message!'; 
        console.log(e);
        return false;
    } else 
        return True  
  
}

// document.getElementById("Form").addEventListener('submit', (event) => {
//     event.preventDefault();
//     validateMessage();
//     console.log(event);
// })

function validateForm () {

    var nameTrue = validateName()
    var emailTrue = validateEmail()
    var phoneTrue = validatePhone()
    var messageTrue = validateMessage()
   
    return nameTrue && emailTrue && phoneTrue && messageTrue;
}

document.getElementById("Form").addEventListener('submit', (event) => {
  
    if (!validateForm()) { 
        event.preventDefault();
    }
});
