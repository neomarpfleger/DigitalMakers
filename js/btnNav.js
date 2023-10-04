
/*toggle = Significado
Adicione caso não tenha.
Remova caso tenha.*/

const btnMobile =document.getElementById("btnMobile");

function toggleMenu(){
    const linksNav = document.getElementById("linksNav");
    linksNav.classList.toggle("ative");
}

btnMobile.addEventListener('click', toggleMenu);