let tangram = document.querySelector(".tangram");
let button_carre = document.querySelector('.button--carre');
let button_tempo = document.querySelector('.button--tempo');
let button_autre = document.querySelector('.button--autre');
let button_encore = document.querySelector('.button--encore');

let alternativ_color = document.querySelector('.alternative');


alternativ_color.addEventListener('click', ()=>{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    
})


button_carre.addEventListener('click', ()=>{
  tangram.classList.replace("tangram--tempo","tangram--carre");
  tangram.classList.replace("tangram--autre","tangram--carre");
  tangram.classList.replace("tangram--encore","tangram--carre");
})

button_tempo.addEventListener('click', ()=>{
    tangram.classList.replace("tangram--carre","tangram--tempo");
    tangram.classList.replace("tangram--autre","tangram--tempo");
    tangram.classList.replace("tangram--encore","tangram--tempo");
})

button_autre.addEventListener('click', ()=>{
    tangram.classList.replace("tangram--carre","tangram--autre");
    tangram.classList.replace("tangram--tempo","tangram--autre");
    tangram.classList.replace("tangram--encore","tangram--autre");
})

button_encore.addEventListener('click', ()=>{
    tangram.classList.replace("tangram--carre","tangram--encore");
    tangram.classList.replace("tangram--tempo","tangram--encore");
    tangram.classList.replace("tangram--autre","tangram--encore");
})
