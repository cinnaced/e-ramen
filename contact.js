var form = document.getElementById('form')
var username = document.getElementById('username')
var email = document.getElementById('email')
var age = document.getElementById('age')
var male = document.getElementById('male')
var female = document.getElementById('female')
var agreement = document.getElementById('agreement')

function checkInputs(){
    if(fullname.value == '' || fullname.value.length < 10){
        alert("Name must contain more than 10 characters")
    } else if(!email.value.endsWith('@gmail.com')){
        alert("Invalid email, must end with @gmail.com")
    } else if(phonenum.value == '' || phonenum.value.length < 12 || phonenum.value.length > 14){
        alert("Invalid phone number, please re-enter phone number")
    } else if(!wet.checked && !dry.checked){
        alert("Must select 1 preference")
    } else if(message.value == '' || message.value.length < 5){
        alert("Message length must be more than 5 characters")
    } else if(!agreement.checked){
        alert("User must agree to receive newsletter")
    } else{
        confirm("Message has successfully been sent")
    }
}