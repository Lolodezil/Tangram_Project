let tangram = document.querySelector(".tangram");
let button_carre = document.querySelector('.button--carre');
let button_tempo = document.querySelector('.button--tempo');

button_carre.addEventListener('click', ()=>{
  tangram.classList.replace("tangram--tempo","tangram--carre");
})

button_tempo.addEventListener('click', ()=>{
    tangram.classList.replace("tangram--carre","tangram--tempo");
})