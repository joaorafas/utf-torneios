/**
 * Retorna o elemento pelo id
 * Correção de erro 1 com o use strict 
*/
'use strict';
let $id = function (id) {
    return document.getElementById(id);
};

// Retorna mais de um elemento pelo seletor //
let $all = function (selector) {
    return document.querySelectorAll(selector);
};


/**
    Funções construtoras
*/
let Time = function (id, name, creator, email, game, category) {
    this.id = id;
    this.name = name;
    this.creator = creator;
    this.email = email;
    this.game = game;

    this.getName = function () {
        return this.name;
    };

    this.getCreator = function () {
        return this.creator;
    };

    this.getEmail = function () {
        return this.email;
    };

    this.getGame = function () {
        return this.game;
    };

    this.getCategory = function () {
        return this.category;
    };
};

$id("input-email").onblur = function () {
    if (this.validity.patternMismatch) {
        this.setCustomValidity("Insira um e-mail válido, por favor");
    }
}

$id("input-email").onfocus = function () {
    this.setCustomValidity("");
}


$id('input-game').onblur = function () {
    let content = $id('input-game').value;
    $id('input-game').value = content.toUpperCase();
};


/* window.onload = function () {

    document.querySelector('#strong').innerHTML = `<strong> ${localStorage.getItem('details')} </strong>`
;
} */


let times = [];
let timeId = restore('timeId');
$id('span-time').innerHTML = timeId;
document.forms[0].onsubmit = function (e) {
    //evita que o formulário seja submetido e a página atualizada
    e.preventDefault();

    let name = $id('input-name').value;
    let creator = $id('input-creator').value;
    let email = $id('input-email').value;
    let game = $id('input-game').value;

    let time = new Time(++timeId, name, creator, email, game);
    save('timeId', timeId);
    save(time);
    times.push(time);
    restoreJson(timeId);
    console.log(name);

    //Mostra a mensagem de sucesso // 

    $id('panel-message-time').classList.remove('my-hide-message');
    $id('panel-message-time').classList.add('my-show-message');

    $id('span-time').innerHTML = timeId;

    //Seletor $(pai > filho)
    $('.div-sucess > #btn-sucess').css('background', '#28a745');

};

// Seletor $(anterior + proximo)
$id('button-clean').onclick = function () {
    $('#btn-sucess + button').css('background', '#28a745');
}


let usernameFromJSON;
function getUsernameFromJSON(){
    let userCreated = JSON.parse(localStorage.getItem('userId'));
    usernameFromJSON = userCreated.email;
    console.log(usernameFromJSON);
    return usernameFromJSON;
}


/**
 * Relatório 
 * Correção erro 4, faltando ponto e vírgula depois do container report
 */
let containerReport = $id('container-report');
$id('button-show').onclick = function () {
    containerReport.innerHTML = '';
    //reseta o container
    //correção erro 5, i não estava definido no for e foi colocado o let
    for (let i in times) {
        let time = times[i];

        let tr = document.createElement('tr');
        tr.appendChild(document.createTextNode('Time ' + time.id));
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');


        td.appendChild(document.createTextNode(time.getName()));
        td2.appendChild(document.createTextNode(time.getCreator()));
        td3.appendChild(document.createTextNode(time.getEmail()));
        td4.appendChild(document.createTextNode(time.getGame()));

        containerReport.appendChild(tr);
        containerReport.appendChild(td);
        containerReport.appendChild(td2);
        containerReport.appendChild(td3);
        containerReport.appendChild(td4);
    }
};


