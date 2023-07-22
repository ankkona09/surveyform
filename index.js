var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phnoError = document.getElementById('phno-error');
var ageError = document.getElementById('age-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name length cannnot be zero';
        return false;
    }
    else if (name.length <= 3) {
        nameError.innerHTML = 'Atleast 4 letters';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #148034;"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length == 0) {
        emailError.innerHTML = 'Email length cannot be zero';
        return false;
    }
    else if (!email.match(emailPattern)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #148034;"></i>';
    return true;
}
function validatePhone() {
    var phno = document.getElementById('contact-phno').value;
    var phnoPattern = /^\d{10}$/;
    if (phno.length == 0) {
        phnoError.innerHTML = 'Phone number length cannnot be zero';
        return false;
    }
    else if (phno.length != 10) {
        phnoError.innerHTML = 'Phone number should be a 10 digit number';
        return false;
    }
    else if (!phno.match(phnoPattern)) {
        phnoError.innerHTML = 'Phone number invalid';
        return false;
    }
    phnoError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #148034;"></i>';
    return true;
}
function validateAge() {
    var age = document.getElementById('contact-age').value;
    if (age.length == 0) {
        ageError.innerHTML = 'Age length cannnot be zero';
        return false;
    }
    else if (age < 18 || age > 100) {
        ageError.innerHTML = 'Age cannot be below 18 and above than 100';
        return false;
    }
    ageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #148034;"></i>';
    return true;
}

