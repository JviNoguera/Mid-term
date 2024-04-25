
function validateName() {
    
    let e = document.getElementById('fullname').value;

    if (e === "") {
        document.getElementById('nameErr').textContent = 'Please introduce your full name!'; 
        console.log(e);  
        return false; /*condicion para poder ejecutar la funcion de validar el formulario */
    } else 
        return true

}

function validateEmail() {
    
    let e = document.getElementById('email').value;

    if (e === "") {
        document.getElementById('emailErr').textContent = 'Please introduce your email!'; 
        console.log(e);
        return false;
    } else 
        return true
}

function validatePhone() {
    
    let e = document.getElementById('phone').value;

    if (e === "") {
        document.getElementById('phoneErr').textContent = 'Please introduce your phone number!'; 
        console.log(e);
        return false;
    } else 
        return true  
    
}

function validateMessage() {
    
    let e = document.getElementById('message').value;

    if (e === "") {
        document.getElementById('messageErr').textContent = 'Please introduce your Message!'; 
        console.log(e);
        return false;
    } else 
        return true  
  
}

function validateForm () {

    var nameTrue = validateName()
    var emailTrue = validateEmail()
    var phoneTrue = validatePhone()
    var messageTrue = validateMessage()
   
    return nameTrue && emailTrue && phoneTrue && messageTrue;
}

document.getElementById("Form").addEventListener('submit', (event) => {
  
    event.preventDefault(); /*Esto debe ir antes del if para no refrescar la página*/
    if (!validateForm()) { 
     
    }
});
