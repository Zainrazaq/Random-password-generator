const passwordBox = document.getElementById('password')
const lenght = 12;

const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase ='abcdefghijklmnopqrstuvwxyz'
const numbers ='1234567890'
const specialCh ='!@#$%^&*()_-=/'

const allChars = upperCase + lowerCase + numbers + specialCh;

function creatpassword() {
    let password = ''
    password += upperCase[Math.floor(Math.random()* upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += numbers[Math.floor(Math.random()* numbers.length)]
    password += specialCh[Math.floor(Math.random()* specialCh.length)]
    while (lenght > password.length) {
    password += allChars[Math.floor(Math.random()* allChars.length)]
        }
        passwordBox.value = password
}
function copyPassword() {
    passwordBox.select()
    document.execCommand('copy')
}