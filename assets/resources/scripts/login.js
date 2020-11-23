class User {
    constructor(userId, email, password) {
        this.userId = userId;
        this.email = email;
        this.password = password;
    }
}

// Retorna o elemento pelo id
let $id = function (id) {
    return document.getElementById(id);
}

// Redirecionar após login

let redirect = function(){
    document.location.href="teams.html"
 } 

//Movimento do mouse
function mouseHome() {
    if (confirm("Você deseja voltar a página inicial?")) {
        window.location = "index.html";
    }
}
/*
window.onload = function () {
    let usernameFromJSON;
    document.querySelector('#strong').innerHTML = `<strong> ${localStorage.getItem('details')} </strong>`

	console.log(usernameFromJSON);
	return usernameFromJSON;
; */




function validation() {
    let input_text = document.getElementsByTagName("input");
    let input_password = document.getElementsByName("input-password");

    if (input_text.value.length <= 3 || input_password.value.length <= 3) {
        return false;
    }
    else {
        return true;
    }

}

/**
 * Funçao aninhada 
 * Flecha - Arrow Function 
 */
let input_fields = document.querySelectorAll(".input");
let login_btn = document.querySelector("#login_btn");
input_fields.forEach(function (input_item) {
    input_item.addEventListener("input", function () {
        if (input_item.value.length > 3) {
            login_btn.disabled = false;
            login_btn.className = "btn enabled"
        }
    })
})


document.forms[0].onsubmit = function (e) {
    //evita que o formulário seja submetido e a página atualizada
    e.preventDefault();
    
    let email = $id('email').value;
    let password = $id('password').value;
    let matchEmail = JSON.parse(localStorage.getItem("details"));
    let userId = restoreLoans('userId');


    let users = new User(userId++, name, email, password);
    saveJson('userId', userId);

    let emailArray =[];
        let passArray=[];
         let result = matchEmail.map((email, i, matchEmail) =>{
        
           emailArray.push(matchEmail[i].email);
           passArray.push(matchEmail[i].password);
           
        });
       // console.log(emailArray);
        if(emailArray.indexOf(email) > -1 && passArray.indexOf(password) > -1){
            console.log("Login realizado com sucesso");
            document.location.href="teams.html";
        }else{
            console.log("Você não tem registro no site");
        }
        
}

//Check if password is matching
function verifyPassword(input){
    if(input.value != document.getElementById("password").value){
        input.setCustomValidity("A senha deve ser compatível");
    }else{
        input.setCustomValidity("");
    }
}


