
/*toggle = Significado
Adicione caso não tenha.
Remova caso tenha.*/

const btnMobile =document.getElementById("btnMobile");

function toggleMenu(){
    const linksNav = document.getElementById("linksNav");
    linksNav.classList.toggle("ative");

    const imgMobile = document.getElementById("imgMobile");
    imgMobile.classList.toggle("fa-sharp fa-solid fa-ranking-star");

    if(linksNav.classList.contains('ative')){
        icone.innerHTML = '<i class="icone fa-regular fa-sun"></i> <P>Day</p>'
    }else{
        icone.innerHTML = '<i class="icone fa-solid fa-moon"></i> <P>Nigth</p>'
    }
}

btnMobile.addEventListener('click', toggleMenu);
