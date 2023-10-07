
/*toggle = Significado
Adicione caso não tenha.
Remova caso tenha.*/

const btnMobile =document.getElementById("btnMobile");

function toggleMenu(){

    
    const icone =document.getElementById("icone")
    const linksNav = document.getElementById("linksNav");
    linksNav.classList.toggle("ative");

    icone.classList.toggle("icone fa-regular fa-sun")
    
    const imgMobile = document.getElementById("imgMobile");
    imgMobile.classList.toggle("fa-sharp fa-solid fa-ranking-star");

    if(linksNav.classList.toggle('ative')){
        icone.innerHTML = '<i class="icone fa-regular fa-sun"></i>'
    }
}

btnMobile.addEventListener('click', toggleMenu);
