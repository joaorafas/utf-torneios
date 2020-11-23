let Grupo= function (id, name, creator, email, game) {
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

};


$(function () {
    $('#btn-hide').click(function () {
        $('#group-info').slideToggle(600);
        if ($(this).text() == 'Mostrar') {

            $(this).text('Esconder');
        } else {
            $(this).text('Mostrar');
        }
    });
});

$(function () {
    $('#group-info2').slideToggle(600);
    $('#btn-show').click(function () {
        $('#group-info2').slideToggle(600);        
        if ($(this).text() == 'Esconder') {
            $(this).text('Mostrar');
            $('.showHide  button').css('background', '#858796');
        } else {
            $(this).text('Esconder');
             //  Seletor $(ancestral descendente)
            $('.showHide  button').css('background', '#dc3545');
        }
           
    });
});

$(function () {
    $('#btn-show').click(function () {		
        $('table').addClass('card-header py-3');
        $('p').addClass('text-primary m-0 font-weight-bold');
        $('p').addClass('sssss');
		});
});

$(function () {
    $("#select-team").css({
        "border": "2px solid #483D8B",
        "color": "black",
    });

    
    $("#select-team option:not(:checked)").css({
        "background-color": "#DAA520",
        "color": "black",
    });

    $(".form-control").change(function () {
        $(this).css('color', '#800000')
    })

});

$(function () {
    $("input").css({
        "border": "2px solid #483D8B",
    });
});


$("#btn-delete").on("click", function () {
    alertify.confirm('Deseja excluir esse cadastro?', function () {
        alertify.success('Cadastro excluído com sucesso')
    }
        , function () {
            alertify.error('Ação cancelada')
        });
});


let grupos = [];
let grupoId = restore('grupoId');
$id('span-time').innerHTML = grupoId;
document.forms[0].onsubmit = function (e) {
    //evita que o formulário seja submetido e a página atualizada
    e.preventDefault();

    let name = $id('input-name').value;
    let selectTeam = $id('select-team').value;
    let email = $id('input-email').value;
    let game = $id('input-game').value;

    let grupo = new Grupo(++grupoId, name, selectTeam, email, game);
    save('grupoId', grupoId);
    saveC(grupo);
    grupos.push(grupo);
    restoreJson(grupoId);
    console.log(name);

    for (let i in grupos) {
        let grupo = grupos[i];

        let tr = document.createElement('tr');
        tr.appendChild(document.createTextNode('Time ' + grupo.id));
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');


        td.appendChild(document.createTextNode(grupo.getName()));
        td2.appendChild(document.createTextNode(grupo.getCreator()));
        td3.appendChild(document.createTextNode(grupo.getEmail()));
        td4.appendChild(document.createTextNode(grupo.getGame()));

        containerReport.appendChild(tr);
        containerReport.appendChild(td);
        containerReport.appendChild(td2);
        containerReport.appendChild(td3);
        containerReport.appendChild(td4);
    }

}