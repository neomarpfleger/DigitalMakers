
const debounce = function(func, wait, immediate){
  let timeout;  
  return function(...args) {
    const context = this;
    const later = function(){
      timeout = null
      if(!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context.args)
  };
};



const target = document.querySelectorAll  ('[data-anime]');
const animetionClass = 'animete';

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

  target.forEach(function(elemento){

    if((windowTop) > elemento.offsetTop){
      elemento.classList.add(animetionClass);
    }else{
      elemento.classList.remove(animetionClass);
    }
  });
}

animeScroll()

if(target.length){
  window.addEventListener("scroll", debounce (function(){
    animeScroll();
    console.log("Neomar")
  }, 20));
}
