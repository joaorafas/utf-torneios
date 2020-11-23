

// Passagem de funçao como parametro
class User {
    constructor(userId, name, email, password) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

// Retorna o elemento pelo id
let $id = function (id) {
    return document.getElementById(id);
}

/**
 * Deixa apenas digitar letras e não números no campo do nome 
 * Passagem de funçao como parametro
 */

function letras(event) {
    let code = event.charCode;
    if (!(code >= 97 && code <= 122 || code >= 65 && code <= 90 || code == 32 || code > 191 && code <= 255)) {
        event.preventDefault();
    }
}
$id('name').onkeypress = letras;



function backHome() {

    if (confirm("Você deseja voltar a página inicial?")) {
        window.location = "index.html";
    }
}

function continueSignUp() {

        window.location = "login.html";
    }


// Checa se o usuário possui um e-mail válido


function validarEmail() {

    let email = document.querySelector('#email');
    let error = document.querySelector('#error-email');

    if (!email.checkValidity()) {
        error.innerHTML = "Email inválido";
    }
}

function validarSenha() {
    let password = document.querySelector('#password');
    let error = document.querySelector('#error-password');

    if (password.value.length <= 3) {
        error.innerHTML = "Senha fraca";
    }
}

function clearInputName() {
    document.getElementById('name').value = "";
}

function clearInputPassword() {
    document.getElementById('password').value = "";
}



// Tira a mensagem de email invalido quando o usuário colocar o mouse no input

function redefinirMsg() {
    let error = document.querySelector('#error-email');
    document.getElementById('email').value = "";
    if (error.innerHTML == "Email inválido") {
        error.innerHTML = "";
    }

}

function validarRadio() {
    let isChecked = false;
    let elements = document.getElementsByName("optradio");
    for (i in elements) {
        if (elements[i].checked) {
            isChecked = true;
            return true;
        }
    }
    return false;
}


document.forms[0].onsubmit = function (e) {
    //evita que o formulário seja submetido e a página atualizada
    e.preventDefault();
    
    let name = $id('name').value;
    let email = $id('email').value;
    let password = $id('password').value;
    let data=localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;

    let userId = restore('userId');

    let users = new User(userId++, name, email, password);
    save('userId', userId);
    console.log(users);
    data.push(users);
    if(localStorage){
        localStorage.setItem("details", JSON.stringify(data));
    } 

}

// Teste pra validação se o formulário vai ser enviado ou não
document.querySelector("form").addEventListener("submit", event => {

        $('#first-step').fadeOut(1000);
        $('#btn-next').fadeOut(1000);
        $('#btn-home').fadeOut(1000);
        $('#second-step').fadeIn(1000);
        $('#third-step').fadeIn(1000);
        $('#btn-register').fadeIn(1000);
        $('#item').focus();

    // não vai enviar o formulário
    event.preventDefault();
})

//check already registered users
function emailExist(value){
    let data=localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;
    localStorage.setItem("userId", JSON.stringify(data));
    let existemail = JSON.parse(localStorage.getItem("userId"));
    
    let emailid = existemail.map((email,i,existemail) =>{
        return existemail[i].email;
    });

     let getexistemail = emailid.filter((email)=>{
        if(email == value.value){
            value.setCustomValidity('email exist. try something else');
            
        }else{
            value.setCustomValidity("");
        }
    });
}



