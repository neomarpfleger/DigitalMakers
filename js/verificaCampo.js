
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


function verificaCampo(){

    var campo = document.getElementById("nome");

    if(campo.value===""){
        alert("favor preencher este campo");

    }
}