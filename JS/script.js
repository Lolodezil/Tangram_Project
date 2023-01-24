let tangram = document.querySelector(".tangram");
let button_carre = document.querySelector('.button--carre');
let button_tempo = document.querySelector('.button--tempo');
let button_autre = document.querySelector('.button--autre');
let button_encore = document.querySelector('.button--encore');
let alternativ_color = document.querySelector('.alternative');


alternativ_color.addEventListener('click', ()=>{
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
})

button_carre.addEventListener('click', ()=>{
  tangram.classList.add("class", "tangram--carre");
  tangram.classList.remove("tangram--tempo");
  tangram.classList.remove("tangram--autre");
  tangram.classList.remove("tangram--encore");

})

button_tempo.addEventListener('click', ()=>{
    tangram.classList.add("class", "tangram--tempo");
    tangram.classList.remove("tangram--carre");
    tangram.classList.remove("tangram--autre");
    tangram.classList.remove("tangram--encore");
})

button_autre.addEventListener('click', ()=>{
    tangram.classList.add("class", "tangram--autre");
    tangram.classList.remove("tangram--tempo");
    tangram.classList.remove("tangram--carre");
    tangram.classList.remove("tangram--encore");
})

button_encore.addEventListener('click', ()=>{
    tangram.classList.add("class", "tangram--encore");
    tangram.classList.remove("tangram--carre");
    tangram.classList.remove("tangram--tempo");
    tangram.classList.remove("tangram--autre");
})
