
/*toggle = Significado
Adicione caso não tenha.
Remova caso tenha.*/

const btnMobile = document.getElementById("btnMobile");

function toggleMenu(){

    const linksNav = document.getElementById("linksNav");
    linksNav.classList.toggle("ative");

    const icone = document.getElementById("icone");
    if(linksNav.classList == 'ative'){
        icone.innerHTML = '<i class="fa-solid fa-x"></i>';
    }else{
        icone.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

btnMobile.addEventListener('click', toggleMenu);
