
function verificarFormularioPreenchido() {
    const formulario = document.getElementById("meuFormulario");
    const camposObrigatorios = formulario.querySelectorAll("[required]");

    for (const campo of camposObrigatorios) {
        if (!campo.value) {
            alert("Preencha todos os campos obrigatórios antes de continuar.");
            return false;
        }
    }

    return true;
}


function verificaCampo(event){

    var campo = document.getElementById("nome");
    var error = document.getElementById("error");

    if(campo.value ===""){
        error.style.display = 'block';
        event.preventDefault();
    } else {
        emailError.style.display = 'none';
    }
}