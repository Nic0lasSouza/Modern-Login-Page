const container= document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active")
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active")
});
function showPasswordCA(){
    var inputPass = document.getElementById('senhaCA')
    var btnShowPass  = document.getElementById('btn-senhaCA')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill');
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill');
    }
}
function showPassword(){
    var inputPass = document.getElementById('senha')
    var btnShowPass  = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill');
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill');
    }
}
