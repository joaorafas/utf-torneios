//movimento do mouse
function mouseHome() {
    if (confirm("Você deseja voltar a página inicial?")) {
        window.location = "index.html";
    }
}

function validation() {
    let input_text = document.getElementsByTagName("input");
    let input_password = document.getElementsByName("input_password");

    if (input_text.value.length <= 3 || input_password.value.length <= 3) {
        return false;
    }
    else {
        return true;
    }

}

//funçao aninhada 
// Flecha - Arrow Function
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