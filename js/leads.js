
function verificaCampo(event){
    const nome = document.getElementById("nome");
    //const email = document.getElementById("email");
    var error = document.querySelector(".error");

    if(nome.value ===""){
        error.style.display = 'block';
        event.preventDefault();
    } else {
        emailError.style.display = 'none';
    }
}