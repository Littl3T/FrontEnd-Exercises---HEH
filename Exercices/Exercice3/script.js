// Constantes
const PasswordInput = document.getElementById('Password')
const ScoreMeter = document.getElementById('Score')
const ShowBox = document.getElementById('Show')
const NoGoodPassword = ["123456", "12345", "1234", "abc123", "abc", 
"pwd", "password", "mypassword", "dragon", "monkey", "shadow", 
"master", "superman", "spiderman", "batman", "god", "sex", "boobs", 
"azerty", "qwerty", "iloveyou", "computer", "welcome", "matrix", 
"secret", "login"]

// Handler
PasswordInput.addEventListener('input',CalculatePasswordLenghtOK)
ShowBox.addEventListener('change',ShowHide)

// Functions
function CalculatePasswordLenghtOK(){
    let length = PasswordInput.value.length
    if (NoGoodPassword.includes(PasswordInput.value)){
        ScoreMeter.value = 1
    }else ScoreMeter.value = length
}
function ShowHide(){
    if(ShowBox.checked){
        PasswordInput.setAttribute('type','text')
    } else PasswordInput.setAttribute('type','password')
}