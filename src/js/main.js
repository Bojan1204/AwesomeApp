import { Button } from "bootstrap";


let header = document.getElementById('probicabre');
let hideText = document.getElementById('scrollFeatures');
let pocetak = document.getElementById('pocetak');


window.addEventListener('scroll', ()=>{
    header.classList.toggle('probicabree', window.scrollY > 1);
});

window.addEventListener('scroll', ()=>{
    pocetak.classList.toggle('lala', window.scrollY > 500);
});












